import { useMutation } from '@apollo/client';
import { yupResolver } from '@hookform/resolvers/yup';
import moment from 'moment';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import * as yup from 'yup';
import { MutationCreateUser } from '../../graphql/mutations';

const todayDayZeroed = moment().startOf('day').toDate();

const schema = yup
  .object({
    name: yup
      .string()
      .matches(/^[a-zA-ZÀ-ÿ\s]+$/, 'Nome inválido. Apenas letras e espaços são permitidos.')
      .test('full-name', 'Informe o nome completo (nome e sobrenome)', (value) => {
        const nameParts = value ? value.split(' ') : [];
        return nameParts.length >= 2;
      })
      .required('Informe seu nome completo'),
    email: yup.string().email('Email inválido').required('Informe seu email'),
    password: yup
      .string()
      .min(6, 'A senha deve conter pelo menos 6 dígitos')
      .max(15, 'A senha deve conter no máximo 20 dígitos')
      .required('Informe sua senha'),
    phone: yup
      .string()
      .length(11, 'O número de telefone deve conter exatamente 11 dígitos')
      .required('Informe seu número de telefone'),
    birthDate: yup
      .date()
      .max(todayDayZeroed, 'A data de nascimento não pode ser futura')
      .test('idade', 'Você deve ter pelo menos 15 anos', (value) => {
        const dateOfBirth = moment(value);
        return dateOfBirth.isBefore(moment().subtract(15, 'years'));
      })
      .required('Informe sua data de nascimento'),
    role: yup.string().oneOf(['user', 'admin'], 'Selecione uma função válida').required('Informe sua função'),
  })
  .required();

export function useAddUser() {
  const todayDate = moment().startOf('day').toDate();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onSubmit',
    defaultValues: {
      birthDate: todayDate,
    },
  });

  const [createUserMutation, { loading }] = useMutation(MutationCreateUser, {
    onCompleted: () => {
      toast.success('Login realizado com sucesso!');
      navigate('/users');
    },
    onError: (error) => {
      const errorMessage = error.message || 'Erro ao criar usuário. Tente novamente.';
      toast.error(errorMessage);
    },
  });

  const handleFormSubmit = async (formData: {
    name: string;
    email: string;
    password: string;
    phone: string;
    birthDate: Date;
    role: string;
  }) => {
    await createUserMutation({ variables: { data: formData } });
  };
  return { handleFormSubmit, loading, errors, handleSubmit, register };
}

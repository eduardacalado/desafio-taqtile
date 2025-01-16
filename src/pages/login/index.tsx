import * as S from './styles.ts';
import InstaqLogo from '../../assets/instaq-logo.png';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useMutation } from '@apollo/client';
import { MutationLogin } from '../../graphql/mutations.ts';
import { toast } from 'react-toastify';
import { Button } from '../../components/Button/index.tsx';
import { useNavigate } from 'react-router-dom';

const schema = yup
  .object({
    email: yup.string().email('Email inválido').required('Infome seu email'),
    password: yup.string().min(6, 'A senha deve conter pelo menos 6 dígitos').required('Informe sua senha'),
  })
  .required();

export function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema), mode: 'onSubmit' });

  const navigate = useNavigate();

  const [loginMutation, { loading }] = useMutation(MutationLogin, {
    onCompleted: (data) => {
      localStorage.setItem('token', data.login.token);
      localStorage.setItem('isAuthenticated', 'true');
      toast.success('Login realizado com sucesso!');
      navigate('/users');
    },
    onError: (error) => {
      const errorMessage = error.message || 'Erro ao fazer login. Tente novamente';
      toast.error(errorMessage);
    },
  });

  const handleFormSubmit = async (formData: { email: string; password: string }) => {
    await loginMutation({ variables: { data: formData } });
  };

  return (
    <S.ScreenContainer>
      <S.TitleContainer>
        <S.WelcomeTitleContainer>
          <S.WelcomeTitle>Bem Vindo(a) à</S.WelcomeTitle>
        </S.WelcomeTitleContainer>
        <S.InstaqTitle src={InstaqLogo} />
      </S.TitleContainer>
      <S.InputArea>
        <S.InputsButtonContainer onSubmit={handleSubmit(handleFormSubmit)}>
          <S.InputContainer>
            <S.InputLabel>Email</S.InputLabel>
            <S.TextInput {...register('email', { required: true })} />
            {errors.email && <S.ErrorMessage>{errors.email.message}</S.ErrorMessage>}
          </S.InputContainer>
          <S.InputContainer>
            <S.InputLabel>Senha</S.InputLabel>
            <S.TextInput {...register('password', { required: true, minLength: 6 })} />
            {errors.password && <S.ErrorMessage>{errors.password.message}</S.ErrorMessage>}
          </S.InputContainer>
          <Button text='Entrar' type='submit' isLoading={loading} />
        </S.InputsButtonContainer>
      </S.InputArea>
    </S.ScreenContainer>
  );
}

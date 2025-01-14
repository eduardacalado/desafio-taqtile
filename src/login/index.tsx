import * as S from './styles.ts';
import InstaqLogo from '../assets/instaq-logo.png';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

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
  } = useForm({ resolver: yupResolver(schema) });
  const onSubmit = (data: unknown) => console.log(data);

  return (
    <S.ScreenContainer>
      <S.TitleContainer>
        <S.WelcomeTitleContainer>
          <S.WelcomeTitle>Bem Vindo(a) à</S.WelcomeTitle>
        </S.WelcomeTitleContainer>
        <S.InstaqTitle src={InstaqLogo} />
      </S.TitleContainer>
      <S.InputArea>
        <S.InputsButtonContainer>
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
          <S.LoginButton onClick={handleSubmit(onSubmit)}>
            <S.LoginButtonText>Entrar</S.LoginButtonText>
          </S.LoginButton>
        </S.InputsButtonContainer>
      </S.InputArea>
    </S.ScreenContainer>
  );
}

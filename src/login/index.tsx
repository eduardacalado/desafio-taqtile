import * as S from './styles.ts';
import InstaqLogo from '../assets/instaq-logo.png';

export function Login() {
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
            <S.TextInput />
          </S.InputContainer>
          <S.InputContainer>
            <S.InputLabel>Senha</S.InputLabel>
            <S.TextInput />
          </S.InputContainer>
          <S.LoginButton>
            <S.LoginButtonText>Entrar</S.LoginButtonText>
          </S.LoginButton>
        </S.InputsButtonContainer>
      </S.InputArea>
    </S.ScreenContainer>
  );
}

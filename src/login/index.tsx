import * as S from './styles.ts';
import InstaqLogo from '../assets/instaq-logo.png';

function App() {
  return (
    <S.ScreenContainer>
      <S.TitleContainer>
        <S.WelcomeTitleContainer>
          <S.WelcomeTitle>Bem Vindo(a) à</S.WelcomeTitle>
        </S.WelcomeTitleContainer>
        <S.InstaqTitle src={InstaqLogo} />
      </S.TitleContainer>
      <S.InputContainer>
        <S.InputLabel>Email</S.InputLabel>
        <S.InputArea />
      </S.InputContainer>
      <S.InputContainer>
        <S.InputLabel>Senha</S.InputLabel>
        <S.InputArea />
      </S.InputContainer>
      <S.LoginButton>
        <S.LoginButtonText>Entrar</S.LoginButtonText>
      </S.LoginButton>
    </S.ScreenContainer>
  );
}

export default App;

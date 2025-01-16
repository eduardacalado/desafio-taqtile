import * as S from './styles.ts';
import InstaqLogo from '../../assets/instaq-logo.png';

export function UsersList() {
  return (
    <S.ScreenContainer>
      <S.TitleContainer>
        <S.WelcomeTitleContainer>
          <S.WelcomeTitle>Bem Vindo(a) à</S.WelcomeTitle>
        </S.WelcomeTitleContainer>
        <S.InstaqTitle src={InstaqLogo} />
      </S.TitleContainer>
    </S.ScreenContainer>
  );
}

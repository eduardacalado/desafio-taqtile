import { toast } from 'react-toastify';
import * as S from './styles';
import { useUserDetail } from './use-user-detail';
import { LoadingSpinner } from '../../components/loading-spinner';
import { themeStyled } from '../../theme/theme';

export function UserDetail() {
  const { loading, userData } = useUserDetail({
    handleError: (message) => {
      toast.error(message);
    },
  });

  return (
    <S.ScreenContainer>
      {loading ? (
        <S.LoadingSpinnerContainer>
          <LoadingSpinner color={themeStyled.colors.primary[800]} />
        </S.LoadingSpinnerContainer>
      ) : (
        <S.InfoContainer>
          <S.DetailandTitleContainer>
            <S.DetailTitle>Name</S.DetailTitle>
            <S.DetailContainer>
              <S.Detail>{userData?.name}</S.Detail>
            </S.DetailContainer>
          </S.DetailandTitleContainer>
          <S.DetailandTitleContainer>
            <S.DetailTitle>Email</S.DetailTitle>
            <S.DetailContainer>
              <S.Detail>{userData?.email}</S.Detail>
            </S.DetailContainer>
          </S.DetailandTitleContainer>
          <S.DetailandTitleContainer>
            <S.DetailTitle>Phone number</S.DetailTitle>
            <S.DetailContainer>
              <S.Detail>{userData?.phone}</S.Detail>
            </S.DetailContainer>
          </S.DetailandTitleContainer>
          <S.DetailandTitleContainer>
            <S.DetailTitle>Birthdate</S.DetailTitle>
            <S.DetailContainer>
              <S.Detail>{userData?.birthDate}</S.Detail>
            </S.DetailContainer>
          </S.DetailandTitleContainer>
          <S.DetailandTitleContainer>
            <S.DetailTitle>Role</S.DetailTitle>
            <S.DetailContainer>
              <S.Detail>{userData?.role}</S.Detail>
            </S.DetailContainer>
          </S.DetailandTitleContainer>
        </S.InfoContainer>
      )}
    </S.ScreenContainer>
  );
}

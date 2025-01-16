import { themeStyled } from '../../theme/theme';
import { Button } from '../Button';
import { LoadingSpinner } from '../LoadingSpinner';
import * as S from './styles';
import { useUserList } from './useUserList';

export function UsersTable() {
  const { loading, usersData, handleNextPage, handlePreviousPage, currentPage } = useUserList();

  return (
    <>
      {loading ? (
        <S.LoadingSpinnerContainer>
          <LoadingSpinner color={themeStyled.colors.primary[800]} />
        </S.LoadingSpinnerContainer>
      ) : (
        <>
          <S.Table>
            <thead>
              <S.TableHeaderRow>
                <S.TableHeaderCell>Nome</S.TableHeaderCell>
                <S.TableHeaderCell>Email</S.TableHeaderCell>
              </S.TableHeaderRow>
            </thead>
            <tbody>
              {usersData?.map((item) => (
                <S.TableRow key={item.id}>
                  <S.TableDataName>{item.name}</S.TableDataName>
                  <S.TableDataEmail>{item.email}</S.TableDataEmail>
                </S.TableRow>
              ))}
            </tbody>
          </S.Table>
        </>
      )}
      <S.ButtonContainer>
        <Button
          size={150}
          onClick={handlePreviousPage}
          isLoading={loading}
          text='Previous'
          disabled={currentPage === 1}
        />
        <S.PageNumberText>{currentPage}</S.PageNumberText>
        <Button size={150} onClick={handleNextPage} isLoading={loading} text='Next' />
      </S.ButtonContainer>
    </>
  );
}

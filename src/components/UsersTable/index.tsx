import { themeStyled } from '../../theme/theme';
import { UsersProps } from '../../types/user';
import { Button } from '../Button';
import { LoadingSpinner } from '../LoadingSpinner';
import * as S from './styles';

type UsersTableProps = {
  users: UsersProps[];
  isLoading: boolean;
  handleNextPage: () => void;
  handlePreviousPage: () => void;
};

export function UsersTable({ users, isLoading, handlePreviousPage, handleNextPage }: UsersTableProps) {
  return (
    <>
      {isLoading ? (
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
              {users?.map((item) => (
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
        <Button size={150} onClick={handlePreviousPage} isLoading={isLoading} text='Previous' />
        <Button size={150} onClick={handleNextPage} isLoading={isLoading} text='Next' />
      </S.ButtonContainer>
    </>
  );
}

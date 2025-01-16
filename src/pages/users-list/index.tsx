import { UsersTable } from '../../components/UsersTable';
import * as S from './styles';
import { useUserList } from './useUserList';

export function UsersList() {
  const { loading, usersData, handleNextPage, handlePreviousPage } = useUserList();
  return (
    <S.ScreenContainer>
      <S.TableContainer>
        <UsersTable
          users={usersData}
          isLoading={loading}
          handleNextPage={handleNextPage}
          handlePreviousPage={handlePreviousPage}
        />
      </S.TableContainer>
    </S.ScreenContainer>
  );
}

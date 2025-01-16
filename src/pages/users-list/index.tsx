import { UsersTable } from '../../components/UsersTable';
import * as S from './styles';
import { useUserList } from './useuserlists';

export function UsersList() {
  const { usersData } = useUserList();

  return (
    <S.ScreenContainer>
      <S.TableContainer>
        <UsersTable users={usersData} />
      </S.TableContainer>
    </S.ScreenContainer>
  );
}

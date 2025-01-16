import { UsersTable } from '../../components/UsersTable';
import * as S from './styles';
import { useUserList } from './useuserlists';

export function UsersList() {
  const { users } = useUserList();

  return (
    <S.ScreenContainer>
      <S.TableContainer>
        <UsersTable users={users} />
      </S.TableContainer>
    </S.ScreenContainer>
  );
}

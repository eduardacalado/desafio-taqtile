import { UsersTable } from '../../components/UsersTable';
import * as S from './styles';

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

import { UsersTable } from '../../components/UsersTable';
import * as S from './styles';

export function UsersList() {
  return (
    <S.ScreenContainer>
      <S.TableContainer>
        <UsersTable />
      </S.TableContainer>
    </S.ScreenContainer>
  );
}

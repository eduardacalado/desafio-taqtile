import { useNavigate } from 'react-router';
import { UsersTable } from '../../components/users-table';
import { themeStyled } from '../../theme/theme';
import * as S from './styles';
import { FiPlus } from 'react-icons/fi';

export function UsersList() {
  const navigate = useNavigate();

  return (
    <S.ScreenContainer>
      <S.TableContainer>
        <UsersTable />
      </S.TableContainer>
      <S.FloatButton onClick={() => navigate('/add-user')}>
        <FiPlus size={30} color={themeStyled.colors.white} />
      </S.FloatButton>
    </S.ScreenContainer>
  );
}

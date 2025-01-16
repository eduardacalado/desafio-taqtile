import * as S from './styles.ts';
import { useUserList } from './useuserlists.ts';

export function UsersList() {
  const { users } = useUserList();

  return (
    <S.ScreenContainer>
      <S.Container>
        <table>
          <thead>
            <th>Nome</th>
            <th>Email</th>
          </thead>
          <tbody>
            {users?.map((item) => (
              <>
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </S.Container>
    </S.ScreenContainer>
  );
}

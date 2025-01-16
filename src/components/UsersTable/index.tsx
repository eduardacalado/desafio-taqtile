import { UsersProps } from '../../pages/users-list/useuserlists';
import * as S from './styles';

type UsersTableProps = {
  users: UsersProps[];
};

export function UsersTable({ users }: UsersTableProps) {
  return (
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
  );
}

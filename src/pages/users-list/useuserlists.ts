import { useEffect, useState } from 'react';
import { api } from '../../services';

export type UsersProps = {
  id: number;
  name: string;
  email: string;
};

export function useUserList() {
  const [users, setUsers] = useState<UsersProps[]>([]);

  useEffect(() => {
    api.get('users').then((reponse) => {
      setUsers(reponse.data.users);
    });
  }, []);

  return { users };
}

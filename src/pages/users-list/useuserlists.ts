import { useEffect, useState } from 'react';
import { api } from '../../services';

type Transaction = {
  id: number;
  name: string;
  email: string;
};

export function useUserList() {
  const [users, setUsers] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get('users').then((reponse) => {
      setUsers(reponse.data.users);
    });
  }, []);

  return { users };
}

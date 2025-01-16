import { useQuery } from '@apollo/client';
import { useState } from 'react';
import { getUsersList } from '../../graphql/queries';
import { UsersProps } from '../../types/user';

type UserQueryData = {
  users: {
    nodes: UsersProps[];
  };
};

export function useUserList() {
  const [usersData, setUsersData] = useState<UsersProps[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const limit = 50;

  const { loading } = useQuery(getUsersList, {
    variables: {
      limit: limit,
      offset: (currentPage - 1) * limit,
    },
    onCompleted: (data: UserQueryData) => {
      setUsersData(data.users.nodes);
    },
    onError: (error) => {
      const errorMessage = error.message || 'Ocorreu um erro inesperado.';
    },
  });

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
    console.log('teste');
  };

  const handlePreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return { usersData, loading, handleNextPage, handlePreviousPage };
}

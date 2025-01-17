import { useQuery } from '@apollo/client';
import { useState } from 'react';
import { getUsersList } from '../../graphql/queries';
import { UsersProps } from '../../types/user';

type UserQueryData = {
  users: {
    nodes: UsersProps[];
  };
};

type UseUserTableArgs = {
  handleError: (message: string) => void;
};

export function useUserTable({ handleError }: UseUserTableArgs) {
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
      const errorMessage = error.message || 'Falha ao listar usuários. Tente novamente';
      handleError(errorMessage);
    },
  });

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return { usersData, loading, handleNextPage, handlePreviousPage, currentPage };
}

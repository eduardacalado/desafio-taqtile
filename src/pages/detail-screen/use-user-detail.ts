import { useQuery } from '@apollo/client';
import { useState } from 'react';
import { useParams } from 'react-router';
import { getUserDetail } from '../../graphql/queries';
import { UsersProps } from '../../types/user';

type UserQueryData = {
  user: UsersProps;
};

type UseUserDetailsArgs = {
  handleError: (message: string) => void;
};

export function useUserDetail({ handleError }: UseUserDetailsArgs) {
  const { userId } = useParams<{ userId: string }>();
  const [userData, setUserData] = useState<UsersProps>();

  const { loading } = useQuery(getUserDetail, {
    variables: {
      userId,
    },
    onCompleted: (data: UserQueryData) => {
      setUserData(data.user);
      console.log(data);
    },
    onError: (error) => {
      const errorMessage = error.message || 'Falha ao ver detalhes do usuário. Tente novamente';
      handleError(errorMessage);
    },
  });
  return { loading, userData };
}

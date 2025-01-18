import * as S from './styles';

import { Button } from '../../components/Button';
import { useAddUser } from './use-add-user';
import { Input } from '../../components/Input';

export function AddUser() {
  const { handleFormSubmit, loading, errors, handleSubmit, register } = useAddUser();
  return (
    <S.ScreenContainer>
      <S.InputsButtonContainer onSubmit={handleSubmit(handleFormSubmit)}>
        <S.InputContainer>
          <S.InputLabel>Name</S.InputLabel>
          <Input {...register('name')} /> {errors.name && <S.ErrorMessage>{errors.name.message}</S.ErrorMessage>}
        </S.InputContainer>
        <S.InputContainer>
          <S.InputLabel>Email</S.InputLabel>
          <Input {...register('email')} />
          {errors.email && <S.ErrorMessage>{errors.email.message}</S.ErrorMessage>}
        </S.InputContainer>
        <S.InputContainer>
          <S.InputLabel>Password</S.InputLabel>
          <Input type='password' {...register('password')} />
          {errors.password && <S.ErrorMessage>{errors.password.message}</S.ErrorMessage>}
        </S.InputContainer>
        <S.InputContainer>
          <S.InputLabel>Phone number</S.InputLabel>
          <Input {...register('phone')} maxLength={11} />
          {errors.phone && <S.ErrorMessage>{errors.phone.message}</S.ErrorMessage>}
        </S.InputContainer>
        <S.InputContainer>
          <S.InputLabel>Birthdate</S.InputLabel>
          <S.DateInput type='date' {...register('birthDate')} />
          {errors.birthDate && <S.ErrorMessage>{errors.birthDate.message}</S.ErrorMessage>}
        </S.InputContainer>
        <S.InputContainer>
          <S.InputLabel>Role</S.InputLabel>
          <S.RoleSelect {...register('role')}>
            <option value='' disabled>
              Selecione uma função
            </option>
            <option value='admin'>Admin</option>
            <option value='user'>User</option>
          </S.RoleSelect>
          {errors.role && <S.ErrorMessage>{errors.role.message}</S.ErrorMessage>}
        </S.InputContainer>
        <Button isLoading={loading} text='Cadastrar' />
      </S.InputsButtonContainer>
    </S.ScreenContainer>
  );
}

import { ButtonHTMLAttributes } from 'react';
import * as S from './styles';
import { LoadingSpinner } from '../LoadingSpinner';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isLoading: boolean;
  text: string;
};

export function Button({ isLoading, text, ...props }: ButtonProps) {
  function buttonContent(loading: boolean) {
    if (loading) {
      return <LoadingSpinner />;
    }
    return <S.LoginButtonText>{text}</S.LoginButtonText>;
  }

  const isDisabled = isLoading || props.disabled;

  return (
    <S.LoginButton disabled={isDisabled} {...props}>
      {buttonContent(isLoading)}
    </S.LoginButton>
  );
}

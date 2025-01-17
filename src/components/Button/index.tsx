import { ButtonHTMLAttributes } from 'react';
import * as S from './styles';
import { LoadingSpinner } from '../LoadingSpinner';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isLoading: boolean;
  text: string;
  size?: number;
};

export function Button({ isLoading, text, ...props }: ButtonProps) {
  function buttonContent(loading: boolean) {
    if (loading) {
      return <LoadingSpinner />;
    }
    return <S.ButtonText>{text}</S.ButtonText>;
  }

  const isDisabled = isLoading || props.disabled;

  return (
    <S.Button disabled={isDisabled} {...props}>
      {buttonContent(isLoading)}
    </S.Button>
  );
}

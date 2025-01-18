import { InputHTMLAttributes } from 'react';
import * as S from './styles';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  size?: string;
};

export function Input({ size, ...props }: InputProps) {
  return <S.Input size={size} {...props} />;
}

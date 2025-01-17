import { ReactNode } from 'react';
import { Input } from './styles';

type InputProps = {
  size?: string;
  children: ReactNode;
};

export const input: React.FC<InputProps> = ({ children, ...props }) => {
  return <Input {...props}>{children}</Input>;
};

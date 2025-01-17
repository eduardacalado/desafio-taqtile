import * as S from './styles.ts';

type LoadingSpinnerProps = { size?: number; color?: string };

export function LoadingSpinner({ size = 36, color = '#ffffff80' }: LoadingSpinnerProps) {
  return <S.Spinner size={size} color={color} />;
}

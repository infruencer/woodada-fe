'use client';
import { CookiesProvider } from 'react-cookie';

type Props = {
  children: React.ReactNode;
};

export default function ReactCookiesProvider({ children }: Props) {
  return <CookiesProvider>{children}</CookiesProvider>;
}

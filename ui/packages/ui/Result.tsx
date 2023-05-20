"use client";

import { useSession, SessionProvider } from "next-auth/react";

export const SessionWrapper = ({ children }: { children: React.ReactNode }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export const TokenResult = () => {
  const { data: session } = useSession();
  return <pre>{JSON.stringify(session)}</pre>;
};

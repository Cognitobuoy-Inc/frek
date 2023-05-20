"use client";

import { signIn, signOut, useSession, SessionProvider } from "next-auth/react";

export const SessionWrapper = ({ children }: { children: React.ReactNode }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export const InstagramSignInButton = () => {
  return <button onClick={() => signIn("instagram")}>SIGN IN INSTAGRAM</button>;
};

export const FacebookSignInButton = () => {
  const { data: session } = useSession();
  return (
    <button onClick={() => signIn("facebook")}>
      SIGN IN FACEBOOK({JSON.stringify(session)})
    </button>
  );
};

export const SignOutButton = () => {
  return <button onClick={() => signOut()}>SIGN OUT</button>;
};

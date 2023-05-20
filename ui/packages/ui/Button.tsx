"use client";

import { signIn, signOut } from "next-auth/react";

export const GoogleSignInButton = () => {
  return <button onClick={() => signIn("google")}>SIGN IN WITH GOOGLE</button>;
};

export const FacebookSignInButton = () => {
  return (
    <button onClick={() => signIn("facebook")}>SIGN IN WITH FACEBOOK</button>
  );
};

export const InstagramSignInButton = () => {
  return (
    <button onClick={() => signIn("instagram")}>SIGN IN WITH INSTAGRAM</button>
  );
};

export const SignOutButton = () => {
  return <button onClick={() => signOut()}>SIGN OUT</button>;
};

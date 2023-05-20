"use client";

import { signIn, signOut } from "next-auth/react";

export const Button = () => {
  return <button onClick={() => signIn("instagram")}>SIGN IN INSTAGRAM</button>;
};

export const SignOutButton = () => {
  return <button onClick={() => signOut()}>SIGN OUT</button>;
};

import {
  Header,
  TokenResult,
  SignOutButton,
  GoogleSignInButton,
  FacebookSignInButton,
  InstagramSignInButton,
} from "ui";

import { SessionWrapper } from "ui";

export default function Page() {
  return (
    <>
      <Header text="Web" />
      <SessionWrapper>
        <TokenResult />
        <GoogleSignInButton />
        <FacebookSignInButton />
        <InstagramSignInButton />
        <SignOutButton />
      </SessionWrapper>
    </>
  );
}

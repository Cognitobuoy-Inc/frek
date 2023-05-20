import {
  Header,
  TokenResult,
  SignOutButton,
  GoogleSignInButton,
  FacebookSignInButton,
  InstagramSignInButton,
  TwitterSignInButton,
} from "ui";

import { SessionWrapper } from "ui";

export default function Page() {
  return (
    <>
      <Header text="Web" />
      <SessionWrapper>
        <TokenResult />
        <GoogleSignInButton />
        <TwitterSignInButton />
        <FacebookSignInButton />
        <InstagramSignInButton />
        <SignOutButton />
      </SessionWrapper>
    </>
  );
}

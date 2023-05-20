import {
  Header,
  SignOutButton,
  FacebookSignInButton,
  InstagramSignInButton,
  SessionWrapper,
} from "ui";

export default function Page() {
  return (
    <>
      <Header text="Web" />
      <SessionWrapper>
        <InstagramSignInButton />
        <FacebookSignInButton />
        <SignOutButton />
      </SessionWrapper>
    </>
  );
}

"use client";

import Button from "@mui/material/Button";
import GoogleIcon from "@mui/icons-material/Google";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { signIn, signOut } from "next-auth/react";
import { ButtonPropsColorOverrides } from "@mui/material";

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    google: true;
    twitter: true;
    facebook: true;
    instagram: true;
  }
}

export const GoogleSignInButton = () => {
  return (
    <Button
      variant="contained"
      color="google"
      startIcon={<GoogleIcon />}
      onClick={() => signIn("google")}
    >
      SIGN IN WITH GOOGLE
    </Button>
  );
};

export const TwitterSignInButton = () => {
  return (
    <Button
      variant="contained"
      color="twitter"
      startIcon={<TwitterIcon />}
      onClick={() => signIn("twitter")}
    >
      SIGN IN WITH TWITTER
    </Button>
  );
};

export const FacebookSignInButton = () => {
  return (
    <Button
      variant="contained"
      color="facebook"
      startIcon={<FacebookIcon />}
      onClick={() => signIn("facebook")}
    >
      SIGN IN WITH FACEBOOK
    </Button>
  );
};

export const InstagramSignInButton = () => {
  return (
    <Button
      variant="contained"
      color="instagram"
      startIcon={<InstagramIcon />}
      onClick={() => signIn("instagram")}
    >
      SIGN IN WITH INSTAGRAM
    </Button>
  );
};

export const SignOutButton = () => {
  return (
    <Button variant="contained" onClick={() => signOut()}>
      SIGN OUT
    </Button>
  );
};

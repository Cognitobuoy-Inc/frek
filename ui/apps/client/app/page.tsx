import {
  GoogleSignInButton,
  TwitterSignInButton,
  FacebookSignInButton,
  InstagramSignInButton,
} from "ui";
import styles from "./styles.module.css";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import AuthCard from "ui/Card";
import Header from "ui/Header";

export default async function Page() {
  const session = await getServerSession();

  if (session) {
    redirect("/home");
  }

  return (
    <main>
      <Header />
      <div className={styles.signInPageContainer}>
        <AuthCard>
          <div className={styles.signInSection}>
            <div className={styles.signInButtonContainer}>
              <GoogleSignInButton />
            </div>
            <div className={styles.signInButtonContainer}>
              <TwitterSignInButton />
            </div>
            <div className={styles.signInButtonContainer}>
              <FacebookSignInButton />
            </div>
            <div className={styles.signInButtonContainer}>
              <InstagramSignInButton />
            </div>
          </div>
        </AuthCard>
      </div>
    </main>
  );
}

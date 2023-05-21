"use client";

import styles from "./Card.module.css";
import Typography from "@mui/material/Typography";

export default function AuthCard({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.authCardContainer}>
      <div className={styles.authCardSiginTextContainer}>
        <Typography
          gutterBottom
          textAlign="center"
          mt={2}
          mb={4}
          variant="h3"
          component="div"
          sx={{
            display: { xs: "none", md: "flex" },
            fontWeight: 700,
            color: "inherit",
            textDecoration: "none",
          }}
        >
          Welcome👽
        </Typography>
      </div>
      <section className={styles.authSignInButtonContainer}>{children}</section>
    </div>
  );
}

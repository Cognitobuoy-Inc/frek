import { ThemeWrapper, SessionWrapper } from "ui";
import styles from "./styles.module.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={styles.body}>
        <SessionWrapper>
          <ThemeWrapper>{children}</ThemeWrapper>
        </SessionWrapper>
      </body>
    </html>
  );
}

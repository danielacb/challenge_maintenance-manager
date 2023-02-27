import React from "react";
import { SignIn } from "@clerk/clerk-react";

import styles from "./styles.module.scss";

export default function Login() {
  return (
    <div className={styles.LoginPage}>
      <SignIn />
    </div>
  );
}

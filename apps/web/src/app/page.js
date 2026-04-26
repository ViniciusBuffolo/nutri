"use client";

import styles from "@/app/styles/home.module.css";
import AppLayout from "@/components/layout/AppLayout";
import Card from "@ui/shared/Card";

export default function Home() {
  return (
    <AppLayout canvasInitiallyOpen={true}>
      {/* <div className="cardGrid cardGridOne">
        <Card className="contentCard">
          <h1 className={styles.welcomeTitle}>Bem-vindo</h1>
        </Card>
      </div> */}

      <div className={styles.welcomeContainer}>
        <h1 className={styles.welcomeTitle}>Bem-vindo</h1>
      </div>
    </AppLayout>
  );
}

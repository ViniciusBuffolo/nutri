import styles from "@/app/page.module.css";

export default function MealCard({ meal }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardTop}>
        <div className={styles.cardLeft}>
          <div className={styles.cardIcon}>{meal.icon}</div>

          <div>
            <h2>{meal.title}</h2>
            <p>{meal.subtitle}</p>
          </div>
        </div>

        <div className={styles.cardMood}>{meal.mood}</div>
      </div>

      <div className={styles.cardFooter}>
        <span>{meal.kcal}</span>
        <span>{meal.status}</span>
      </div>
    </div>
  );
}
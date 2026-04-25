import styles from "@/app/styles/header.module.css";

export default function CanvasContent({ nutritionSummary }) {
  if (!nutritionSummary) return null;

  const { plan, stats, macroItems } = nutritionSummary;

  return (
    <>
      <p className={styles.plan}>{plan}</p>

      <div className={styles.topStats}>
        <div className={styles.statBox}>
          <strong>{stats.eaten}</strong>
          <span>EATEN</span>
        </div>

        <div className={styles.circleWrap}>
          <div className={styles.circle}>
            <strong>{stats.kcalOver}</strong>
            <span>KCAL OVER</span>
          </div>
        </div>

        <div className={styles.statBox}>
          <strong>{stats.burned}</strong>
          <span>BURNED</span>
        </div>
      </div>

      <div className={styles.macros}>
        {macroItems.map((item) => (
          <div key={item.label} className={styles.macroItem}>
            <h3>{item.label}</h3>
            <p>{item.value}</p>
          </div>
        ))}
      </div>
    </>
  );
}
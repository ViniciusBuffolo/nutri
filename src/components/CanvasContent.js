import styles from "@/app/page.module.css";

export default function CanvasContent({ macroItems }) {
  return (
    <>
      <p className={styles.plan}>CLASSIC</p>

      <div className={styles.topStats}>
        <div className={styles.statBox}>
          <strong>15569</strong>
          <span>EATEN</span>
        </div>

        <div className={styles.circleWrap}>
          <div className={styles.circle}>
            <strong>12079</strong>
            <span>KCAL OVER</span>
          </div>
        </div>

        <div className={styles.statBox}>
          <strong>993</strong>
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
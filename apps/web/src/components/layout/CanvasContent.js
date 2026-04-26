import Image from "next/image";
import Link from "next/link";
import { Bell, Menu, ChevronDown, ChevronUp, ArrowBigDownDash, ArrowBigUpDash } from "lucide-react";
import styles from "@/app/styles/header.module.css";

export default function CanvasContent({
  nutritionSummary,
  user,
  variant = "home",
  isOpen,
  openCanvas,
  closeCanvas,
  onOpenDrawer,
}) {
  const initials = user?.name
    ?.split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const isDashboard = variant === "dashboard";
  const hasHiddenContent = variant === "home" && nutritionSummary;

  function handleToggleCanvas(event) {
    event.stopPropagation();

    if (isOpen) {
      closeCanvas?.();
      return;
    }

    openCanvas?.();
  }

  function handleOpenDrawer(event) {
    event.stopPropagation();
    onOpenDrawer?.();
  }

  return (
    <>
      <div className={styles.canvasHeader}>
        <div className={styles.canvasHeaderLeft}>
          {isDashboard ? (
            <div className={styles.dashboardUserInfo}>
              <div className={styles.dashboardAvatar}>{initials || "DM"}</div>

              <div>
                <p className={styles.dashboardGreeting}>Hi,</p>
                <h1>{user?.name || "Dra. Marina Souza"}</h1>
              </div>
            </div>
          ) : (
            <Link
              href="/"
              className={styles.canvasLogoLink}
              aria-label="Ir para a página inicial"
              onClick={(event) => event.stopPropagation()}
            >
              <Image
                src="/logo-nx-nutri-white.svg"
                alt="NX Nutri"
                width={140}
                height={32}
                className={styles.canvasLogo}
                priority
              />
            </Link>
          )}
        </div>

        {/* <div className={styles.canvasHeaderCenter}>
          {!isDashboard && (
            <Link
              href="/"
              className={styles.canvasLogoLink}
              aria-label="Ir para a página inicial"
              onClick={(event) => event.stopPropagation()}
            >
              <Image
                src="/logo-nx-nutri-white.svg"
                alt="NX Nutri"
                width={140}
                height={32}
                className={styles.canvasLogo}
                priority
              />
            </Link>
          )}
        </div> */}

        <div className={styles.canvasHeaderActions}>
          {isDashboard && (
            <button
              type="button"
              onClick={(event) => event.stopPropagation()}
              aria-label="Notificações"
            >
              <Bell size={18} />
            </button>
          )}

          <button type="button" onClick={handleOpenDrawer} aria-label="Abrir menu">
            <Menu size={22} />
          </button>
        </div>
      </div>

      {variant === "home" && isOpen && nutritionSummary && (
        <div className={styles.homeCanvasBody}>
          <p className={styles.plan}>{nutritionSummary.plan}</p>

          <div className={styles.topStats}>
            <div className={styles.statBox}>
              <strong>{nutritionSummary.stats.eaten}</strong>
              <span>EATEN</span>
            </div>

            <div className={styles.circleWrap}>
              <div className={styles.circle}>
                <strong>{nutritionSummary.stats.kcalOver}</strong>
                <span>KCAL OVER</span>
              </div>
            </div>

            <div className={styles.statBox}>
              <strong>{nutritionSummary.stats.burned}</strong>
              <span>BURNED</span>
            </div>
          </div>

          <div className={styles.macros}>
            {nutritionSummary.macroItems.map((item) => (
              <div key={item.label} className={styles.macroItem}>
                <h3>{item.label}</h3>
                <p>{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {hasHiddenContent && (
        <button
          type="button"
          className={`${styles.canvasToggleButton} ${
            isOpen ? styles.canvasToggleButtonOpen : ""
          }`}
          onClick={handleToggleCanvas}
          aria-label={isOpen ? "Fechar painel superior" : "Abrir painel superior"}
        >
          {isOpen ? <ArrowBigUpDash size={20} /> : <ArrowBigDownDash size={20} />}
        </button>
      )}
    </>
  );
}
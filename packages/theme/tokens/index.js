/* =========================
   Colors
========================= */
export const colors = {
  background: "#f4f3ee",
  foreground: "#2f312f",
  muted: "#8b918d",

  white: "#ffffff",
  card: "#ffffff",
  cardSoft: "rgba(255, 255, 255, 0.94)",
  cardMuted: "#f7f7f3",

  primary: "#69d3a5",
  primaryStrong: "#56c995",
  primarySoft: "#dbf6e8",
  primarySoft2: "#edf9f2",
  primaryText: "#2e966a",
  primaryMuted: "#8ca29b",
  primaryPlaceholder: "#a8cfc0",

  danger: "#d95c5c",
  border: "rgba(93, 120, 102, 0.1)",

  navIconMuted: "#c8c8c8",
  navCenterBorder: "#e7e7e7",
};

/* =========================
   Hero
========================= */
export const hero = {
  start: colors.primary,
  end: colors.primaryStrong,
  ring: "rgba(255, 255, 255, 0.58)",
};

/* =========================
   Metric Tones
========================= */
export const tones = {
  info: "#70c6ef",
  success: "#98d11a",
  warning: "#f2b300",
  orange: "#f39a12",
  danger: "#f0623c",
  critical: "#e3362c",
};

/* =========================
   Radius
========================= */
export const radius = {
  sm: 8,
  md: 14,
  lg: 22,
  xl: 28,
  pill: 999,
};

/* =========================
   Spacing
========================= */
export const spacing = {
  1: 4,
  2: 6,
  3: 8,
  4: 12,
  5: 16,
  6: 20,
  7: 24,
  8: 32,
};

/* =========================
   Typography
========================= */
export const typography = {
  fontXs: 12,
  fontSm: 13,
  fontMd: 14,
  fontLg: 18,
  fontXl: 24,
  fontXxl: 32,

  fontBase: 16,
  fontFormFooter: 14.72,
  fontTitleSm: 18.4,
  fontMetric: 51.2,
  fontMetricMobile: 41.6,

  letterSpacingLabel: 1,
};

/* =========================
   Shadows
========================= */
export const shadows = {
  webCard: "0 12px 24px rgba(49, 80, 62, 0.08)",
  webSummaryCard: "0 18px 40px rgba(47, 49, 47, 0.06)",
  webHero: "0 18px 40px rgba(46, 150, 106, 0.18)",
  webInputFocus: "0 0 0 3px rgba(105, 211, 165, 0.15)",
  webTopBar: "0 8px 20px rgba(86, 201, 149, 0.18)",
  webBottomNav: "0 10px 22px rgba(47, 49, 47, 0.12)",

  nativeCard: {
    shadowColor: "#31503e",
    shadowOpacity: 0.08,
    shadowRadius: 24,
    shadowOffset: { width: 0, height: 12 },
    elevation: 4,
  },
};

/* =========================
   Layout Sizes
========================= */
export const layoutSizes = {
  pageHeaderHeight: 72,
  bottomNavSpace: 100,
  cardCenterBottomSpace: 110,
};

/* =========================
   Top Canvas / Header Sizes
========================= */
export const canvasSizes = {
  canvasOpenHeight: 500,
  topCanvasPaddingX: 20,
  topCanvasPaddingTop: 28,
  topCanvasPaddingBottom: 110,

  topBarHeight: 72,
  topBarPaddingX: 18,
  topBarLogoHeight: 36,

  canvasCircleSize: 200,
  canvasCircleColumn: 210,
  canvasStatsMaxWidth: 520,
  canvasMacrosMaxWidth: 480,
};

/* =========================
   Form Sizes
========================= */
export const formSizes = {
  inputHeight: 48,
  inputLinePaddingY: 10,
  passwordToggleSpace: 36,
  buttonHeight: 46,
  socialButtonSize: 42,
};

/* =========================
   Metric Sizes
========================= */
export const metricSizes = {
  metricToneBorderWidth: 8,
};

/* =========================
   Icon Sizes
========================= */
export const iconSizes = {
  iconButtonSize: 44,
  chevronSize: 18,
  chevronBorderWidth: 4,
};

/* =========================
   Bottom Navigation Sizes
========================= */
export const bottomNavSizes = {
  height: 86,
  heightMobile: 78,
  centerSize: 76,
  centerSizeMobile: 68,
  activeDotSize: 8,
};

/* =========================
   Motion
========================= */
export const motion = {
  transitionBase: "0.3s ease",
  transitionLayout: "0.5s ease",
};

/* =========================
   Z Index
========================= */
export const zIndex = {
  bottomNav: 1200,
};

/* =========================
   Theme
========================= */
export const theme = {
  colors,
  hero,
  tones,
  radius,
  spacing,
  typography,
  shadows,
  layoutSizes,
  canvasSizes,
  formSizes,
  metricSizes,
  iconSizes,
  bottomNavSizes,
  motion,
  zIndex,
};
import { View, Text, StyleSheet } from "react-native";
import theme from "@theme/tokens/native";

type MacroItem = {
  label: string;
  value: string;
};

type NutritionSummary = {
  plan: string;
  stats: {
    eaten: string | number;
    kcalOver: string | number;
    burned: string | number;
  };
  macroItems: MacroItem[];
};

export default function CanvasContent({
  nutritionSummary,
}: {
  nutritionSummary?: NutritionSummary;
}) {
  if (!nutritionSummary) return null;

  const { plan, stats, macroItems } = nutritionSummary;

  return (
    <>
      <Text style={styles.plan}>{plan}</Text>

      <View style={styles.topStats}>
        <View style={styles.statBox}>
          <Text style={styles.statStrong}>{stats.eaten}</Text>
          <Text style={styles.statLabel}>EATEN</Text>
        </View>

        <View style={styles.circleWrap}>
          <View style={styles.circle}>
            <Text style={styles.circleStrong}>{stats.kcalOver}</Text>
            <Text style={styles.circleLabel}>KCAL OVER</Text>
          </View>
        </View>

        <View style={styles.statBox}>
          <Text style={styles.statStrong}>{stats.burned}</Text>
          <Text style={styles.statLabel}>BURNED</Text>
        </View>
      </View>

      <View style={styles.macros}>
        {macroItems.map((item) => (
          <View key={item.label} style={styles.macroItem}>
            <Text style={styles.macroTitle}>{item.label}</Text>
            <Text style={styles.macroValue}>{item.value}</Text>
          </View>
        ))}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  plan: {
    color: theme.colors.white,
    fontSize: 15,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: theme.spacing[7] - theme.spacing[2],
  },

  topStats: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  statBox: {
    flex: 1,
    alignItems: "center",
  },

  statStrong: {
    color: theme.colors.white,
    fontSize: 28,
    fontWeight: "800",
  },

  statLabel: {
    color: "rgba(255,255,255,0.85)",
    fontSize: 11,
    fontWeight: "700",
    marginTop: theme.spacing[1],
  },

  circleWrap: {
    flex: 1,
    alignItems: "center",
  },

  circle: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: "rgba(255,255,255,0.22)",
    borderWidth: 2,
    borderColor: theme.colors.heroRing,
    alignItems: "center",
    justifyContent: "center",
  },

  circleStrong: {
    color: theme.colors.white,
    fontSize: theme.typography.fontXxl,
    fontWeight: "800",
  },

  circleLabel: {
    color: "rgba(255,255,255,0.9)",
    fontSize: 11,
    fontWeight: "700",
    marginTop: theme.spacing[1],
  },

  macros: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: theme.spacing[7] + theme.spacing[2],
  },

  macroItem: {
    flex: 1,
    alignItems: "center",
  },

  macroTitle: {
    color: theme.colors.white,
    fontSize: theme.typography.fontMd,
    fontWeight: "700",
  },

  macroValue: {
    color: "rgba(255,255,255,0.9)",
    fontSize: theme.typography.fontSm,
    marginTop: theme.spacing[1],
  },
});
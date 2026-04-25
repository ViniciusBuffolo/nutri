import { View, Pressable, StyleSheet, Dimensions, Animated } from "react-native";
import CanvasContent from "./CanvasContent";
import Logo from "../../assets/logo-nx-nutri-white.svg";
import theme from "@theme/tokens/native";

const { height } = Dimensions.get("window");

const CANVAS_HEIGHT = Math.min(height * 0.5, 430);
const BAR_HEIGHT = theme.sizes.topBarHeight;

type TopCanvasProps = {
  animation: Animated.Value;
  isOpen: boolean;
  closeCanvas: () => void;
  openCanvas: () => void;
  nutritionSummary?: NutritionSummary;
};

type NutritionSummary = {
  plan: string;
  stats: {
    eaten: string | number;
    kcalOver: string | number;
    burned: string | number;
  };
  macroItems: {
    label: string;
    value: string;
  }[];
};

export default function TopCanvas({
  animation,
  isOpen,
  closeCanvas,
  openCanvas,
  nutritionSummary,
}: TopCanvasProps) {
  const heightAnim = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [BAR_HEIGHT, CANVAS_HEIGHT],
  });

  const canvasOpacity = animation.interpolate({
    inputRange: [0, 0.35, 1],
    outputRange: [0, 0, 1],
  });

  const barOpacity = animation.interpolate({
    inputRange: [0, 0.7, 1],
    outputRange: [1, 0, 0],
  });

  return (
    <Animated.View style={[styles.container, { height: heightAnim }]}>
      <Animated.View style={[styles.bar, { opacity: barOpacity }]}>
        <Logo width={95} height={42} />
      </Animated.View>

      <Animated.View style={[styles.expandedCanvas, { opacity: canvasOpacity }]}>
        <View style={styles.heroInner}>
          <CanvasContent nutritionSummary={nutritionSummary} />

          <Pressable style={styles.arrowBtn} onPress={closeCanvas}>
            <View style={styles.chevronUp} />
          </Pressable>
        </View>
      </Animated.View>

      {!isOpen && <Pressable style={styles.openArea} onPress={openCanvas} />}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    backgroundColor: theme.colors.heroEnd,
    overflow: "hidden",
  },

  bar: {
    position: "absolute",
    inset: 0,
    height: BAR_HEIGHT,
    paddingHorizontal: theme.sizes.topBarPaddingX,
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundColor: theme.colors.heroEnd,
    zIndex: 2,
  },

  expandedCanvas: {
    position: "absolute",
    inset: 0,
    height: CANVAS_HEIGHT,
    zIndex: 1,
  },

  heroInner: {
    flex: 1,
    paddingTop: 36,
    paddingHorizontal: theme.sizes.topCanvasPaddingX + theme.spacing[1],
    paddingBottom: 52,
    alignItems: "center",
    justifyContent: "center",
  },

  arrowBtn: {
    position: "absolute",
    bottom: 46,
    width: 42,
    height: 42,
    borderRadius: 21,
    alignItems: "center",
    justifyContent: "center",
  },

  chevronUp: {
    width: theme.sizes.chevronSize,
    height: theme.sizes.chevronSize,
    borderTopWidth: theme.sizes.chevronBorderWidth,
    borderLeftWidth: theme.sizes.chevronBorderWidth,
    borderColor: theme.colors.white,
    transform: [{ rotate: "45deg" }],
    marginTop: theme.spacing[3],
  },

  openArea: {
    position: "absolute",
    inset: 0,
    zIndex: 5,
  },
});
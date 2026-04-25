import { useEffect, useRef, useState } from "react";
import { View, Text, StyleSheet, Dimensions, Animated } from "react-native";
import Background from "../assets/background-home.svg";
import BottomNav from "../components/layout/BottomNav";
import TopCanvas from "../components/layout/TopCanvas";
import { nutritionSummary } from "@data/homeData";
import theme from "@theme/tokens/native";

const { width, height } = Dimensions.get("window");

export default function Home() {
  const [isOpen, setIsOpen] = useState(true);
  const canvasAnim = useRef(new Animated.Value(1)).current;

  function closeCanvas() {
    setIsOpen(false);
  }

  function openCanvas() {
    setIsOpen(true);
  }

  useEffect(() => {
    Animated.timing(canvasAnim, {
      toValue: isOpen ? 1 : 0,
      duration: 450,
      useNativeDriver: false,
    }).start();
  }, [isOpen, canvasAnim]);

  const mainMarginTop = canvasAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 390],
  });

  return (
    <View style={styles.page}>
      <Background
        width={width}
        height={height}
        preserveAspectRatio="xMidYMid slice"
        style={styles.background}
      />

      <View style={styles.overlay} />

      <TopCanvas
        animation={canvasAnim}
        isOpen={isOpen}
        closeCanvas={closeCanvas}
        openCanvas={openCanvas}
        nutritionSummary={nutritionSummary}
      />

      <Animated.View style={[styles.mainContent, { marginTop: mainMarginTop }]}>
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeTitle}>Bem-vindo</Text>
        </View>
      </Animated.View>

      <BottomNav />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: theme.colors.background,
    overflow: "hidden",
  },

  background: {
    position: "absolute",
    top: 0,
    left: 0,
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(244, 243, 238, 0.76)",
  },

  mainContent: {
    flex: 1,
    paddingBottom: theme.sizes.bottomNavSpace,
    justifyContent: "center",
    alignItems: "center",
  },

  welcomeContainer: {
    position: "absolute",
    inset: 0,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: theme.spacing[8] + theme.spacing[3],
  },

  welcomeTitle: {
    fontSize: 44,
    fontWeight: "700",
    color: theme.colors.primaryStrong,
    textAlign: "center",
  },
});
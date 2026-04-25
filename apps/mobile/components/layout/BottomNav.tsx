import { View, Text, StyleSheet, Pressable } from "react-native";
import { useRouter } from "expo-router";
import theme from "@theme/tokens/native";

export default function BottomNav() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <NavItem icon="📊" label="Evaluations" onPress={() => {}} />
      <NavItem icon="👤" label="Me" onPress={() => {}} />

      <Pressable style={styles.centerButton}>
        <Text style={styles.centerIcon}>＋</Text>
      </Pressable>

      <NavItem icon="📋" label="Plans" onPress={() => {}} />
      <NavItem icon="👨‍🍳" label="Recipes" onPress={() => {}} />
    </View>
  );
}

type NavItemProps = {
  icon: string;
  label: string;
  onPress: () => void;
};

function NavItem({ icon, label, onPress }: NavItemProps) {
  return (
    <Pressable style={styles.navItem} onPress={onPress}>
      <Text style={styles.icon}>{icon}</Text>
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 80,
    backgroundColor: theme.colors.white,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: theme.colors.border,
    paddingBottom: theme.spacing[4],
  },

  navItem: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },

  icon: {
    fontSize: 20,
  },

  label: {
    fontSize: 10,
    marginTop: theme.spacing[1],
    color: theme.colors.muted,
  },

  centerButton: {
    position: "absolute",
    top: -25,
    alignSelf: "center",
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: theme.colors.primaryStrong,
    alignItems: "center",
    justifyContent: "center",
    ...theme.shadows.nativeCard,
  },

  centerIcon: {
    fontSize: 28,
    color: theme.colors.white,
    fontWeight: "bold",
  },
});
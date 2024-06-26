import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
} from "react-native";

const { width, height } = Dimensions.get("window");

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./src/assets/background.png")}
        style={styles.backgroundImg}
      ></ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  backgroundImg: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});

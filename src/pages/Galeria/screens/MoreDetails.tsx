import {
  View,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Text,
  Image,
} from "react-native";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { RootStackParamList } from "../../../routes/Routes";

type ProfileScreenRouteProp = RouteProp<RootStackParamList, "MoreDetails">;

const statusBarHeight = StatusBar.currentHeight || 25;

export function MoreDetails() {
  const navigation = useNavigation();
  const goBack = () => navigation.goBack();

  const route = useRoute<ProfileScreenRouteProp>();

  const { description, src, title } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={goBack}>
          <Ionicons name="arrow-back" color={"#fff"} size={40} />
        </TouchableOpacity>
      </View>
      <View style={styles.infos}>
        <Text style={styles.title}>{title}</Text>
        <Image style={styles.image} source={{ uri: src }} />
        <View style={styles.description}>
          <Text style={styles.textDescription}>{description}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.8)",
  },
  header: {
    height: statusBarHeight + 100,
    paddingLeft: 20,
    alignContent: "flex-start",
    justifyContent: "center",
  },
  infos: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    color: "#fff",
    fontFamily: "Poppins_400Regular",
    fontSize: 30,
    textAlign: "center",
    fontWeight: "600",
  },
  image: {
    width: 300,
    height: 400,
    backgroundColor: "black",
    borderRadius: 5,
  },
  description: {
    alignItems: "center",
    padding: 16,
  },
  textDescription: {
    color: "#fff",
    fontFamily: "Poppins_400Regular",
    fontSize: 15,
    textAlign: "center",
  },
});

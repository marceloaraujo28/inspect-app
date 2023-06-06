import { TouchableOpacity, Text, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { galeriaRoutes } from "../pages/Galeria/screens/Photos";

interface PictureProps {
  src?: string;
  title?: string;
  description?: string;
}

export function Picture({ src, title, description }: PictureProps) {
  const navigation = useNavigation<galeriaRoutes>();

  const lengthTitle = title?.length;
  const parsedTitle = title?.substring(0, 16);
  const newTitle =
    !!lengthTitle && lengthTitle > 16 ? `${parsedTitle}...` : title;

  const handleOpenDetails = () => {
    navigation.navigate("MoreDetails", {
      src,
      title,
      description,
    });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handleOpenDetails}>
      <Image
        style={styles.image}
        source={{
          uri: src,
        }}
      />
      <Text style={styles.title}>{newTitle}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: "#4F4F4F",
    width: 150,
    height: 250,
    alignItems: "center",
    borderRadius: 5,
    marginTop: 10,
  },
  image: {
    marginTop: 5,
    height: 200,
    width: 140,
    borderRadius: 5,
  },
  title: {
    color: "white",
    fontFamily: "Poppins_400Regular",
    marginTop: 5,
  },
});

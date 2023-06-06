import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  FlatList,
} from "react-native";
import { Picture } from "../../../components/Picture";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../routes/Routes";
import { useState, useEffect } from "react";

export type galeriaRoutes = NativeStackNavigationProp<RootStackParamList>;
type ProfileScreenRouteProp = RouteProp<RootStackParamList, "Photos">;

interface PictureProps {
  id?: string | number[];
  title?: string;
  description?: string;
  uri?: string;
}

export function Photos() {
  const [picturesList, setPicturesList] = useState<PictureProps[]>([]);

  const navigate = useNavigation<galeriaRoutes>();
  const route = useRoute<ProfileScreenRouteProp>();

  useEffect(() => {
    if (route.params) {
      setPicturesList((prev) => [
        ...prev,
        {
          id: route.params?.id,
          title: route.params?.title,
          description: route.params?.description,
          uri: route.params?.uri,
        },
      ]);
    }
  }, [route.params]);

  function handleOnPressCamera() {
    navigate.navigate("Camera");
  }

  return (
    <View style={styles.container}>
      <View style={styles.pictures}>
        {!!picturesList.length ? (
          <FlatList
            data={picturesList}
            keyExtractor={(data) => `${Date.now()}.${data.id}`}
            renderItem={({ item }) => (
              <Picture
                title={item.title}
                src={item.uri}
                description={item.description}
              />
            )}
            columnWrapperStyle={{
              justifyContent: "space-evenly",
            }}
            numColumns={2}
          />
        ) : (
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text>Nenhuma imagem na sua galeria</Text>
          </View>
        )}
      </View>
      <TouchableOpacity style={styles.camera} onPress={handleOnPressCamera}>
        <AntDesign name="camera" size={50} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    flexDirection: "column",
    backgroundColor: "#C0C0C0",
  },
  pictures: {
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#DCDCDC",
    backgroundColor: "#D3D3D3",
    paddingBottom: 20,
    flex: 1,
  },
  camera: {
    maxHeight: 100,
    paddingTop: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});

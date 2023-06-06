import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import { Camera as Cam, CameraType } from "expo-camera";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { galeriaRoutes } from "./Photos";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export function Camera() {
  const navigation = useNavigation<galeriaRoutes>();

  const [permission, requestPermission] = Cam.useCameraPermissions();
  const [type, setType] = useState(CameraType.back);
  const [camera, setCamera] = useState<Cam | null>(null);
  const [loadingPicture, setLoadingPicture] = useState(false);

  if (!permission) {
    return <View />;
  }

  if (!permission?.granted) {
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: "center" }}>
          Precisamos da sua permissão para mostrar a câmera
        </Text>
        <Button onPress={requestPermission} title="Conceder Permissão" />
      </View>
    );
  }

  async function onPressCamera() {
    setLoadingPicture(true);
    if (camera) {
      const data = await camera.takePictureAsync({});
      navigation.navigate("Description", {
        uriImage: data.uri,
      });
    }
    setLoadingPicture((prev) => !prev);
  }

  function toggleCameraType() {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  }

  return (
    <View style={styles.container}>
      <Cam
        style={styles.camera}
        type={type}
        ref={(ref) => setCamera(ref)}
      ></Cam>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={toggleCameraType}>
          <MaterialIcons name="flip-camera-android" size={50} color="white" />
        </TouchableOpacity>

        <TouchableOpacity onPress={onPressCamera} disabled={loadingPicture}>
          <MaterialCommunityIcons
            name="camera-iris"
            size={50}
            color={`${loadingPicture ? "#363636" : "white"}`}
            disabled={loadingPicture}
          />
        </TouchableOpacity>
        <View style={{ width: 50 }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "black",
    paddingBottom: 20,
    paddingTop: 120,
  },
  camera: {
    flex: 1,
    backgroundColor: "white",
  },
  buttonsContainer: {
    marginTop: 30,
    marginLeft: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
});

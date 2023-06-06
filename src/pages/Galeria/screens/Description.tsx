import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  Alert,
} from "react-native";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { galeriaRoutes } from "./Photos";
import { useState } from "react";
import uuid from "react-native-uuid";
import { RootStackParamList } from "../../../routes/Routes";

function HeaderLeft() {
  const navigation = useNavigation<galeriaRoutes>();
  const goBack = () => navigation.navigate("Galeria");

  return (
    <AntDesign name="banckward" color={"#fff"} size={20} onPress={goBack} />
  );
}

type ProfileScreenRouteProp = RouteProp<RootStackParamList, "Description">;

export function Description() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const navigation = useNavigation<galeriaRoutes>();
  const route = useRoute<ProfileScreenRouteProp>();

  const onConfirm = () => {
    if (!title || !description) {
      Alert.alert("Campos vazios!", "Por favor, preencha todos os campos!");
      return;
    }

    navigation.navigate("Photos", {
      id: uuid.v4(),
      title,
      description,
      uri: route.params.uriImage,
    });
  };

  const onCancel = () => {
    navigation.navigate("Galeria");
  };

  return (
    <View style={styles.container}>
      <View style={styles.description}>
        <TextInput
          placeholder="Título"
          placeholderTextColor={"#A9A9A9"}
          style={styles.title}
          onChangeText={setTitle}
          autoFocus
        />
      </View>
      <View style={styles.description}>
        <TextInput
          multiline={true}
          textAlignVertical={"top"}
          placeholder="Descrição"
          placeholderTextColor={"#A9A9A9"}
          onChangeText={setDescription}
          style={styles.comment}
        />
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.cancel} onPress={onCancel}>
          <Text style={styles.textConfirm}>Cancelar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.confirm} onPress={onConfirm}>
          <Text style={styles.textConfirm}>Confirmar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

Description.HeaderLeft = HeaderLeft;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#363636",
    justifyContent: "center",
    padding: 20,
  },
  description: {
    flexDirection: "column",
    padding: 5,
    backgroundColor: "#1C1C1C",
    borderRadius: 5,
    marginBottom: 20,
  },
  title: {
    height: 50,
    color: "#FFFFFF",
    fontFamily: "Poppins_600SemiBold",
    fontSize: 20,
    paddingLeft: 5,
    alignItems: "center",
  },
  comment: {
    height: 120,
    color: "#FFFFFF",
    fontFamily: "Poppins_600SemiBold",
    fontSize: 20,
    paddingLeft: 5,
    alignItems: "center",
  },
  buttons: {
    padding: 5,
    maxHeight: 50,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  confirm: {
    width: 120,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#32CD32",
    borderRadius: 5,
  },
  cancel: {
    width: 120,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FF4500",
    borderRadius: 5,
  },
  textConfirm: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 17,
    color: "#fff",
  },
});

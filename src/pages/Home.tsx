import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  Image,
  ImageSourcePropType,
} from "react-native";
import { Header } from "../components/Header";
import { interpolate } from "react-native-reanimated";
import Carousel from "react-native-reanimated-carousel";
import { ScrollView } from "react-native-gesture-handler";

interface Images {
  src: ImageSourcePropType;
}

export function Home() {
  const PAGE_WIDTH = Dimensions.get("window").width;

  const images: Images[] = [
    {
      src: require("../../assets/image1.png"),
    },
    {
      src: require("../../assets/image2.png"),
    },
    {
      src: require("../../assets/image3.png"),
    },
  ];

  const animationStyle = React.useCallback((value: number) => {
    "worklet";

    const zIndex = interpolate(value, [-1, 0, 1], [10, 20, 30]);
    const scale = interpolate(value, [-1, 0, 1], [1.25, 1, 0.25]);
    const opacity = interpolate(value, [-0.75, 0, 1], [0, 1, 0]);

    return {
      transform: [{ scale }],
      zIndex,
      opacity,
    };
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "#DCDCDC" }}>
      <Header />
      <Carousel
        loop
        style={{
          width: PAGE_WIDTH,
          height: 240,
          justifyContent: "center",
          alignItems: "center",
        }}
        width={PAGE_WIDTH}
        height={240}
        data={images}
        renderItem={({ item }) => (
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image source={item.src} />
          </View>
        )}
        customAnimation={animationStyle}
      />
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Sobre o aplicativo</Text>
        <Text style={styles.description}>
          {"        "}Adeus às antigas pranchetas e canetas! Agora, com o
          WorkInspect, você pode realizar inspeções de forma simples e
          eficiente, diretamente pelo seu smartphone. Capture fotos, faça
          anotações e armazene tudo em um só lugar, na palma da sua mão.{"\n\n"}
          {"        "}Seja você um profissional de manutenção, inspetor de
          segurança, engenheiro ou qualquer pessoa que precise realizar
          inspeções, o WorkInspect é a solução perfeita. Modernize suas práticas
          de inspeção e eleve a qualidade dos seus serviços.
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: "#C0C0C0",
    marginRight: 10,
    marginLeft: 10,
    borderRadius: 4,
    flex: 1,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#808080",
    padding: 10,
  },
  title: {
    color: "#1C1C1C",
    fontSize: 21,
    fontFamily: "Poppins_400Regular",
    textAlign: "center",
  },
  description: {
    marginTop: 10,
    fontFamily: "Poppins_400Regular",
    fontSize: 13,
    textAlign: "justify",
  },
});

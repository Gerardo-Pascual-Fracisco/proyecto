
   
import { StatusBar } from "expo-status-bar";
import React,{useState,useEffect} from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  SafeAreaView,
  Animated,
} from "react-native";
import { getTasks,deleteTask } from '../../api'




const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const ANCHO_CONTENEDOR = width * 0.5;
const ESPACIO_CONTENEDOR = (width - ANCHO_CONTENEDOR) / 2;
const ESPACIO = 1;


export default function CarouselImages() {

  const [tasks, setTasks] = useState([])
  
  const loadTasks = async () => {
    const data = await getTasks()
    setTasks(data.data);
  };
  useEffect(() => {
    loadTasks();
  }, []);


  const scrollX = React.useRef(new Animated.Value(0)).current;
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden />
      <Animated.FlatList
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        snapToAlignment="start"
        contentContainerStyle={{
          paddingTop: 50,
          paddingHorizontal: ESPACIO_CONTENEDOR,
        }}
        snapToInterval={ANCHO_CONTENEDOR}
        decelerationRate={0}
        scrollEventThrottle={16}
        data={tasks}
        keyExtractor={(item) => item.id_category + ""}

        renderItem={({ item, index }) => {
          const inputRange = [
            (index - 1) * ANCHO_CONTENEDOR,
            index * ANCHO_CONTENEDOR,
            (index + 1) * ANCHO_CONTENEDOR,
          ];

          const scrollY = scrollX.interpolate({
            inputRange,
            outputRange: [0, -50, 0],
          });
          return (
            <View style={{ width: ANCHO_CONTENEDOR }}>
              <Animated.View
                style={{
                  marginHorizontal: ESPACIO,
                  padding: ESPACIO,
                  borderRadius: 34,
                  backgroundColor: "#fff",
                  alignItems: "center",
                  transform: [{ translateY: scrollY }],
                }}
              >
                <Image source={{ uri: item.foto}} style={styles.posterImage} />
                


                <Text style={{ fontWeight: "bold", fontSize: 26 }}> {item.name} </Text>

              </Animated.View>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  posterImage: {
    width: "100%",
    height: 100,
    resizeMode: "cover",
    borderRadius: 24,
    margin: 0,
    marginBottom: 10,
  },
});

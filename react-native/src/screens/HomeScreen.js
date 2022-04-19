import React from "react";
import Layout from "../../components/Categories/Layout";
import TasksList from "../../components/Categories/TasksList";
import {
  Dimensions,
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  Button,
} from "react-native";
import CarouselImages from "../../components/Categories/CarouselImages";

import Feather from "react-native-vector-icons/Feather";
const widthScreen = Dimensions.get("window").width;
const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        {/* ////////////////////////////////////////////////////////////////////////////////////*/}
        <ScrollView style={{ padding: 20 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 20,
              alignItems: "stretch",
            }}
          >
            <Text style={{ fontSize: 18 }}>Hello User</Text>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <ImageBackground
                source={require("../../assets/images/user-profile.jpg")}
                style={{ width: 35, height: 35 }}
                imageStyle={{ borderRadius: 25 }}
              />
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: "row",
              borderColor: "#C6C6C6",
              borderWidth: 1,
              borderRadius: 8,
              paddingHorizontal: 10,
              paddingVertical: 8,
            }}
          >
            <Feather
              name="search"
              size={20}
              color="#C6C6C6"
              style={{ marginRight: 10 }}
            />
            <TextInput placeholder="Search" />
          </View>

          <View
            style={{
              marginVertical: 15,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontSize: 18 }}>Categories</Text>
          </View>

          <CarouselImages />
        </ScrollView>

        {/* ////////////////////////////////////////////////////////////////////////////////////*/}
      </View>

      <View style={styles.container3}>
        <Layout>
          <TasksList />
        </Layout>
      </View>
    </View>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "stretch",
    backgroundColor: "red",
    flex: 1,
    flexDirection: "column",

    // justifyContent: 'center',
  },
  container1: {
    alignItems: "center",
    backgroundColor: "white",
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch",
  },
  container2: {
    alignItems: "center",
    backgroundColor: "white",
    flex: 1,
    justifyContent: "center",
  },
  container3: {
    alignItems: "center",
    backgroundColor: "white",
    flex: 1,
    justifyContent: "center",
  },

  viewBody: {
    flex: 1,
  },
});

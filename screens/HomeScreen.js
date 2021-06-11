import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Icon } from "react-native-elements/dist/icons/Icon";
import { RFValue } from "react-native-responsive-fontsize";
import { windowWidth, windowHeight } from "../components/Dimen";

export default class HomeScreen extends Component {
  render() {
    return (
      <ImageBackground
        source={require("../assets/img/homebg.png")}
        style={styles.bg}
      >
        <StatusBar style={{ backgroundColor: "#5007AE" }} />

        <View style={styles.container}>
          <View style={styles.head}>
            <View style={styles.head_text}>
              <Text style={styles.hello}>Hello,</Text>
              <Text style={styles.username}>Username</Text>
            </View>
            <View style={styles.points_card}>
              <Text style={styles.points_card_text}>Points</Text>
              <Text style={styles.points_card_point}>0</Text>
            </View>
          </View>

          <ScrollView style={{ marginBottom: 220 }}>
            {/*  */}
            {/*  */}
            <TouchableOpacity
              onPress={() => this.props.navigation.replace("Animals")}
            >
              <View style={styles.card}>
                <View style={styles.infoCard}>
                  <View style={styles.titleCard}>
                    <View style={{}}>
                      <Text style={styles.title}>Animals</Text>
                      <View style={styles.blueStrike}></View>
                    </View>
                    <Icon
                      type="feather"
                      name="arrow-right"
                      size={40}
                      color="white"
                      style={{ marginRight: 10, marginTop: 30 }}
                    />
                  </View>
                </View>
                <View style={styles.image}>
                  <Image
                    source={require("../assets/img/animal.png")}
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </View>
              </View>
            </TouchableOpacity>

            {/*  */}
            {/*  */}
            {/*  */}
            {/*  */}
            <TouchableOpacity
              onPress={() => this.props.navigation.replace("Vehicles")}
            >
              <View style={styles.card}>
                <View style={styles.infoCard}>
                  <View style={styles.titleCard}>
                    <View style={{}}>
                      <Text style={styles.title}>Vehicles</Text>
                      <View style={styles.blueStrike}></View>
                    </View>
                    <Icon
                      type="feather"
                      name="arrow-right"
                      size={40}
                      color="white"
                      style={{ marginRight: 10, marginTop: 30 }}
                    />
                  </View>
                </View>
                <View style={styles.image}>
                  <Image
                    source={require("../assets/img/car.png")}
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </View>
              </View>
            </TouchableOpacity>

            {/*  */}
            {/*  */}
            {/*  */}
            {/*  */}
            <TouchableOpacity
              onPress={() => this.props.navigation.replace("Books")}
            >
              <View style={styles.card}>
                <View style={styles.infoCard}>
                  <View style={styles.titleCard}>
                    <View style={{}}>
                      <Text style={styles.title}>Books</Text>
                      <View style={styles.blueStrike}></View>
                    </View>
                    <Icon
                      type="feather"
                      name="arrow-right"
                      size={40}
                      color="white"
                      style={{ marginRight: 10, marginTop: 30 }}
                    />
                  </View>
                </View>
                <View style={styles.image}>
                  <Image
                    source={require("../assets/img/books.png")}
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </View>
              </View>
            </TouchableOpacity>

            {/*  */}
            {/*  */}
            {/*  */}
            {/*  */}
            <TouchableOpacity
              onPress={() => this.props.navigation.replace("Comp")}
            >
              <View style={styles.card}>
                <View style={styles.infoCard}>
                  <View style={styles.titleCard}>
                    <View style={{}}>
                      <Text style={styles.title}>Computer</Text>
                      <View style={styles.blueStrike}></View>
                    </View>
                    <Icon
                      type="feather"
                      name="arrow-right"
                      size={40}
                      color="white"
                      style={{ marginRight: 10, marginTop: 30 }}
                    />
                  </View>
                </View>
                <View style={styles.image}>
                  <Image
                    source={require("../assets/img/comp.png")}
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </View>
              </View>
            </TouchableOpacity>

            {/*  */}
            {/*  */}
            {/*  */}
            {/*  */}
            <TouchableOpacity
              onPress={() => this.props.navigation.replace("Geo")}
            >
              <View style={styles.card}>
                <View style={styles.infoCard}>
                  <View style={styles.titleCard}>
                    <View style={{}}>
                      <Text style={styles.title}>Geography</Text>
                      <View style={styles.blueStrike}></View>
                    </View>
                    <Icon
                      type="feather"
                      name="arrow-right"
                      size={40}
                      color="white"
                      style={{ marginRight: 10, marginTop: 30 }}
                    />
                  </View>
                </View>
                <View style={styles.image}>
                  <Image
                    source={require("../assets/img/geo.png")}
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </View>
              </View>
            </TouchableOpacity>

            {/*  */}
            {/*  */}
            {/*  */}
            {/*  */}
            <TouchableOpacity
              onPress={() => this.props.navigation.replace("GK")}
            >
              <View style={styles.card}>
                <View style={styles.infoCard}>
                  <View style={styles.titleCard}>
                    <View style={{}}>
                      <Text style={styles.title}>General Knowledge</Text>
                      <View style={styles.blueStrike}></View>
                    </View>
                    <Icon
                      type="feather"
                      name="arrow-right"
                      size={40}
                      color="white"
                      style={{ marginRight: 10, marginTop: 30 }}
                    />
                  </View>
                </View>
                <View style={styles.image}>
                  <Image
                    source={require("../assets/img/gk.png")}
                    style={{
                      width: "110%",
                      height: "110%",
                    }}
                  />
                </View>
              </View>
            </TouchableOpacity>

            {/*  */}
            {/*  */}
            {/*  */}
            {/*  */}
            {/*  */}
            <TouchableOpacity
              onPress={() => this.props.navigation.replace("Movies")}
            >
              <View style={styles.card}>
                <View style={styles.infoCard}>
                  <View style={styles.titleCard}>
                    <View style={{}}>
                      <Text style={styles.title}>Movies</Text>
                      <View style={styles.blueStrike}></View>
                    </View>
                    <Icon
                      type="feather"
                      name="arrow-right"
                      size={40}
                      color="white"
                      style={{ marginRight: 10, marginTop: 30 }}
                    />
                  </View>
                </View>
                <View style={styles.image}>
                  <Image
                    source={require("../assets/img/movies.png")}
                    style={{
                      width: "110%",
                      height: "110%",
                    }}
                  />
                </View>
              </View>
            </TouchableOpacity>

            {/*  */}
            {/*  */}
            {/*  */}
            {/*  */}
            {/*  */}
            <TouchableOpacity
              onPress={() => this.props.navigation.replace("Sports")}
            >
              <View style={styles.card}>
                <View style={styles.infoCard}>
                  <View style={styles.titleCard}>
                    <View style={{}}>
                      <Text style={styles.title}>Sports</Text>
                      <View style={styles.blueStrike}></View>
                    </View>
                    <Icon
                      type="feather"
                      name="arrow-right"
                      size={40}
                      color="white"
                      style={{ marginRight: 10, marginTop: 30 }}
                    />
                  </View>
                </View>
                <View style={styles.image}>
                  <Image
                    source={require("../assets/img/sports.png")}
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </View>
              </View>
            </TouchableOpacity>

            {/*  */}
            {/*  */}
          </ScrollView>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  bg: {
    height: windowHeight,
    width: windowWidth,
  },
  head: {
    width: windowWidth,
    height: windowHeight / 6,
    marginTop: 20,
    padding: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  head_text: {
    display: "flex",
    flexDirection: "column",
  },
  hello: {
    color: "#000",
    fontSize: RFValue(40),
    fontWeight: "bold",
  },
  username: {
    color: "#fff",
    fontSize: RFValue(35),
    fontWeight: "bold",
    marginLeft: 20,
  },
  points_card: {
    backgroundColor: "#F5FFFA",
    width: windowWidth / 3.2,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    marginTop: 10,
  },
  points_card_text: {
    fontSize: RFValue(20),
    fontWeight: "bold",
    color: "#510BAA",
  },
  points_card_point: {
    fontSize: RFValue(17),
    fontWeight: "bold",
    color: "#000",
  },
  //
  //
  //
  //
  blueStrike: {
    height: 4,
    backgroundColor: "lightblue",
    width: 50,
  },
  card: {
    height: 100,
    width: "95%",
    marginTop: 26,
  },
  climateImg: {
    width: 10,
    height: 10,
    marginRight: 10,
  },
  climateInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    alignItems: "center",
    marginRight: 10,
  },
  infoCard: {
    height: 100,
    width: "80%",
    position: "absolute",
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "rgba(47,13,102,0.7)",
    right: 0,
    top: 0,
    bottom: 0,
    borderRadius: 10,
    shadowColor: "rgba(0,0,0,0.2)",
    shadowOffset: { width: 12, height: 12 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
  image: {
    width: 80,
    height: 80,
    backgroundColor: "white",
    position: "absolute",
    borderRadius: 50,
    top: 10,
    left: 15,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: RFValue(27),
    fontWeight: "600",
  },
  titleCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 40,
    alignItems: "center",
  },
});

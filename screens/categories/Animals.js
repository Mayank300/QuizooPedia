import React, { Component } from "react";
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import { windowWidth, windowHeight } from "../../components/Dimen";

import { Icon } from "react-native-elements";
import { RFValue } from "react-native-responsive-fontsize";
import { StatusBar } from "expo-status-bar";

export default class Books extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: [],
      qNum: 0,
      minutes: 2,
      seconds: 0,
    };
  }

  componentDidMount() {
    this.myInterval = setInterval(() => {
      const { seconds, minutes } = this.state;
      if (seconds > 0) {
        this.setState(({ seconds }) => ({
          seconds: seconds - 1,
        }));
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(this.myInterval);
        } else {
          this.setState(({ minutes }) => ({
            minutes: minutes - 1,
            seconds: 59,
          }));
        }
      }
    }, 1000);

    return fetch(
      "https://opentdb.com/api.php?amount=10&category=27&difficulty=easy&type=multiple"
    )
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson.results,
        });
      })
      .catch((error) => console.log(error));
  }

  componentWillUnmount() {
    clearInterval(this.myInterval);
  }

  render() {
    let questions = [];
    let correctAnswer = [];
    let incorrectAnswers = [];
    const { minutes, seconds } = this.state;

    // TODO: this ⬇ comment is for ending the quiz after 2 minutes It's working just added todo sign to highlight it :)

    // if (this.state.seconds === 1) {
    //   Alert.alert("Time Over !", "", [
    //     {
    //       text: "Exit",
    //       onPress: () => this.props.navigation.replace("HomeScreen"),
    //     },
    //   ]);
    // }

    if (this.setState.isLoading) {
      return;
    } else {
      this.state.dataSource.map((val, key) => {
        questions.push(val.question);
        correctAnswer.push(val.correct_answer);
        incorrectAnswers.push(...val.incorrect_answers);
      });

      return (
        <ImageBackground
          source={require("../../assets/img/quizbg.png")}
          style={styles.bg}
        >
          <StatusBar hidden />
          <View style={styles.goBack}>
            <Icon
              type="feather"
              name="arrow-left"
              size={40}
              color="white"
              style={{ marginLeft: windowWidth / 50 }}
              onPress={() => {
                Alert.alert("Do you want to exit the quiz ?", "", [
                  {
                    text: "Yes",
                    onPress: () => {
                      this.props.navigation.replace("HomeScreen");
                      this.setState({
                        qNum: 0,
                      });
                    },
                  },
                  {
                    text: "No",
                  },
                ]);
              }}
            />

            <View style={styles.timer}>
              <Icon
                type="feather"
                name="clock"
                size={30}
                color="white"
                style={{ marginLeft: 5 }}
              />
              <Text style={styles.timer_text}>
                {minutes} : {seconds < 10 ? `0${seconds}` : seconds}
              </Text>
            </View>
            <View style={styles.life}>
              <Image
                source={require("../../assets/img/heart.png")}
                style={{ width: 30, height: 30, marginRight: 10 }}
              />
              <Text style={styles.life_text}>x 3</Text>
            </View>
          </View>

          <View style={styles.quiz_area}>
            {questions.length === 0 ? (
              <View style={styles.que_card}>
                <ActivityIndicator color="black" />
              </View>
            ) : (
              <View style={styles.que_card}>
                <Text style={styles.quiz_que}>
                  {this.state.qNum + 1 + ". " + questions[this.state.qNum]}
                </Text>
              </View>
            )}
            <View style={styles.scrollViewStyle}>
              <ScrollView>
                {questions.length === 0 ? (
                  <View style={styles.opt_card}>
                    <ActivityIndicator color="black" />
                  </View>
                ) : (
                  <View style={styles.opt_card}>
                    <Text style={styles.opt_text}>
                      {correctAnswer[this.state.qNum]}
                    </Text>
                  </View>
                )}
                {questions.length === 0 ? (
                  <View style={styles.opt_card}>
                    <ActivityIndicator color="black" />
                  </View>
                ) : (
                  <View style={styles.opt_card}>
                    <Text style={styles.opt_text}>
                      {incorrectAnswers[this.state.qNum]}
                    </Text>
                  </View>
                )}
                {questions.length === 0 ? (
                  <View style={styles.opt_card}>
                    <ActivityIndicator color="black" />
                  </View>
                ) : (
                  <View style={styles.opt_card}>
                    <Text style={styles.opt_text}>
                      {incorrectAnswers[this.state.qNum]}
                    </Text>
                  </View>
                )}
                {questions.length === 0 ? (
                  <View style={styles.opt_card}>
                    <ActivityIndicator color="black" />
                  </View>
                ) : (
                  <View style={styles.opt_card}>
                    <Text style={styles.opt_text}>
                      {incorrectAnswers[this.state.qNum]}
                    </Text>
                  </View>
                )}
              </ScrollView>
            </View>
            {this.state.qNum !== 9 ? (
              <View style={styles.q_left}>
                <Text style={styles.q_left_text}>
                  {this.state.qNum + 1} / 10
                </Text>
                <TouchableOpacity
                  onPress={() => this.setState({ qNum: this.state.qNum + 1 })}
                  style={styles.next_button}
                >
                  <Text style={styles.next_text}>Next</Text>
                  <Icon
                    type="feather"
                    name="arrow-right"
                    size={25}
                    color="white"
                    style={{ fontWeight: "bold", marginLeft: 5 }}
                  />
                </TouchableOpacity>
              </View>
            ) : (
              <View style={styles.q_left}>
                <Text style={styles.q_left_text}>
                  {this.state.qNum + 1} / 10
                </Text>
                <TouchableOpacity
                  onPress={() =>
                    alert(
                      "I have to complete score screen :) press arrow to go back"
                    )
                  }
                  style={styles.next_button}
                >
                  <Text style={styles.next_text}>Submit</Text>
                  <Icon
                    type="feather"
                    name="arrow-right"
                    size={25}
                    color="white"
                    style={{
                      fontWeight: "bold",
                      marginLeft: 5,
                    }}
                  />
                </TouchableOpacity>
              </View>
            )}
          </View>
        </ImageBackground>
      );
    }
  }
}

const styles = StyleSheet.create({
  bg: {
    height: windowHeight,
    width: windowWidth,
  },
  goBack: {
    marginTop: windowHeight / 23,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  quiz_area: {
    alignItems: "center",
    marginTop: 20,
  },
  que_card: {
    width: windowWidth / 1.2,
    backgroundColor: "rgba(47,13,102,0.65)",
    height: windowHeight / 9,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 26,
  },
  quiz_que: {
    textAlign: "center",
    fontSize: RFValue(20),
    color: "white",
    fontWeight: "bold",
    width: windowWidth / 1.4,
  },
  opt_card: {
    width: windowWidth / 1.4,
    backgroundColor: "rgba(255,255,255,0.7)",
    height: windowHeight / 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 26,
    marginTop: 50,
  },
  opt_text: {
    textAlign: "center",
    fontSize: RFValue(20),
    color: "black",
    fontWeight: "bold",
    width: windowWidth / 1.4,
  },
  next_button: {
    height: windowHeight / 20,
    width: windowWidth / 3,
    backgroundColor: "rgba(47,13,102,0.65)",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 26,
    display: "flex",
    flexDirection: "row",
  },
  next_text: {
    color: "white",
    fontSize: RFValue(20),
    fontWeight: "bold",
  },
  timer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  timer_text: {
    marginLeft: 10,
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
  },
  life: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  life_text: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
    marginRight: 20,
  },
  q_left: {
    display: "flex",
    flexDirection: "row",
    marginTop: windowHeight / 25,
    alignItems: "center",
    width: windowWidth,
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  q_left_text: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
  },
  scrollViewStyle: {
    height: windowHeight / 1.7,
  },
});

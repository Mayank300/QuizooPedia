import React, { Component } from "react";
import { Text, View } from "react-native";

export default class Books extends Component {
  render() {
    return (
      <View>
        <Text> Books </Text>
      </View>
    );
  }
}

// import React, { Component } from "react";
// import {
//   Text,
//   View,
//   ImageBackground,
//   StyleSheet,
//   ActivityIndicator,
//   ScrollView,
//   TouchableOpacity,
//   Image,
//   Alert,
// } from "react-native";
// import { windowWidth, windowHeight } from "../../components/Dimen";
// import ConfettiCannon from "react-native-confetti-cannon";

// import { Icon } from "react-native-elements";
// import { RFValue } from "react-native-responsive-fontsize";
// import { StatusBar } from "expo-status-bar";
// import axios from "axios";

// export default class Animals extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       options: [],
//       dataSource: [],
//       isLoading: true,
//       disabled: false,
//       minutes: 2,
//       seconds: 0,
//       score: 0,
//       currQues: 0,
//       selected: "",
//     };
//   }

//   handleShuffle(optionss) {
//     return optionss.sort(() => Math.random() - 0.5);
//   }

//   async fetchAPI() {
//     const { data } = await axios.get(
//       "https://opentdb.com/api.php?amount=10&category=27&difficulty=easy&type=multiple"
//     );
//     this.setState({
//       isLoading: false,
//       dataSource: data.results,
//     });

//     this.setState({
//       options:
//         this.state.dataSource &&
//         this.handleShuffle([
//           this.state.dataSource[this.state.currQues]?.correct_answer,
//           ...this.state.dataSource[this.state.currQues]?.incorrect_answers,
//         ]),
//     });
//   }

//   componentDidMount() {
//     this.fetchAPI();

//     this.myInterval = setInterval(() => {
//       const { seconds, minutes } = this.state;
//       if (seconds > 0) {
//         this.setState(({ seconds }) => ({
//           seconds: seconds - 1,
//         }));
//       }
//       if (seconds === 0) {
//         if (minutes === 0) {
//           clearInterval(this.myInterval);
//         } else {
//           this.setState(({ minutes }) => ({
//             minutes: minutes - 1,
//             seconds: 59,
//           }));
//         }
//       }
//     }, 1000);
//   }

//   // This below code for '  componentDidUpdate ' is giving error for continues change in options

//   // componentDidUpdate(prevState) {
//   //   if (prevState.currQues !== this.state.currQues) this.fetchAPI();
//   //   console.log("called");
//   // }

//   checkAnswer(i) {
//     this.setState({
//       disabled: true,
//     });
//     console.log(i);
//     if (i === this.state.dataSource[this.state.currQues]?.correct_answer) {
//       return null;
//     } else {
//       return null;
//     }
//   }

//   handleNext() {
//     if (this.state.disabled === false) {
//       alert("Select an Option");
//     } else {
//       this.setState({
//         currQues: this.state.currQues + 1,
//         disabled: false,
//       });
//     }
//   }

//   componentWillUnmount() {
//     clearInterval(this.myInterval);
//   }

//   render() {
//     const { minutes, seconds } = this.state;

//     if (this.state.seconds === 0 && this.state.minutes === 0) {
//       Alert.alert("Time Over !", "", [
//         {
//           text: "Exit",
//           onPress: () => this.props.navigation.replace("HomeScreen"),
//         },
//       ]);
//     }

//     if (this.setState.isLoading) {
//       return;
//     } else {
//       return (
//         <ImageBackground
//           source={require("../../assets/img/quizbg.png")}
//           style={styles.bg}
//         >
//           <StatusBar hidden />
//           {this.state.dataSource.length === 0 ? null : (
//             <View style={styles.goBack}>
//               <Icon
//                 type="feather"
//                 name="arrow-left"
//                 size={40}
//                 color="white"
//                 style={{ marginLeft: windowWidth / 50 }}
//                 onPress={() => {
//                   Alert.alert("Do you want to exit the quiz ?", "", [
//                     {
//                       text: "Yes",
//                       onPress: () => {
//                         this.props.navigation.replace("HomeScreen");
//                         this.setState({
//                           currQues: 0,
//                           selected: "",
//                         });
//                       },
//                     },
//                     {
//                       text: "No",
//                     },
//                   ]);
//                 }}
//               />

//               <View style={styles.timer}>
//                 <Icon
//                   type="feather"
//                   name="clock"
//                   size={30}
//                   color="white"
//                   style={{ marginLeft: 5 }}
//                 />
//                 <Text style={styles.timer_text}>
//                   {minutes} : {seconds < 10 ? `0${seconds}` : seconds}
//                 </Text>
//               </View>
//               <View style={styles.life}>
//                 <Image
//                   source={require("../../assets/img/heart.png")}
//                   style={{ width: 30, height: 30, marginRight: 10 }}
//                 />
//                 <Text style={styles.life_text}>x 3</Text>
//               </View>
//             </View>
//           )}
//           <View style={styles.quiz_area}>
//             {this.state.dataSource.length === 0 ? (
//               <View style={styles.act}>
//                 <ActivityIndicator color="white" size="large" />
//               </View>
//             ) : (
//               <View style={styles.que_card}>
//                 <Text style={styles.quiz_que}>
//                   {this.state.currQues +
//                     1 +
//                     ". " +
//                     this.state.dataSource[this.state.currQues].question}
//                 </Text>
//               </View>
//             )}

//             <View style={styles.scrollViewStyle}>
//               <ScrollView>
//                 {this.state.options &&
//                   this.state.options.map((i) => (
//                     <TouchableOpacity
//                       style={styles.opt_card}
//                       onPress={() => {
//                         this.checkAnswer(i);
//                       }}
//                       key={i}
//                       disabled={this.state.disabled}
//                     >
//                       <Text style={styles.opt_text}>{i}</Text>
//                     </TouchableOpacity>
//                   ))}
//               </ScrollView>
//             </View>
//             {this.state.currQues !== 9 ? (
//               <View>
//                 {this.state.dataSource.length === 0 ? null : (
//                   <View style={styles.q_left}>
//                     <Text style={styles.q_left_text}>
//                       {this.state.currQues + 1} / 10
//                     </Text>
//                     <TouchableOpacity
//                       onPress={() => {
//                         this.handleNext();
//                       }}
//                       style={styles.next_button}
//                     >
//                       <Text style={styles.next_text}>Next</Text>
//                       <Icon
//                         type="feather"
//                         name="arrow-right"
//                         size={25}
//                         color="white"
//                         style={{ fontWeight: "bold", marginLeft: 5 }}
//                       />
//                     </TouchableOpacity>
//                   </View>
//                 )}
//               </View>
//             ) : (
//               <View style={styles.q_left}>
//                 <Text style={styles.q_left_text}>
//                   {this.state.currQues + 1} / 10
//                 </Text>
//                 <TouchableOpacity
//                   onPress={() =>
//                     alert(
//                       "I have to complete score screen :) press arrow to go back"
//                     )
//                   }
//                   style={styles.next_button}
//                 >
//                   <Text style={styles.next_text}>Submit</Text>
//                   <Icon
//                     type="feather"
//                     name="arrow-right"
//                     size={25}
//                     color="white"
//                     style={{
//                       fontWeight: "bold",
//                       marginLeft: 5,
//                     }}
//                   />
//                 </TouchableOpacity>
//               </View>
//             )}
//           </View>
//         </ImageBackground>
//       );
//     }
//   }
// }

// const styles = StyleSheet.create({
//   bg: {
//     height: windowHeight,
//     width: windowWidth,
//   },
//   act: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//     marginTop: windowHeight / 2,
//     marginLeft: windowWidth / 20,
//   },
//   goBack: {
//     marginTop: windowHeight / 23,
//     display: "flex",
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//   },
//   quiz_area: {
//     alignItems: "center",
//     marginTop: 20,
//   },
//   que_card: {
//     width: windowWidth / 1.2,
//     backgroundColor: "rgba(47,13,102,0.65)",
//     height: windowHeight / 9,
//     alignItems: "center",
//     justifyContent: "center",
//     borderRadius: 26,
//   },
//   quiz_que: {
//     textAlign: "center",
//     fontSize: RFValue(20),
//     color: "white",
//     fontWeight: "bold",
//     width: windowWidth / 1.4,
//   },
//   opt_card: {
//     width: windowWidth / 1.4,
//     backgroundColor: "rgba(255,255,255,0.7)",
//     height: windowHeight / 10,
//     alignItems: "center",
//     justifyContent: "center",
//     borderRadius: 26,
//     marginTop: 50,
//   },
//   opt_text: {
//     textAlign: "center",
//     fontSize: RFValue(20),
//     color: "black",
//     fontWeight: "bold",
//     width: windowWidth / 1.4,
//     paddingHorizontal: 5,
//   },
//   next_button: {
//     height: windowHeight / 20,
//     width: windowWidth / 3,
//     backgroundColor: "rgba(47,13,102,0.65)",
//     justifyContent: "center",
//     alignItems: "center",
//     borderRadius: 26,
//     display: "flex",
//     flexDirection: "row",
//   },
//   next_text: {
//     color: "white",
//     fontSize: RFValue(20),
//     fontWeight: "bold",
//   },
//   timer: {
//     display: "flex",
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   timer_text: {
//     marginLeft: 10,
//     color: "white",
//     fontSize: 25,
//     fontWeight: "bold",
//   },
//   life: {
//     display: "flex",
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   life_text: {
//     color: "white",
//     fontSize: 25,
//     fontWeight: "bold",
//     marginRight: 20,
//   },
//   q_left: {
//     display: "flex",
//     flexDirection: "row",
//     marginTop: windowHeight / 25,
//     alignItems: "center",
//     width: windowWidth,
//     justifyContent: "space-between",
//     paddingHorizontal: 20,
//   },
//   q_left_text: {
//     color: "white",
//     fontSize: 25,
//     fontWeight: "bold",
//   },
//   scrollViewStyle: {
//     height: windowHeight / 1.7,
//   },
//   select: {
//     width: windowWidth / 1.4,
//     backgroundColor: "green",
//     height: windowHeight / 10,
//     alignItems: "center",
//     justifyContent: "center",
//     borderRadius: 26,
//     marginTop: 50,
//   },
//   wrong: {
//     width: windowWidth / 1.4,
//     backgroundColor: "red",
//     height: windowHeight / 10,
//     alignItems: "center",
//     justifyContent: "center",
//     borderRadius: 26,
//     marginTop: 50,
//   },
// });

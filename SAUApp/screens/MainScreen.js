import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  ScrollView,
  SafeAreaView
} from "react-native";

export default class MainScreen extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View>
            <Text>다음 수업</Text>
          </View>
          <Text />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

var deviceHeight = Dimensions.get("window").height;
var deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: deviceWidth,
    height: deviceHeight,
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center"
  }
});

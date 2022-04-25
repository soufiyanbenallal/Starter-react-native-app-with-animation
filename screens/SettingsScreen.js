import React, { useRef } from 'react';
import { StyleSheet,Animated, Button } from 'react-native';
import { Text,View  } from '../src/layouts/Themed';
import Main from '../src/layouts/Main';
import { Avatar, Card, IconButton } from 'react-native-paper';
import { List } from 'react-native-paper';
import SearchBar from "../src/components/SearchBar";
import { SafeAreaView, TouchableOpacity } from "react-native";
import BottomSheet from "react-native-gesture-bottom-sheet";

const Example = () => {
  // Needed in order to use .show()
  const bottomSheet = useRef();

  return (
    <SafeAreaView style={styless.container}>
      <BottomSheet hasDraggableIcon ref={bottomSheet} height={600} />
      <TouchableOpacity
        style={styless.button}
        onPress={() => bottomSheet.current.show()}
      >
        <Text style={styless.text}>Open modal</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styless = StyleSheet.create({
  button: {
    height: 50,
    width: 150,
    backgroundColor: "#140078",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    shadowColor: "#8559da",
    shadowOpacity: 0.7,
    shadowOffset: {
      height: 4,
      width: 4,
    },
    shadowRadius: 5,
    elevation: 6,
  },
  text: {
    color: "white",
    fontWeight: "600",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
const ListSection = () => (
  <View >
    <List.Subheader>Some title</List.Subheader>
    <List.Item title="First Item" description="Item description" left={() => <List.Icon icon="folder" />} />
    <List.Item
      title="Second Item"
      description="Item description"
      left={() => <List.Icon color="#000" icon="folder" />}
    />
  </View>
);

const Profile = () => (
  <Card.Title
    title="UserName"
    subtitle="email@wevente.com"
    left={(props) => <Avatar.Icon {...props} icon="folder" />}
    right={(props) => <IconButton {...props} icon="chevron-forward" onPress={() => {}} />}
  />
);
export default function SettingsScreen({navigation}) {
  const [searchPhrase, setSearchPhrase] = React.useState("");
  const [clicked, setClicked] = React.useState(false);
  return (
        <Main style={styles.container} navigation={navigation} title='Settings'>
          <Example />
          {/* <BottomSheet hasDraggableIcon ref={bottomSheet} height={600} /> */}
          <SearchBar
            searchPhrase={searchPhrase}
            setSearchPhrase={setSearchPhrase}
            clicked={clicked}
            setClicked={setClicked}
          />
          <Profile />
          <ListSection />
        </Main>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#444'
  }
});

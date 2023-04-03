import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import contactsHOC from "./src/components/contactsHOC";
import PeopleList from "./src/components/PeopleList";


export default function App() {

    //const ContactsDataLoader = contactsHOC(PeopleList);
    return (
      <Provider store={store}>
        <View style={styles.container}>
            <Text>Welcome, Open up App.tsx to start working on your app!</Text>
            <StatusBar style="auto" />
            <PeopleList />
        </View>
    </Provider>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

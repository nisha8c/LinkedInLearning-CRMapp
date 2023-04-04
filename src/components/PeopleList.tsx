import {View, StyleSheet, FlatList, Text, SafeAreaView} from "react-native";
import {ContactData} from "../types/types";
import {useEffect, useState} from "react";
import PersonDetails from "./PersonDetails";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexWrap: 'wrap',
        paddingTop: 20,
        alignItems: "center",
        justifyContent: "center",
    }
});

const PeopleList = () => {
    const [contacts, setContacts] = useState<ContactData[]>([]);

    const getAllContacts = async () => {
        try {
            const response = await fetch("http://localhost:3000/contact");
            const data = await response.json();
            setContacts(data);
        } catch (e) {
            console.log('error in getAllContacts: ', e);
        }
    }

    useEffect(() => {
        getAllContacts();
    }, [contacts]);

    return(
        <SafeAreaView>
            <View style={styles.container}>
                <Text>Displaying all Contacts</Text>
                <FlatList
                    data={contacts}
                    renderItem={({item}) => <PersonDetails data={item} />}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        </SafeAreaView>
    );
};

export default PeopleList;
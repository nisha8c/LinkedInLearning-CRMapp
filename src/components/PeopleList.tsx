import {View, StyleSheet, FlatList, Text, SafeAreaView} from "react-native";
import {ContactData} from "../types/types";
import {useEffect, useState} from "react";
import PersonDetails from "./PersonDetails";

interface IPeopleListComponentProps {
    data: ContactData[]
}

const styles = StyleSheet.create({

});
//{data}: IPeopleListComponentProps
const PeopleList = () => {
    const [contacts, setContacts] = useState<ContactData[]>([]);

    const getAllContacts = async () => {
        const response = await fetch("http://localhost:3000/contact");
        const data = await response.json();
        setContacts(data);
        console.log(contacts);
    }

    useEffect(() => {
        getAllContacts();
    }, [contacts]);
    return(
        <SafeAreaView>
            <View>
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
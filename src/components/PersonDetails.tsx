import {Text, View, StyleSheet, Image, TouchableWithoutFeedback, SafeAreaView, ImageBackground} from "react-native";
import {ContactData} from "../types/types";
import { useDispatch } from "react-redux";
import { getTheme } from "react-native-material-kit";
import Icon from 'react-native-vector-icons/EvilIcons';


const styles = StyleSheet.create({
    card: {
        flex: 1,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 8,
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        marginBottom: 25,
    },
    title: {
        fontSize: 24,
        paddingLeft: 10,
    },
    image: {
        flex: 1,
        height: '100%',
        width: '100%',
    },
    action: {
        backgroundColor: 'black',
        color: 'white',
        paddingLeft: 10,
    },
    icon: {
        position: 'absolute',
        top: 15,
        left: 0,
        color: 'white',
        backgroundColor: 'rgba(255,255,255,0)',
    },
});

interface IPersonDetailsComponentProps {
    data: ContactData
}

const PersonDetails = ({data}: IPersonDetailsComponentProps) => {

    return(
        <SafeAreaView>
            <TouchableWithoutFeedback
                onPress={() => console.log('Selected Person: ', data.firstName)}
            >
                <View style={styles.card}>
                    <ImageBackground source={require('../images/background.jpg')} style={styles.image}>

                        <Text style={styles.title}>{data.firstName} {data.lastName}</Text>
                        <Text style={styles.action}>{data.company}</Text>
                    </ImageBackground>
                </View>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    );
};

export default PersonDetails;
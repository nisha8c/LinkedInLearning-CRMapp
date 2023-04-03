import {Text, TouchableOpacity, View, StyleSheet, Image, TouchableWithoutFeedback} from "react-native";
import {ContactData} from "../types/types";
//import { getTheme } from "react-native-material-kit";
import Icon from 'react-native-vector-icons/EvilIcons';

//const theme = getTheme();

const styles = StyleSheet.create({
    card: {
        marginTop: 20,
    },
    title: {
        top: 20,
        left: 80,
        fontSize: 24,
    },
    image: {
        height: 100,
    },
    action: {
        backgroundColor: 'black',
        color: 'white',
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
        <>
            <TouchableWithoutFeedback>
                <View>
                    <Image source={require('../images/background.jpg')} style={styles.image} />
                    <Text style={[styles.title]}>{data.firstName} {data.lastName}</Text>
                    <Text style={[styles.action]}>{data.company}</Text>
                </View>
            </TouchableWithoutFeedback>
        </>
    );
};

export default PersonDetails;
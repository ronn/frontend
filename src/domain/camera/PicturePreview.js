import {Button, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import CountDown from 'react-native-countdown-component';
import { getJson } from "../service/ApiService";
import { useNavigation } from '@react-navigation/native';


export const PicturePreview = props => {
    const [attempts, setAttempts] = useState(attempts);
    const navigation = useNavigation();

    useEffect(() => {
        getJson('/attempts')
            .then(json => setAttempts(json.attempts))
            .catch(error => alert('An error has occurred: ' + error))
    },[]);

    return (
        <View>
            <CountDown
                until={60 * 3}
                size={30}
                onFinish={props.showCameraAgain()}
                size={20}
                timeToShow={['M', 'S']}
            />

            {attempts >= 3 ?
                <Button title={'Discard'} onPress={() => navigation.navigate("Camera")}/>
                :
                <Button title={'Discard'} onPress={props.showCameraAgain()}/>
            }
            <Button title={'Post!'} onPress={props.savePic()}/>
        </View>
    )
}
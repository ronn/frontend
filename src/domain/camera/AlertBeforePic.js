import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './style/styles';
import Icon from 'react-native-vector-icons/dist/AntDesign';
import {getJson} from '../service/ApiService';
import HomeScreen from "../home/HomeScreen";

function AlertBeforePic(props) {

    const [attempts, setAttempts] = useState();
    const [stopAlerts, setStopAlerts] = useState();

    const LIMIT_OF_ATTEMPTS = 3;
        useEffect(() => {
            const totalAttempts = props.navigation.addListener('focus', () => {
                getJson('/attempts')
                    .then(json => setAttempts(json.attempts))
                    .catch(error => alert('An error has occurred: ' + error))
            });
            // Return the function to unsubscribe from the event so it gets removed on unmount
            return totalAttempts;
        },[attempts]);

        return(
            <View style={styles.alertContainer}>
                { attempts >= 0 && attempts < LIMIT_OF_ATTEMPTS
                ? (
                    <View>
                        <View style={styles.alertText}>
                            <Text style={styles.title}>
                                HOW SIQPIK WORKS:
                            </Text>
                            <View style={styles.rules}>

                                <View>
                                    <Text style={styles.rulesText}>If you discard a picture you have taken it will not save on your phone</Text>
                                </View>
                                <View>
                                    <Text style={styles.rulesText}>Once you take a picture a timer will start and you must post within that time or risk losing the photo.</Text>
                                </View>
                                <View>
                                    <Text style={styles.rulesText}>You have a maximum of three photos per day. You have used { attempts } of 3 attempts </Text>
                                </View>
                            </View>
                        </View>

                        <View style={styles.alertButtons}>

                            <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('Home')}>
                                <Text style={styles.buttonText}> Cancel </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button} onPress={() =>  props.navigation.navigate('TakePic')}>
                                <Text style={styles.buttonText}> Accept </Text>
                            </TouchableOpacity>

                        </View>

                        <View style={styles.removeWarning}>
                            <Text style={styles.removeWarningText}>Don't Show Warning Again</Text>


                            {stopAlerts === false ?
                                <TouchableOpacity  onPress={() => setStopAlerts(true)}>
                                    <Icon
                                        name="staro"
                                        size={30}
                                        color="black"/>
                                </TouchableOpacity>
                                :
                                <TouchableOpacity onPress={() => setStopAlerts( false)}>
                                    <Icon
                                        name="staro"
                                        size={30}
                                        color="black"/>
                                </TouchableOpacity>
                            }
                        </View>
                    </View>
                )
                : attempts >= LIMIT_OF_ATTEMPTS
                    ? (
                        <View style={styles.alertContainer}>
                            <View>
                                <Text style={styles.rulesText}>
                                    Not More Attempts For Today!
                                </Text>
                                <Text style={styles.rulesText}>
                                    Try Again Tomorrow
                                </Text>

                            </View>
                            <View>
                            <TouchableOpacity style={styles.buttonHome} onPress={() => props.navigation.navigate('Home')}>
                                <Text style={styles.buttonText}> Back To Home Page </Text>
                            </TouchableOpacity>
                            </View>
                        </View>

                    )
                    :
                    null
                }

                </View>

        )}


export default AlertBeforePic;
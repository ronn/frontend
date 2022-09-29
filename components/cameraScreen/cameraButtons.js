import React from "react";
import {Text, TouchableOpacity, View} from "react-native";
import {styles} from "./style/style";

// React-native-vision-camera
import {   TakePhotoOptions, TakeSnapshotOptions, VideoFile } from 'react-native-vision-camera';

// ICONS
import Ionicons from 'react-native-vector-icons/Ionicons';

export const CameraButtons = props => (
    <View style={ styles.buttonsContainer }>
        <TouchableOpacity  style={styles.capture}>
            <Ionicons
                name="md-camera-reverse-outline"
                color="white"
                size={45}
            />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.takePicture()} style={styles.capture}>
            <Ionicons
                name="md-radio-button-off-outline"
                size={50}
                color="white"
            />
        </TouchableOpacity>
        <TouchableOpacity  style={styles.capture}>

            { props.flashMode === 'on' ?
            <Ionicons
                name="flash-outline"
                color="white"
                size={45}
            />
            :
                <Ionicons
                    name="flash-off-outline"
                    color="white"
                    size={45}
                />
            }

        </TouchableOpacity>

    </View>
);

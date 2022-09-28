import React, {useEffect, useRef} from 'react';

import { Camera, CameraPermissionStatus, useCameraDevices } from 'react-native-vision-camera';
import {useIsFocused} from "@react-navigation/native"
import {
    Text,
    View,
    StyleSheet
} from 'react-native';



const CameraScreen = ({ navigation, props }) => {
    

    const [hasPermission, setHasPermission] = React.useState(false);
    const isFocused = useIsFocused()
    const devices = useCameraDevices()
    const device = devices.back
    const camera = useRef(null)
    const takePhotoOptions = {
      qualityPrioritization: 'speed',
      flash: 'off'
    };
    React.useEffect(() => {
      (async () => {
        const status = await Camera.requestCameraPermission();
        setHasPermission(status === 'authorized');
      })();
    }, []);

    const takePhoto = async () => {
      try {
        //Error Handle better
        if (camera.current == null) throw new Error('Camera Ref is Null');
        console.log('Photo taking ....');
        const photo = await camera.current.takePhoto(takePhotoOptions);
        console.log(photo.path)
      } catch (error) {
        console.log(error);
      }
    };


    function renderCamera() {
        if (device == null) {
          return (
            <View>
              <Text style={{ color: '#fff' }}>Loading</Text>
            </View>
          )
        }
        else {
          return (
            <View style={{ flex: 1 }}>
              {device != null &&
                hasPermission && (
                  <>
                    <Camera
                      ref={camera}
                      style={StyleSheet.absoluteFill}
                      device={device}
                      isActive={isFocused}
                      photo={true}
                    />
                   
                  </>
                )}
            </View>
          )
        }
    
    
      }
      return (
        <View style={{ flex: 1 }}>
          {renderCamera()}
        </View>
      );
}

export default CameraScreen; 
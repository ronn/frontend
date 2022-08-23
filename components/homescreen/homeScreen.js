import React from 'react';


import {
    Text,
    View,
    Button
} from 'react-native';


const HomeScreen = ({ navigation, props }) => {

    return (
        <View>
            <Text>Home Screen</Text>
            <Button
                title="Go to Feed"
                onPress={() => navigation.navigate('Feed')}
            />
        </View>
    )
}

export default HomeScreen; 
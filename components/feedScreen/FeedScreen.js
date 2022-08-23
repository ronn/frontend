import React from 'react';



import {
    Text,
    View,
    Button
} from 'react-native';


const FeedScreen = ({navigation, props}) => {

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Feed Screen</Text>

            <Button
                title="Go to HomePage"
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    )
}

export default FeedScreen; 
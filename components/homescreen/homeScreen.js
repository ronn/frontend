import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './features/counterSlice'

import {
    Text,
    View,
    Button
} from 'react-native';


const HomeScreen = ({ navigation, props }) => {

    const dispatch = useDispatch();
    const count = useSelector((state) => state.counter.value); 

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>

            <Button
                title="Increase"
                onPress={(e) => dispatch(increment())}
            >
                Increment
            </Button>
            <Text>{count}</Text>
            <Button
                title="Decrease"
                onPress={(e) => dispatch(decrement())}
            >
                Decrement
            </Button>

        </View>
    )
}

export default HomeScreen; 
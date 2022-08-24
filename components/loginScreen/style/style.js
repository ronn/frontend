import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

    container: { 
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'space-around' 
    },
    button: {
        backgroundColor: '#000',
        borderRadius: 20,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#ffffff',
        paddingVertical: 6
    },
    inputBox: {
        width: 250,
        height: 40,
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 16,
        marginVertical: 10
    },
    title:{
        fontSize: 35,
        fontWeight:'bold'
    },
    bottomText:{
        fontSize: 20,
        fontWeight:'bold'
    }
});
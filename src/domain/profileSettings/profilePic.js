import React, { useState } from "react";
import { Text, View, Image, FlatList } from "react-native";
import {PicsContainer} from "../profile/PicsContainer";
import {styles} from "/style/styles";

export const selectProfilePic = props => {
    const [user, setUser] = useState(props.user);
    const [profileUrl, setProfileUrl] = useState(user.profilePicUrl);

    return (
        <View>
            <View>
                <Image source={{uri: profileUrl}}/>
            </View>
            <View>
                <FlatList
                    data={user.pics}
                    renderItem={({ item }) => (
                        <View style={{ flex: 1, flexDirection: 'column', margin: 1 }}>
                            <Image
                                source={{ uri: item.url }}
                                onPress
                            />
                        </View>
                    )}
                    //Setting the number of column
                    numColumns={3}
                    keyExtractor={item => item.id}
                />
            </View>
        </View>
    )
}
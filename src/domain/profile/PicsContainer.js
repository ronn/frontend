import React from 'react';
import {FlatGrid} from "react-native-super-grid";
import { FlatList, } from 'react-native';
import PicThumbnail from "./PicThumbnail";
import {ProfileHeader} from "./ProfileHeader";

export const PicsContainer = props =>
    <FlatList
        contentContainerStyle={{alignItems: 'center'}}
        data={props.pics}
        renderItem={({ item, index }) => (
            <PicThumbnail
                index={index}
                url={item.url}
                pics={props.pics}
                username={props.username}
                navigate={props.navigate}
            />
        )}
        keyExtractor={pic => pic.id}
        numColumns={3}
    />


    // (<FlatGrid
    //    contentContainerStyle={{alignItems: 'center'}}
    //    items={props.pics}
    //    renderItem={({ item, index }) => (
    //        <PicThumbnail
    //            index={index}
    //            url={item.url}
    //            pics={props.pics}
    //            username={props.username}
     //           navigate={props.navigate}
    //        />
    //    )}
    ///>)

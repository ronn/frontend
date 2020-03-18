import React, {useEffect, useState} from 'react';
import {BackHandler, ScrollView} from 'react-native';
import Wallpost from './components/Post';
import Post from './model/Post';
import {getJson, post} from '../service/ApiService';
import {useFocusEffect} from "@react-navigation/core";

function HomeScreen() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        getPosts();
    },[]);

    useFocusEffect(
        React.useCallback(() => {
            const onBackPress = () => BackHandler.exitApp()

            BackHandler.addEventListener('hardwareBackPress', onBackPress);

            return () =>
                BackHandler.removeEventListener('hardwareBackPress', onBackPress);
        }, [])
    );

        return (
            <ScrollView>
                {posts.map((post, index) =>
                    <Wallpost
                        key={index + ':postView'}
                        photo={post.photo}
                        userName={post.userName}
                        profilePicUrl={post.profilePicUrl}
                        likePost={likePost}
                        ilikeThisPic={post.ilikeThisPic}
                    />
                )}
            </ScrollView>
        );


    function likePost(pictureID) {
        post('/picture/' + pictureID)
            .then(resp => {
                console.log(resp);
            }).catch(error => alert(error))
    }

    function getPosts() {
        getJson('/posts')
            .then(json => json.map(post => new Post(post)))
            .then(posts => setPosts(posts))
            .catch(error => alert("Error getting posts: " + error))
    }
}

export default HomeScreen;

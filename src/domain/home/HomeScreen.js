import React, {useEffect} from 'react';
import {BackHandler, RefreshControl, Text, View} from 'react-native';
import Wallpost from './components/Post';
import {post} from '../service/ApiService';
import {useFocusEffect} from "@react-navigation/core";
import {KeyboardAvoidingScrollView} from 'react-native-keyboard-avoiding-scroll-view';
import {getPosts, likePost} from "./service/HomeService";
import {useDispatch, useSelector} from "react-redux";
import Request from "../shared/model/Request";
import {styles} from "./style/styles";

export default props => {

    const {posts, postsRequest, errorMessage} = useSelector(state => ({
        posts: state.home.posts,
        postsRequest: state.home.postsRequest,
        errorMessage: state.home.errorMessage
    }));

    const dispatch = useDispatch();

    const [refreshing, setRefreshing] = React.useState(false);

    const wait = timeout => {
        return new Promise(resolve => {
            getPosts();
            setTimeout(resolve, timeout);
        });
    }

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
    }, []);

    const {navigate} = props.navigation;

    useEffect(() => {
        getPosts(dispatch);
    }, []);

    useFocusEffect(
        React.useCallback(() => {
            const onBackPress = () => BackHandler.exitApp()

            BackHandler.addEventListener('hardwareBackPress', onBackPress);

            return () =>
                BackHandler.removeEventListener('hardwareBackPress', onBackPress);
        }, [])
    );

    return (
        Request.SUCCESS === postsRequest ?
            <KeyboardAvoidingScrollView scrollEventThrottle={16}
                                        refreshControl={<RefreshControl refreshing={refreshing}
                                                                        onRefresh={onRefresh}/>}>
                {posts.map((post, index) =>
                <Wallpost
                    navigate={navigate}
                    key={index + ':postView'}
                    photo={post.photo}
                    userName={post.userName}
                    profilePicUrl={post.profilePicUrl}
                    likePost={likePost(dispatch)}
                    commentPost={commentPost}
                    ilikeThisPic={post.ilikeThisPic}
                />
                )}
            </KeyboardAvoidingScrollView>
            :
            Request.ERROR === postsRequest
                ?
                <View style={styles.post}><Text>{"Error getting posts, try again later: " + errorMessage}</Text></View>
                : <View style={styles.post}><Text>{"LOADING..."}</Text></View>
    );

    function commentPost(pictureID, comment) {
        post('/comment/' + pictureID, comment, 'text/plain')
            .then(response => {
                getPosts()
            })
            .catch(error => alert(error))
    }
}

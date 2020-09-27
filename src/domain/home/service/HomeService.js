import {getJson, post} from "../../service/ApiService";
import {errorLikePost, errorPosts, gettingPosts, likeAPost, successLikePost, successPosts} from "../reducer/home";
import Post from "../model/Post";

export const getPosts = dispatch => {
    dispatch(gettingPosts())

    getJson('/posts')
        .then(json => json.map(post => new Post(post)))
        .then(posts => dispatch(successPosts(posts)))
        .catch(error => dispatch(errorPosts(error.message)))
}

export const likePost = dispatch => pictureID => {
    dispatch(likeAPost(pictureID))

    post('/picture/' + pictureID)
        .then(resp => dispatch(successLikePost(pictureID)))
        .catch(error => dispatch(errorLikePost()))
}

export const commentPost = (pictureID, comment) => {
    post('/comment/' + pictureID, comment, 'text/plain')
        .then(response => {
            getPosts()
        })
        .catch(error => alert(error))
}

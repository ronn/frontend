import {getJson, post} from "../../service/ApiService";
import {errorPosts, gettingPosts, successPosts} from "../reducer/home";
import Post from "../model/Post";

export const getPosts = dispatch => {
    dispatch(gettingPosts())

    getJson('/posts')
        .then(json => json.map(post => new Post(post)))
        .then(posts => dispatch(successPosts(posts)))
        .catch(error => dispatch(errorPosts(error.message)))
}

export const likePost = dispatch => pictureID => {
    dispatch(getPosts())
    post('/picture/' + pictureID)
        .then(getPosts())
        .catch(error => alert(error))
}

export const commentPost = (pictureID, comment) => {
    post('/comment/' + pictureID, comment, 'text/plain')
        .then(response => {
            getPosts()
        })
        .catch(error => alert(error))
}

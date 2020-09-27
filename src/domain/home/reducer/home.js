import Request from "../../shared/model/Request";
import {post} from "../../service/ApiService";

const GETTING_POSTS = "GETTING_POSTS"
const ERROR_POSTS = "ERROR_POSTS"
const SUCCESS_POSTS = "SUCCESS_POSTS"

const LIKE_POST = "LIKE_POST"
const ERROR_LIKE_POST = "ERROR_LIKE_POST"
const SUCCESS_LIKE_POST = "SUCCESS_LIKE_POST"

export const gettingPosts = () => ({
    type: GETTING_POSTS
})

export const errorPosts = errorMessage => ({
    type: ERROR_POSTS,
    errorMessage
})

export const successPosts = posts => ({
    type: SUCCESS_POSTS,
    posts
})
export const likeAPost = () => ({
    type: LIKE_POST,
})

export const errorLikePost = () => ({
    type: ERROR_LIKE_POST
})

export const successLikePost = pictureId => {
    return ({
        type: SUCCESS_LIKE_POST,
        pictureId
    })
}

const initialState = {
    posts: [],
    postsRequest: Request.NONE,
    likeRequest: Request.NONE,
    errorMessage: ""
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GETTING_POSTS:
            return {
                ...state,
                postsRequest: Request.PENDING
            }
        case ERROR_POSTS:
            return {
                ...state,
                postsRequest: Request.ERROR,
                errorMessage: action.errorMessage
            }
        case SUCCESS_POSTS:
            return {
                ...state,
                postsRequest: Request.SUCCESS,
                errorMessage: "",
                posts: action.posts
            }
        case LIKE_POST:
            return {
                ...state,
                likeRequest: Request.PENDING,
                errorMessage: "",
            }
        case ERROR_LIKE_POST:
            return {
                ...state,
                likeRequest: Request.ERROR
            }
        case SUCCESS_LIKE_POST:
            return {
                ...state,
                likeRequest: Request.SUCCESS,
                posts: modifyArray(state.posts, action.pictureId)
            }
        default:
            return state
    }
}

const modifyArray = (posts, pictureId) => {
    const picIndex = posts.findIndex(post => {
        return post.photo.id === pictureId
    });
    const likedPicPost = posts[picIndex];

    const updatedPic = { ...likedPicPost, ilikeThisPic: !likedPicPost.ilikeThisPic};

    return [
        ...posts.slice(0, picIndex),
        updatedPic,
        ...posts.slice(updatedPic + 1),
    ];
}
/*{
    ...state,
       ...posts
    1 posts.filte(1).ILike = true
}*/

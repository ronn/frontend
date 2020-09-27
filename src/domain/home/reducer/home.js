import Request from "../../shared/model/Request";

const GETTING_POSTS = "GETTING_POSTS"
const ERROR_POSTS = "ERROR_POSTS"
const SUCCESS_POSTS = "SUCCESS_POSTS"

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

const initialState = {
    posts: [],
    postsRequest: Request.NONE,
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
        default:
            return state
    }
}

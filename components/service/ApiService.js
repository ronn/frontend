import AsyncStorage from '@react-native-async-storage/async-storage';
import {TOKEN_SESSION} from './AuthenticationService';

//const HOST_URL = 'http://172.30.0.139:8080';
export const HOST_URL = 'https://siqpik-dev.herokuapp.com';
export const API_URL = HOST_URL;

export const post = (url, body) => authenticatedRequest(url, 'POST', body);

export const deleteItem = (url, body, contentType) => authenticatedRequest(url, 'DELETE', body, contentType);

export const getJson = url => authenticatedRequest(url, 'GET')
    .then(response => response.json());

export const authenticatedRequest = (url, method, body, contentType) => AsyncStorage.getItem(TOKEN_SESSION)
    .then(token => genericFetch(url, method,
        {
        'Authorization': 'Bearer ' + token,
        'Content-Type': contentType || 'application/json'
        },
        body
    ))

export const genericPost = (url, body) =>
    genericFetch(url, 'POST', {'Content-Type': 'application/json'}, JSON.stringify(body))
        .then(response =>  response.json())


const genericFetch = (url, method, headers, body) => fetch(API_URL + url, {
    method: method,
    headers: headers,
    body: body
}).then(response => handleErrors(response))

function handleErrors(response) {
    if (!response.ok) {
        console.log("Something went wrong: " + JSON.stringify(response))
        throw Error(response.status);
    }
    return response;
}
import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";

export function* watcherSaga() {
    yield takeLatest("API_CALL_REQUEST", workerSaga);   
}

function fetchDog() {
    return axios({
        method: "get",
        url:  "https://dog.ceo/api/breeds/image/random",
    })
}

function* workerSaga() {
    console.log('I ma in saga');
    try {
        const response = yield call(fetchDog);
        const dog = response.data.message;
        yield put({ type: "API_CALL_SUCCESS", dog});

    } catch(err) {
        yield put({ type: "API_CALL_FAILURE", err})
    }
}
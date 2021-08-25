import {takeEvery, put} from 'redux-saga/effects'

function* workerSaga(){
    console.log('hey worker')
    yield put({type: 'ACTION_FROM_WORKER'})
}

// watcher saga
function* rootSaga(){
    yield takeEvery('hello', workerSaga)
}

export default rootSaga
import imagesSaga from './imagesSaga';
import statSaga from './statSaga';
import { all } from 'redux-saga/effects';

// watcher saga --> actions --> worker saga
export default function* rootSaga() {
    yield all([imagesSaga(), statSaga()]);
}

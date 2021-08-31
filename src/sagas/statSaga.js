import { IMAGES } from '../constants';
import { take, fork, put, call } from 'redux-saga/effects';
import { fetchImageStats } from '../api';
import { loadImageStats, setImageStats, setImageStatsError } from '../actions';

function* handleStatRequest(id) {
    for (let i = 0; i < 5; i++) {
        try {
            yield put(loadImageStats(id));
            const res = yield call(fetchImageStats, id);
            yield put(setImageStats(id, res.downloads.total));
            return true;
        } catch (error) {}
        yield put(setImageStatsError(id));
    }
}

export default function* watchStatRequest() {
    while (true) {
        const { images } = yield take(IMAGES.LOAD_SUCCESS);

        for (let i = 0; i < images.length; i++) {
            yield fork(handleStatRequest, images[i].id);
        }
    }
}

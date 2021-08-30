import imagesSaga from './imagesSaga';

// watcher saga --> actions --> worker saga
//worker saga
// function* handleImagesLoad() {
//     console.log('hey worker');
// }

// // watcher saga
// function* rootSaga() {
//     yield takeEvery(IMAGES.LOAD, handleImagesLoad);
// }

export default imagesSaga;

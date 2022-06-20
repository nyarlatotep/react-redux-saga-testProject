import { takeEvery, put, all } from 'redux-saga/effects';



function* getUser () {
	yield put( { type: 'GET' } );
}
function* postUser () {
	yield put( { type: 'POST' } );
}
function* deleteUser () {
	yield put( { type: 'DELETE' } );
}
function* watcherRequest () {
	yield takeEvery( 'GET_METHOD', getUser );
	yield takeEvery( 'POST_METHOD', postUser );
	yield takeEvery( 'DELETE_METHOD', deleteUser );
}

export default function* rootSaga () {
	yield all( [
		watcherRequest(),
	] );
}
import { applyMiddleware, createStore } from 'redux';
import { addUser, delUser, getUser } from '../api/api'
import CreateSagaMiddleware from 'redux-saga';


export default function configureStore ( initialState ) {
	const sagaMiddleware = CreateSagaMiddleware();
	return {
		...createStore(
			reducer, initialState,
			applyMiddleware( sagaMiddleware ) ),
		runSaga: sagaMiddleware.run
	}
}

export const value = ( val ) => val;
export function reducer ( state = { user: '', email: '', phone: '' }, action ) {
	switch ( action.type ) {
		case 'GET':
			var get = `
				Name: ${ state.user += getUser( value ).name }
				Email: ${ state.email += getUser( value ).mail }
				Phone: ${ state.phone += getUser( value ).phone }
`
			return get.toString();
		case 'POST':
			return addUser( value );
		case 'DELETE':
			return delUser( value );
		default:
			return state;
	};
}
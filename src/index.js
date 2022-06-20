import React from 'react';
import ReactDOM from 'react-dom/client';
import { UserIndexer } from './App';
import configureStore from './redux-saga/reducer';
import rootSaga from './redux-saga/saga';

const store = configureStore();
store.runSaga( rootSaga );

const action = type => store.dispatch( { type } )

const root = ReactDOM.createRoot(
	document.getElementById( 'root' ) );
root.render(
	<React.StrictMode>
		<div style={ {
			border: '3px #98a ridge',
			borderRadius: '35px',
			width: '750px',
			alignContent: 'center',
			justifyContent: 'space-evenly',
			display: 'flex',
			flexFlow: 'column nowrap',
			position: 'fixed',
			top: 'calc(900px/8)',
			left: 'calc(1400px / 4)',
			backgroundColor: 'rgb(115 115 115 / 85%)',
			color: '#eee'
		} }>
			<h2 style={ { textAlign: 'center' } }>
				User Indexer
			</h2>
			<UserIndexer
				getUser={ () => action( 'GET' ) }
				addUser={ () => action( 'POST' ) }
				delUser={ () => action( 'DELETE' ) } />
		</div>
	</React.StrictMode>
);

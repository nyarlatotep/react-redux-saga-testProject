import React from 'react';
import { Remarkable } from 'remarkable';
import { getUser, addUser, delUser } from './api/api';

import { value } from './redux-saga/reducer'


export class UserIndexer extends React.Component {
	constructor ( props ) {
		super( props );

		this.state = { id: '', user: '', email: '', phone: '', };
		this.md = new Remarkable();
	}

	handleId ( ev ) {
		var target = ev.target;
		var value = target.value;
		this.setState( { id: value } );
	};
	handleName ( ev ) {
		var target = ev.target;
		var value = target.value;
		this.setState( { user: value } );
	};
	handleMail ( ev ) {
		var target = ev.target;
		var value = target.value;
		this.setState( { email: value } );
	};
	handlePhone ( ev ) {
		var target = ev.target;
		var value = target.value;
		this.setState( { phone: value } );
	};

	get_raw () {
		var value = `
		Id: ${ this.state.id } 
		Name: ${ this.state.user }
		Email: ${ this.state.email }
		Phone: ${ this.state.phone } `

		return { __html: this.md.render( value ) };
	}

	render () {
		var user = { id: this.state.id, name: this.state.user, mail: this.state.mail, phone: this.state.phone };
		value( user );
		return (
			<form style={ { display: 'flex', flexFlow: 'column wrap', justifyContent: 'space-between', alignContent: 'center' } }>
				<section>
					<fieldset style={ { width: '350px', border: '4px #555 groove' } } >
						<samp dangerouslySetInnerHTML={ this.get_raw() } />
					</fieldset>
				</section>

				<section style={ { marginBlock: '15px 20px' } }>
					<p>
						<label htmlFor='ident' style={ { marginInline: '-10px 30px' } }>
							<strong>Id:</strong>
						</label>
						<input type='text' name='id'
							id='ident'
							onChange={ ( e ) => this.handleId( e ) } />
						{ ' ' }
						<label htmlFor='name' style={ { marginInline: '10px 5px' } }>
							<strong>Name:</strong>
						</label>
						<input type='text' name='name'
							id='name'
							onChange={ ( e ) => this.handleName( e ) } />
					</p>

					<p>
						<label htmlFor='mail' style={ { marginInline: '-10px 5px' } }>
							<strong>Email:</strong>
						</label>
						<input type='email' name='mail'
							id='name'
							onChange={ ( e ) => this.handleMail( e ) } />
					</p>

					<p style={ { marginBlock: '0px 30px' } }>
						<label htmlFor='phone' style={ { marginInline: '-10px 5px' } }>
							<strong>Phone:</strong>
						</label>
						<input type='text' name='name'
							id='name' ref={ this.phone }
							onChange={ ( e ) => this.handlePhone( e ) } />
					</p>
					<Buttons id={ this.state.id } user={ this.state.user } mail={ this.state.email } phone={ this.state.phone } />
				</section>
			</form >
		);
	};
}

function Buttons ( props ) {
	var user = {
		id: props.id,
		name: props.user,
		mail: props.mail,
		phone: props.phone,
	};

	return (
		<p style={ { marginInline: '75px -50px' } }>
			<button style={ { borderRadius: '15px' } }
				type='button' name='GET'
				onClick={ () => getUser( user ) }>
				View User
			</button>
			{ ' ' }
			<button style={ { borderRadius: '15px' } }
				type='button' name='POST'
				onClick={ () => addUser( user ) }>
				Create User
			</button>
			{ ' ' }
			<button style={ { borderRadius: '15px' } }
				type='button' name='DELETE'
				onClick={ () => delUser( user ) }>
				Delete User
			</button>
		</p>
	)
}
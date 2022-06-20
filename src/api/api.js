const users = {
	"version": "1.0",
	"name": "usersAPI",
	"base_url": "http://localhost:9966/api",
	"/user": [
		{
			"id": '1',
			"name": "Juan Pérez",
			"mail": "juanprz@example.com",
			"phone": "+52 212 1234567"
		},
		{
			"id": '2',
			"name": "Sergio Ruíz",
			"mail": "sergiorz@example.com",
			"phone": "+52 212 2244668"
		},
		{
			"id": '3',
			"name": "María Hernández",
			"mail": "mariahdz@example.com",
			"phone": "+52 212 9756842"
		},
		{
			"id": '4',
			"name": "Pedro Fernández",
			"mail": "pedrofdz@example.com",
			"phone": "+52 212 1356801"
		},
		{
			"id": '5',
			"name": "Ana Sánchez",
			"mail": "anaschz@example.com",
			"phone": "+52 212 6543210"
		}
	]
}

let value = [];
var usr = users[ '/user' ];
var aside = document.createElement( 'aside' )
var result = document.body;

export function getUser ( values ) {
	let string;
	var user = usr.find( val => val.name.match( values.name ) ), mail = usr.find( val => val.mail.match( values.mail ) ), Id = usr.find( val => val.id.match( values.id ) );
	if ( Id === undefined ) {
		alert( "Error! The user doesn't exist. Please create the user or try search another user" );
		if ( user === undefined ) {
			alert( "Error! The user doesn't exist. Please create the user or try search another user" );
			if ( mail === undefined )
				alert( "Error! The user doesn't exist. Please create the user or try search another user" );
			else {
				string = `
	RESULT:
		Id: ${ mail.id }
		Name: ${ mail.name };
		Email: ${ mail.mail };
		Phone: ${ mail.phone }
`
				aside.innerHTML = string;
				console.log( mail );
				result.appendChild( aside );
			};
		}
		else {
			string = `
	RESULT:
		Id: ${ user.id }
		Name: ${ user.name };
		Email: ${ user.mail };
		Phone: ${ user.phone }
`
			aside.innerHTML = string;
			console.log( user );
			result.appendChild( aside );
		};
	}
	else {
		string = `
	RESULT:
		Id: ${ Id.id }
		Name: ${ Id.name };
		Email: ${ Id.mail };
		Phone: ${ Id.phone }
`
		aside.innerHTML = string;
		console.log( Id );
		result.appendChild( aside );
	}
	return string;
}

export function addUser ( values ) {
	let num = [];
	for ( let i = 0; i < usr.length; i++ ) { num.push( usr.length ) };
	var ind = num.pop();
	var data = { id: ind + 1, name: values.name, mail: values.mail, phone: values.phone };
	var usrs = usr.concat( data );
	for ( let i = 0; i < usrs.length; i++ ) {
		var p = document.createElement( 'p' );
		var p2 = document.createElement( 'p' );
		var p3 = document.createElement( 'p' );
		var p4 = document.createElement( 'p' );
		p.innerHTML = `Id: ${ usrs[ i ].id }.`
		p2.innerHTML = `Name: ${ usrs[ i ].name }.`
		p3.innerHTML = `Email: ${ usrs[ i ].mail }.`
		p4.innerHTML = `Phone: ${ usrs[ i ].phone }.`
	};
	aside.appendChild( p );
	aside.appendChild( p2 );
	aside.appendChild( p3 );
	aside.appendChild( p4 );
	result.appendChild( aside );
	console.log( usrs );
	alert( 'Success! The user has been created.' )
	return usrs;
};

export function delUser ( values ) {
	var usrs = usr.filter( val => val = val.id !== values.id );
	for ( let i = 0; i < usrs.length; i++ ) {
		value.push( `
		Id: ${ usrs[ i ].id }
		Name: ${ usrs[ i ].name }
		Email: ${ usrs[ i ].mail }
		Phone: ${ usrs[ i ].phone }
` );
	};
	aside.innerHTML = value;
	console.log( usrs );
	result.appendChild( aside );
	return usrs;
}
const mysql = require('mysql');

const conexion = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'gestion'
});

conexion.connect((error)=>{
	if (error) {
		console.error('el error de conexion es:  '+error);
		return
	}
	console.log('conectado a la BD MYSQL!')
})

module.exports = conexion;
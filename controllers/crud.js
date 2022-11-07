const conexion = require('../database/db');

exports.save = (req, res)=>{
	const fecha = req.body.fecha;
	const feria = req.body.feria;
	const combustible = req.body.combustible;
	const alquileres = req.body.alquileres;
	const luz = req.body.luz;
	const empleados = req.body.empleados;
	const ventas = req.body.ventas;

	conexion.query('INSERT INTO sic SET ?',{fecha:fecha, feria:feria, combustible:combustible, alquileres:alquileres, luz:luz, empleados:empleados,ventas:ventas}, (error, results)=>{
		if (error) {
			console.log(error);
		}else{
			res.redirect('/avanzado');
		}
	})
}

exports.update = (req, res)=>{
	const id = req.body.id;
	const fecha = req.body.fecha;
	const feria = req.body.feria;
	const combustible = req.body.combustible;
	const alquileres = req.body.alquileres;
	const luz = req.body.luz;
	const empleados = req.body.empleados;
	const ventas = req.body.ventas;

	conexion.query('UPDATE sic SET ? WHERE id = ?', [{fecha:fecha, feria:feria, combustible:combustible, alquileres:alquileres, luz:luz, empleados:empleados,ventas:ventas}, id], (error, results)=>{
		if (error) {
			console.log(error);
		}else{
			res.redirect('/avanzado');
		}
	})
}
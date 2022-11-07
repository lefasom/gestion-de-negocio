const express = require('express');
const router = express.Router();

const conexion = require('./database/db');

router.get('/', (req, res)=>{
	// res.render('index',{var1:'HOLA GENTE'});
	conexion.query('SELECT * FROM  sic ',(error,results)=>{
		if (error) {
			throw error;
		}else{
			// res.send(results)
			res.render('index',{results:results});
		}

	})
})
router.get('/avanzado', (req, res)=>{
	// res.render('index',{var1:'HOLA GENTE'});
	conexion.query('SELECT * FROM  sic ',(error,results)=>{
		if (error) {
			throw error;
		}else{
			// res.send(results)
			res.render('avanzado',{results:results});
		}

	})
})


router.post('/ea', (req, res)=>{
	// res.render('index',{var1:'HOLA GENTE'});
	const desde = req.body.desde || "vacio";
	const hasta = req.body.hasta || "vacio";

	res.send(`    

<style type="text/css">
  h1{
    padding: 20px;
    color:#ff9900 ;
    font-family: sans-serif;
    letter-spacing: 2px;
    font-size: 49px;
  }
   nav{
    
    display: flex;
    padding: 6px;
    flex-direction: column;
    justify-content:;
    font-family: monospace;

  }
  nav a{
    text-decoration: none;
    color: #fff;
    padding: 10px;
     transition: all 200ms ease;
     font-size: 25px;
  }
  nav div{
    background: #67dd;
    padding: 5px;
    border-radius: 20px;
    margin: 1px;
    transition: all 200ms ease;
  }
  nav div:hover{
    background: #dde;
  
  }
  nav div:hover a{
    color: #67dd;
  }


</style>

 <body style="background-color:midnightblue;">
	
		<h1> Procesar calculos desde: ${desde} hasta: ${hasta} ?</h1>
<nav>

       <div><a  href="/ea/${desde}/${hasta}">Procesar</a></div>
        <div ><a  href="/ea">Cancelar</a></div>

</nav>

		


</body>



		`)

})

router.get('/ea', (req, res)=>{
	// res.render('index',{var1:'HOLA GENTE'});
	conexion.query("SELECT * FROM  sic  WHERE fecha>=? AND fecha<=?",["vacio","vacio"],(error,results)=>{
		if (error) {
			throw error;
		}else{
			// res.send(results)
			res.render('ea',{results:results});
		}

	})
})
router.get('/ea/:dato1/:dato2', (req, res)=>{
		const dato1 = req.params.dato1;
		const dato2 = req.params.dato2;

	conexion.query("SELECT * FROM  sic  WHERE fecha>=? AND fecha<=?",[dato1,dato2],(error,results)=>{
		if (error) {
			throw error;
		}else{
			// res.send(results)
			res.render('ea',{results:results});
		}

	})
})




// RUTA PARA CREAR REGISTROS

router.get('/create', (req, res)=>{
	
	res.render('create');
	
})

// RUTA PARA EDITAR REGISTROS

router.get('/edit/:id', (req, res)=>{
	const id = req.params.id;
	conexion.query('SELECT * FROM sic WHERE id=?',[id],(error,results)=>{
		if (error) {
			throw error;
		}else{
			// res.send(results)
			res.render('edit',{sic:results[0]});
		}

	})

})


router.get('/inventario', (req, res)=>{
	
			res.render('inventario');
		
})
router.get('/cotisar', (req, res)=>{
	
			res.render('cotisar');
		
})

// RUTA PARA ELIMINAR REGISTROS

router.get('/delete/:id', (req, res)=>{
	const id = req.params.id;
	conexion.query('DELETE FROM sic WHERE id=?',[id],(error,results)=>{
		if (error) {
			throw error;
		}else{
			
			res.redirect('/avanzado');
		}

	})

})



const crud = require('./controllers/crud');

router.post('/save', crud.save);

router.post('/update', crud.update);

module.exports = router; 
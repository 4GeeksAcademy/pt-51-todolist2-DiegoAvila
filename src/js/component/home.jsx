import React, { useState} from "react";

//create your first component
const Home = () => {
	
	const [entrada, setEntrada] = useState ("")
	const [contenido, setContenido] = useState ([])
	const [hoverIndex, setHoverIndex] = useState (null)
 
	function capturarEntrada(event) {
		setEntrada(event.target.value)
	}
	function capturarContenido(event) {
		if (event.keyCode===13 && entrada!= ""){
			setContenido(contenido.concat(entrada))
		}	
	}
	const mostrarBoton = (index) =>{
		console.log("hola");
		setHoverIndex(index)
	}
	const ocultarBoton = () =>{
		setHoverIndex(null)
	}
	const eliminarDato = (index) => { 
		setContenido(contenido.filter((elemento,i) => i !== index))
	}
	const listaContenido = contenido.map((elemento, index) =>
		<li key={index} className="list-group-item border-bottom">
			<div className="d-flex justify-content-between py-1" onMouseEnter={() => mostrarBoton(index)} onMouseLeave={ocultarBoton}>
				{elemento}
				<button type="button" className={`btn py-0 ${hoverIndex===index ? "d-flex" : "d-none"}`} onClick={() => eliminarDato(index)} >x</button>
			</div>
  	 	</li>
	 );
	 const actualizacionContenido =  () =>{
		return contenido.length
	 }
	 const sinContenido = ()  =>{
		return actualizacionContenido() === 0 ? "Sin contenido, añadelo pulsando enter" : ""

	 }
	return (

		<div className="w-50 mx-auto mt-5" onKeyDown={capturarContenido} >
			<h1 className="text-center w-50 mx-auto">Lista de Tareas</h1>
			<input type="text" className="form-control mx-auto" onChange={capturarEntrada} />
			<p className="text-center w-50 mx-auto">{sinContenido()}</p>
			<ul className="list-group-flush border-end m-3">
				{listaContenido}
				<li className="list-group-item border-bottom">Tienes {actualizacionContenido()} items</li>
	  		</ul>
		</div>
		
	);
};

export default Home;

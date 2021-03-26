import { List,Grid} from '@material-ui/core';
import React, { Fragment ,useState} from 'react';
import './App.css';
<<<<<<< HEAD
<<<<<<< HEAD
import Carrito from './components/Carrito/Carrito';
=======
import Carrito from './components/Carrito';
>>>>>>> 6138542023c40b2fb3194e56edfd3102e3a5f643
=======
import Carrito from './components/Carrito';
>>>>>>> 6138542023c40b2fb3194e56edfd3102e3a5f643
import Footer from './components/Footer';
import Header from './components/Header';
import Producto from './components/Producto';

function App() {

  
  //Crear listado de productos anunciantes
  const[productos,guardarProductos] = useState([
    {id:1, nombre:'Camisa con ReactJs', precio: 50},
    {id:2, nombre:'Camisa con NodeJs',  precio: 40},
    {id:3, nombre:'Camisa con JS',      precio: 30},
    {id:4, nombre:'Camisa con Angular', precio: 20},
  ]);

  // State para un carrito de compras
  const [carrito, agregarProducto] = useState([]);

  //variable para obtener el año en abreviatura
  const fecha=new Date().getFullYear();
  return (        
    <Fragment>
      <Header titulo="Prueba header 2"></Header>
        
      <Grid container spacing={3} alignItems="center" justify="center">              
        <Grid item xs={3} >
          <List>
          {productos.map(producto=>(                 
<<<<<<< HEAD
<<<<<<< HEAD
            <Producto key={producto.id} producto={producto} productos={productos} carrito={carrito} agregarProducto={agregarProducto} imagen="https://source.unsplash.com/random"/>
            
            ))}
          </List>
          </Grid>                         
       </Grid>

       <Grid container spacing={3} alignItems="center" justify="center">
         <Grid item xs={6} justify="center">
           <Carrito></Carrito>
=======
            <Producto key={producto.id} producto={producto} productos={productos} carrito={carrito} agregarProducto={agregarProducto} imagen="https://source.unsplash.com/random"/>            
            ))}
          </List>
          </Grid>                         
      
         <Grid item xs={6} justify="center">
           <Carrito carrito={carrito}></Carrito>
>>>>>>> 6138542023c40b2fb3194e56edfd3102e3a5f643
=======
            <Producto key={producto.id} producto={producto} productos={productos} carrito={carrito} agregarProducto={agregarProducto} imagen="https://source.unsplash.com/random"/>            
            ))}
          </List>
          </Grid>                         
      
         <Grid item xs={6} justify="center">
           <Carrito carrito={carrito}></Carrito>
>>>>>>> 6138542023c40b2fb3194e56edfd3102e3a5f643
         </Grid>
       </Grid>
       <Footer fecha={fecha}></Footer>
    </Fragment>
  );
}

export default App;

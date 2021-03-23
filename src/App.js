import { List,Grid} from '@material-ui/core';
import React, { Fragment ,useState} from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Producto from './components/Producto';

function App() {

  const[productos,guardarProductos] = useState([
    {id:1, nombre:'Camisa con ReactJs', precio: 50},
    {id:2, nombre:'Camisa con NodeJs',  precio: 40},
    {id:3, nombre:'Camisa con JS',      precio: 30},
    {id:4, nombre:'Camisa con Angular', precio: 20},
  ]);
  const fecha=new Date().getFullYear();
  return (        
    <Fragment>
      <Header titulo="Prueba header 2"></Header>
        
      <Grid container spacing={3} alignItems="center" justify="center">              
        <Grid item xs={8} >
          <List>
          {productos.map(producto=>(                 
            <Producto producto={producto} imagen="https://source.unsplash.com/random"/>
            
            ))}
          </List>
          </Grid>                   
      
       </Grid>
       <Footer fecha={fecha}></Footer>
    </Fragment>
  );
}

export default App;

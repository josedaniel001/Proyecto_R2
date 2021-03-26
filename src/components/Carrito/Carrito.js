<<<<<<< HEAD
import { Typography } from '@material-ui/core'
import React from 'react'

const Carrito = () => {
    return (
        <div>
        <Typography variant="h5" color="textPrimary" display="inline" align="center">Tu carrito de compras: </Typography>
=======
import { Typography, Grid, List, ListItem, Divider, ListItemAvatar,Avatar,ListItemText,ListItemSecondaryAction,Button,Icon} from '@material-ui/core'
import {BsFillTrashFill} from "react-icons/bs";
import React from 'react'
import './Carrito.css'

const Carrito = ({carrito}) => {
    return (
        <div className="carrito">
        <Typography variant="h5" color="textPrimary"  align="center">Tu carrito de compras: </Typography>    
        <Grid container spacing={1} direction="row" alignItems="center" justify="center">            
        <List dense>
         {carrito.map(carro=>(
           <ListItem key={carro.id.toString()}>
             <ListItemAvatar>
              <Avatar
                alt={`Avatar n°${carro.id}`}
                src="https://source.unsplash.com/random"
              />
            </ListItemAvatar>
            <ListItemText id={`Text${carro.id}`} primary={`Producto: ${carro.nombre}`} secondary={` Precio: Q. ${carro.precio}`} />
            <ListItemSecondaryAction>
            <Button variant="outlined" color="secondary"                        
                       onClick={()=>{}}><Icon><BsFillTrashFill></BsFillTrashFill></Icon></Button>
            </ListItemSecondaryAction>
           <Divider variant="inset" component="li" />           
           </ListItem>
           
         ))}
        </List>
        </Grid>    
>>>>>>> 6138542023c40b2fb3194e56edfd3102e3a5f643
        </div>
    )
}

export default Carrito

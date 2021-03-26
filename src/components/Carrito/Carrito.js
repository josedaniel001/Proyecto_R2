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
        </div>
    )
}

export default Carrito

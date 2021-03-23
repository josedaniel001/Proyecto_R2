import { Avatar, ListItem, ListItemAvatar, ListItemText, Typography, Divider, Button } from '@material-ui/core'
import {BsPlusCircleFill} from "react-icons/bs";
import React, {Fragment} from 'react'

const Producto = ({producto, imagen}) => {
    const {nombre,precio,id}=producto
    return (               
        <Fragment>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                 <Avatar alt="Photo Tuya" src={imagen}></Avatar>
                </ListItemAvatar>
                <ListItemText primary={<Typography color="error" display="inline" >{nombre}</Typography>} 
                secondary={
                    <React.Fragment>
                      <Typography align="left"  variant="body2"   display="inline"  color="textSecondary">{`No.Id: ${id}        `}</Typography> 
                      <Button variant="outlined" color="secondary" endIcon={<BsPlusCircleFill></BsPlusCircleFill>}>{`Precio : Q. ${precio}.00`}</Button>
                    </React.Fragment>
                  }
                />
            </ListItem>
             <Divider variant="inset" component="li" />                    
       </Fragment>
    )
}

export default Producto

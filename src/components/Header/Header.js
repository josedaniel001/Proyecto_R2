import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'

const Header = ({titulo,rutaicono}) => {
    return (        
        <AppBar position="static" color="white">
          <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">    
            <img src="https://tse.org.gt/images/logo_TSE_-_PNG_TRANSPARENTE_-_200_DPI.png" height={60}></img>      
            </IconButton>          
            <Typography variant="h5" className="encabezado">
              {titulo}
            </Typography>
          </Toolbar>
        </AppBar>        
    )
}

export default Header

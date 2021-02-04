import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button'
import MenuIcon from '@material-ui/icons/Menu';
import withStyles from '@material-ui/core/styles/withStyles';
import { Link, withRouter } from 'react-router-dom'

import firebase from '../firebase'

const styles = makeStyles({
    bar: {
        backgroundColor: '#6d1b7b',
        boxShadow: "0px 0px 0px 0px"
    }
})

function Navbar(props) {
    const classes = styles();


    if (window.location.pathname==="/" || window.location.pathname === "/register"){
        return false;
    } 

    return(
        <AppBar position="static" className={classes.bar}>
            <Toolbar>
                <IconButton edge="start"  color="inherit" aria-label="menu">
                <MenuIcon />
                </IconButton>
                <Typography variant="h6" >
                News
                </Typography>
                <Button 
                    color="inherit"
                    type="submit"
                    onClick = {onlogout}>
                    salir
                </Button>
            </Toolbar>
        </AppBar>
    )

    function onlogout() {
        try {
            firebase.logout()
            props.history.push('/')
        } catch (err) {
            alert(err.message)
        }
    }
}


export default withStyles(styles)(Navbar);
import React, { useState } from 'react'
import { Typography, Paper, Avatar, Button, FormControl, Input, InputLabel, MenuItem, Select } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles'
import { Link, withRouter } from 'react-router-dom'
import firebase from '../firebase'

const styles = theme => ({
    main: {
        width: 'auto',
        display: 'block', // Fix IE 11 issue.
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
            width: 400,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing.unit * 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },
    avatar: {
        margin: theme.spacing.unit,
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing.unit,
    },
    submit: {
        marginTop: theme.spacing.unit * 3,
    },
    root: {        
        height: "100vh",
        backgroundImage:"url('https://raw.githubusercontent.com/Stoozy/dotfiles/master/wall.jpg') ",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    }
})

function Register(props) {
    const { classes } = props

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [rol, setRol] = useState('');
    const [open, setOpen] = useState(false);

    const handleChange = (event) => {
        setRol(event.target.value);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
    
      const handleOpen = () => {
        setOpen(true);
      };

    function onSubmit(e) {
        e.preventDefault()
    }

    return (
        <Grid className={classes.root} container>
             <main className={classes.main}>
                <Paper className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Register Account
                    </Typography>
                    <form className={classes.form} onSubmit = {onSubmit}>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="name">Name</InputLabel>
                            <Input id="name" name="name" autoComplete="off" autoFocus value = {name} onChange = {e => setName(e.target.value)}/>
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="email">Email Address</InputLabel>
                            <Input id="email" name="email" autoComplete="off"  value = {email} onChange = {e => setEmail(e.target.value)}/>
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <Input name="password" type="password" id="password" autoComplete="off"  value = {password} onChange = {e => setPassword(e.target.value)}/>
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel id="demo-controlled-open-select-label">Age</InputLabel>
                            <Select
                            labelId="demo-controlled-open-select-label"
                            id="demo-controlled-open-select"
                            open={open}
                            onClose={handleClose}
                            onOpen={handleOpen}
                            value={rol}
                            onChange={handleChange}
                            >
                            <MenuItem value={10}>Admin</MenuItem>
                            <MenuItem value={20}>User</MenuItem>
                            <MenuItem value={30}>Paciente</MenuItem>
                            </Select>
                        </FormControl>

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            onClick = {onRegister}
                            className={classes.submit}>
                            Register
                        </Button>

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="secondary"
                            component = {Link}
                            to = "/"
                            className={classes.submit}>
                            Go back to Login
                        </Button>
                    </form>
                </Paper>
            </main>
        </Grid>
       
    )

    async function onRegister() {
        try {
            await firebase.register(name, email, password,)
            props.history.replace('/dashboard')
        } catch (err) {
            alert(err.message)
        }
    }
}

export default withRouter(withStyles(styles)(Register))
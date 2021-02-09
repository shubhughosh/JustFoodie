import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {AppBar,Toolbar,Typography,Button,Divider} from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import { yellow } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    brand: {
        margin: 0,
        position: 'absolute',
        left: '47%',
    },
    logo: {
        margin: 0,
        position: 'absolute',
        left: '43.3%',
        width: '40px',
        marginRight: '10px',
    },
    link: {
        flexGrow: 1,
    },
    label: {
        flexDirection: 'column',
        marginTop: '9px',
        textTransform: "capitalize",
        marginRight: "10px"
    },
}));


export default function Header(){
    const classes = useStyles();
    return (
        <React.Fragment>
            <div className={classes.root}>
            <AppBar position="static" elevation={0}>
                <Toolbar>
                <div className={classes.link}>
                    <Button color="inherit" classes={{ label: classes.label }}>
                        <Icon className="fas fa-keyboard" fontSize="small"/>
                        <small>Keyboard</small>
                    </Button>
                    <Button classes={{ label: classes.label }} style={{background: '#e67e22', color: "white",borderRadius: "0px"}}>
                        <Icon className="fas fa-utensils" fontSize="small"/>
                        <small>Take many</small>
                    </Button>
                    <Button color="inherit" classes={{ label: classes.label }}>
                        <Icon className="fas fa-shopping-bag" fontSize="small"/>
                        <small>Take many</small>
                    </Button>
                    <Button color="inherit" classes={{ label: classes.label }}>
                        <Icon className="fas fa-truck" fontSize="small" style={{width: "35px"}}/>
                        <small>delivery</small>
                    </Button>
                </div>
                <img src="https://image.flaticon.com/icons/png/512/900/900853.png" className={classes.logo}/>
                <Typography variant="h6" className={classes.brand}>
                    JUST FOODIE
                </Typography>
                    <Button color="inherit" classes={{ label: classes.label }}>
                        <Icon className="fas fa-sync-alt" fontSize="small"/>
                        <small>New</small>
                    </Button>
                    <Button color="inherit" classes={{ label: classes.label }}>
                        <Icon className="fab fa-jedi-order" fontSize="small"/>
                        <small>K.O.T</small>
                    </Button>
                    <Button color="inherit" classes={{ label: classes.label }}>
                        <Icon className="fas fa-cog" fontSize="small"/>
                        <small>Setting</small>
                    </Button>
                    <Button color="inherit" classes={{ label: classes.label }}>
                        <Icon className="fas fa-sign-out-alt" fontSize="small"/>
                        <small>Logout</small>
                    </Button>
                </Toolbar>
            </AppBar> 
            </div>
        </React.Fragment>
    );
}
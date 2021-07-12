import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import NavBar from "../components/NavBar";
import Typography from "@material-ui/core/Typography";

const style = theme => ({
    main: {
        backgroundColor: '#ffffff',
        minHeight: '100%',
        position: 'absolute',
        width: '100%',
        left: 0,
        top: 0
    },
    navBar: {
        backgroundColor: 'transparent',
        boxShadow: '0 0 0 0',
        padding: '20px',
    },
    wrapper: {
        padding: '100px 35px 35px 35px',
        [theme.breakpoints.down("xs")]: {
            padding: "10px 10px"
        },
        margin: '25px 25px'
    },
    footer: {
        textAlign: 'center',
        alignItems: 'center',
        width: '100%',
        color: '#FFFFFF',
        height: '30px',
        backgroundColor: '#000000',
        position: 'fixed',
        bottom: 0
    },
})

class TeamPage extends Component {
    render() {
        const {classes} = this.props;

        return (
            <div className={classes.main}>
                <NavBar className={classes.navBar} />
                <div className={classes.wrapper}>

                </div>
                <footer className={classes.footer} >
                    <Typography variant="body2" component="p" style={{marginTop: 5}}>
                        Copyright © <a href={'https://github.com/Cheungki/KnowABall'} style={{color: 'black'}}>G07</a> @Zhejiang University. All Rights Reserved.
                    </Typography>
                </footer>
            </div>
        )
    }
}

export default withStyles(style)(TeamPage);
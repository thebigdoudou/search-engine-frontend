import React, {Component} from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';



function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3} style={index===1?{paddingBottom:'8px',paddingTop:'13px'}:{paddingTop:'0',paddingBottom:'13px'}}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const style = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
    rationRoot: {
        '&:hover': {
            backgroundColor: 'transparent',
        },
    },
    icon: {
        borderRadius: '50%',
        width: 16,
        height: 16,
        boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
        backgroundColor: '#f5f8fa',
        backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
        '$root.Mui-focusVisible &': {
            outline: '2px auto rgba(19,124,189,.6)',
            outlineOffset: 2,
        },
        'input:hover ~ &': {
            backgroundColor: '#ebf1f5',
        },
        'input:disabled ~ &': {
            boxShadow: 'none',
            background: 'rgba(206,217,224,.5)',
        },
    },
    checkedIcon: {
        backgroundColor: '#137cbd',
        backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
        '&:before': {
            display: 'block',
            width: 16,
            height: 16,
            backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
            content: '""',
        },
        'input:hover ~ &': {
            backgroundColor: '#106ba3',
        },
    },
});



class TablePanel extends Component {

    state = {
        tabValue: 0,
        type: "all",
        player: {
            foot: "all",
            role: "all",
            country: "all",
            age: "-1",
            sort: "-1"
        },
        news: {
            sort: "-1"
        },
        team: {
            country: "all"
        }
    }

    handleTabChange = (event, newValue) => {
        this.setState({
            tabValue: newValue
        },()=> {
            this.props.changeCatalog(this.state)
        })
    }

    selectHandleChange = (event) => {
        this.setState({
            type: event.target.value
        },()=> {
            this.props.changeCatalog(this.state)
        })
    }

    footChange = (event) => {
        const tmp = this.state.player
        this.setState({
            player: {
                foot: event.target.value,
                role: tmp.role,        // ?????? ?????? ?????? ?????? ??????  all ??????
                country: tmp.country,      // ?????? ????????? ?????? ?????? ????????? ????????? ?????? ????????? ?????????   ???all ??????
                age: tmp.age,             // <20  20-25  25-30  >30  ???-1 0 1 2
                sort: tmp.sort
            }
        },()=> {
            this.props.changeCatalog(this.state)
        })
    }

    roleChange = (event) => {
        const tmp = this.state.player
        this.setState({
            player: {
                foot: tmp.foot,
                role: event.target.value,
                country: tmp.country,
                age: tmp.age,
                sort: tmp.sort
            }
        },()=> {
            this.props.changeCatalog(this.state)
        })
    }

    playerCountryChange = (event) => {
        const tmp = this.state.player
        this.setState({
            player: {
                foot: tmp.foot,
                role: tmp.role,
                country: event.target.value,
                age: tmp.age,
                sort: tmp.sort
            }
        },()=> {
            this.props.changeCatalog(this.state)
        })
    }

    ageChange = (event) => {
        const tmp = this.state.player
        this.setState({
            player: {
                foot: tmp.foot,
                role: tmp.role,
                country: tmp.country,
                age: event.target.value,
                sort: tmp.sort
            }
        },()=> {
            this.props.changeCatalog(this.state)
        })
    }

    playerSortChange = (event) => {
        const tmp = this.state.player
        this.setState({
            player: {
                foot: tmp.foot,
                role: tmp.role,
                country: tmp.country,
                age: tmp.age,
                sort: event.target.value
            }
        },()=> {
            this.props.changeCatalog(this.state)
        })
    }

    newsSortChange = (event) => {
        this.setState({
            news: {
                sort: event.target.value
            }
        },()=> {
            this.props.changeCatalog(this.state)
        })
    }

    teamCountryChange = (event) => {
        this.setState({
            team: {
                country: event.target.value
            }
        },()=> {
            this.props.changeCatalog(this.state)
        })
    }

    render() {
        const {classes} = this.props
        const {tabValue, type, player, news, team} = this.state

        return (
            <div className={classes.root}>
                <AppBar position="static" style={{backgroundColor: "rgb(255,255,255)", color: "rgb(0,0,0)"}}>
                    <Tabs indicatorColor="primary" value={tabValue} onChange={this.handleTabChange} aria-label="simple tabs example">
                        <Tab style={{width: '15%'}} label="????????????" {...a11yProps(0)} />
                        <Tab style={{width: '15%'}} label="????????????" {...a11yProps(1)} />
                    </Tabs>
                </AppBar>
                <AppBar position="static" style={{backgroundColor: "rgb(255,255,255)", color: "rgb(0,0,0)"}}>
                    <TabPanel value={tabValue} index={1}>
                        <FormControl component="fieldset" style={{display: 'inline-block'}}>
                            <div style={{display: 'flex', alignItems: 'center'}}>
                                <FormLabel component="legend"
                                           style={{display: 'inline-block', marginRight: '50px'}}>??????</FormLabel>
                                <RadioGroup aria-label="gender" name="gender1" value={type}
                                            style={{display: 'inline-block'}} onChange={this.selectHandleChange}>
                                    <FormControlLabel value="all" control={<Radio color="primary" />} label="??????"/>
                                    <FormControlLabel value="player"control={<Radio color="primary" />} label="??????"/>
                                    <FormControlLabel value="team" control={<Radio color="primary" />} label="??????"/>
                                    <FormControlLabel value="news" control={<Radio color="primary" />} label="??????"/>
                                </RadioGroup>
                            </div>
                        </FormControl>
                    </TabPanel>
                    <TabPanel value={type + tabValue} index="player1">
                        <FormControl component="fieldset" style={{display: 'inline-block'}}>
                            <div style={{display: 'flex', alignItems: 'center',marginBottom:'8px'}}>
                                <FormLabel component="legend"
                                           style={{display: 'inline-block', marginRight: '35px'}}>?????????</FormLabel>
                                <RadioGroup aria-label="gender" name="gender1" value={player.foot}
                                            style={{display: 'inline-block'}} onChange={this.footChange}>
                                    <FormControlLabel value={"all"} control={<Radio color="primary" />} label="??????"/>
                                    <FormControlLabel value={"left"} control={<Radio color="primary" />} label="??????"/>
                                    <FormControlLabel value={"right"} control={<Radio color="primary" />} label="??????"/>
                                </RadioGroup>
                            </div>
                            <div style={{display: 'flex', alignItems: 'center',marginBottom:'8px'}}>
                                <FormLabel component="legend"
                                           style={{display: 'inline-block', marginRight: '50px'}}>??????</FormLabel>
                                <RadioGroup aria-label="gender" name="gender1" value={player.role}
                                            style={{display: 'inline-block'}} onChange={this.roleChange}>
                                    <FormControlLabel value="all" control={<Radio color="primary" />} label="??????"/>
                                    <FormControlLabel value="??????" control={<Radio color="primary" />} label="??????"/>
                                    <FormControlLabel value="??????" control={<Radio color="primary" />} label="??????"/>
                                    <FormControlLabel value="??????" control={<Radio color="primary" />} label="??????"/>
                                    <FormControlLabel value="??????" control={<Radio color="primary" />} label="??????"/>
                                </RadioGroup>
                            </div>
                            <div style={{display: 'flex', alignItems: 'center',marginBottom:'8px'}}>
                                <FormLabel component="legend"
                                           style={{display: 'inline-block', marginRight: '50px'}}>??????</FormLabel>
                                <RadioGroup aria-label="gender" name="gender1" value={player.country}
                                            style={{display: 'inline-block'}} onChange={this.playerCountryChange}>
                                    <FormControlLabel value="all" control={<Radio color="primary" />} label="??????"/>
                                    <FormControlLabel value="?????????" control={<Radio color="primary" />} label="?????????"/>
                                    <FormControlLabel value="??????" control={<Radio color="primary" />} label="??????"/>
                                    <FormControlLabel value="??????" control={<Radio color="primary" />} label="??????"/>
                                    <FormControlLabel value="?????????" control={<Radio color="primary" />} label="?????????"/>
                                    <FormControlLabel value="?????????" control={<Radio color="primary" />} label="?????????"/>
                                    <FormControlLabel value="??????" control={<Radio color="primary" />} label="??????"/>
                                    <FormControlLabel value="?????????" control={<Radio color="primary" />} label="?????????"/>
                                    <FormControlLabel value="?????????" control={<Radio color="primary" />} label="?????????"/>
                                </RadioGroup>
                            </div>
                            <div style={{display: 'flex', alignItems: 'center',marginBottom:'8px'}}>
                                <FormLabel component="legend"
                                           style={{display: 'inline-block', marginRight: '50px'}}>??????</FormLabel>
                                <RadioGroup aria-label="gender" name="gender1" value={player.age}
                                            style={{display: 'inline-block'}} onChange={this.ageChange}>
                                    <FormControlLabel value="-1" control={<Radio color="primary" />} label="??????"/>
                                    <FormControlLabel value="0" control={<Radio color="primary" />} label="??????20???"/>
                                    <FormControlLabel value="1" control={<Radio color="primary" />} label="20???25???"/>
                                    <FormControlLabel value="2" control={<Radio color="primary" />} label="26???30???"/>
                                    <FormControlLabel value="3" control={<Radio color="primary" />} label="30?????????"/>
                                </RadioGroup>
                            </div>
                            <div style={{display: 'flex', alignItems: 'center'}}>
                                <FormLabel component="legend"
                                           style={{display: 'inline-block', marginRight: '50px'}}>??????</FormLabel>
                                <RadioGroup aria-label="gender" name="gender1" value={player.sort}
                                            style={{display: 'inline-block'}} onChange={this.playerSortChange}>
                                    <FormControlLabel value="-1" control={<Radio color="primary" />} label="??????????????????"/>
                                    <FormControlLabel value="0" control={<Radio color="primary" />} label="???????????????"/>
                                </RadioGroup>
                            </div>
                        </FormControl>
                    </TabPanel>
                    <TabPanel value={type + tabValue} index="team1">
                        <FormControl component="fieldset" style={{display: 'inline-block',width:"100%"}}>
                            <div style={{display: 'flex', alignItems: 'center'}}>
                                <FormLabel component="legend"
                                           style={{display: 'inline-block', marginRight: '50px'}}>??????</FormLabel>
                                <RadioGroup aria-label="gender" name="gender1" value={team.country}
                                            style={{display: 'inline-block'}} onChange={this.teamCountryChange}>
                                    <FormControlLabel value="all" control={<Radio color="primary" />} label="??????"/>
                                    <FormControlLabel value="?????????" control={<Radio color="primary" />} label="?????????"/>
                                    <FormControlLabel value="??????" control={<Radio color="primary" />} label="??????"/>
                                    <FormControlLabel value="??????" control={<Radio color="primary" />} label="??????"/>
                                    <FormControlLabel value="?????????" control={<Radio color="primary" />} label="?????????"/>
                                    <FormControlLabel value="?????????" control={<Radio color="primary" />} label="?????????"/>
                                    <FormControlLabel value="??????" control={<Radio color="primary" />} label="??????"/>
                                    <FormControlLabel value="?????????" control={<Radio color="primary" />} label="?????????"/>
                                    <FormControlLabel value="?????????" control={<Radio color="primary" />} label="?????????"/>
                                </RadioGroup>
                            </div>
                        </FormControl>
                    </TabPanel>
                    <TabPanel value={type + tabValue} index={"news1"}>
                        <FormControl component="fieldset" style={{display: 'inline-block'}}>
                            <div style={{display: 'flex', alignItems: 'center'}}>
                                <FormLabel component="legend"
                                           style={{display: 'inline-block', marginRight: '50px'}}>??????</FormLabel>
                                <RadioGroup aria-label="gender" name="gender1" value={news.sort}
                                            style={{display: 'inline-block'}} onChange={this.newsSortChange}>
                                    <FormControlLabel value="-1" control={<Radio color="primary" />} label="??????????????????"/>
                                    <FormControlLabel value="0" control={<Radio color="primary" />} label="???????????????"/>
                                </RadioGroup>
                            </div>
                        </FormControl>
                    </TabPanel>
                </AppBar>
            </div>
        )
    }
}

export default withStyles(style)(TablePanel);
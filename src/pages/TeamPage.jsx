import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import NavBar1 from "../components/NavBar1";
import Typography from "@material-ui/core/Typography";
import axios from "_axios@0.19.2@axios";
import Grid from "_@material-ui_core@4.12.1@@material-ui/core/Grid";
import Divider from "_@material-ui_core@4.12.1@@material-ui/core/Divider";
import TabContext from '@material-ui/lab/TabContext';
import Card from "_@material-ui_core@4.12.1@@material-ui/core/Card";
import CardContent from "_@material-ui_core@4.12.1@@material-ui/core/CardContent";
import NationalResultCard from "../components/NationalResultCard";
import TableCell from "_@material-ui_core@4.12.1@@material-ui/core/TableCell";
import TableRow from "_@material-ui_core@4.12.1@@material-ui/core/TableRow";
import Paper from "_@material-ui_core@4.12.1@@material-ui/core/Paper";
import Table from "_@material-ui_core@4.12.1@@material-ui/core/Table";
import TableHead from "_@material-ui_core@4.12.1@@material-ui/core/TableHead";
import TableBody from "_@material-ui_core@4.12.1@@material-ui/core/TableBody";
import TableContainer from "_@material-ui_core@4.12.1@@material-ui/core/TableContainer";
import TabPanel from "_@material-ui_lab@4.0.0-alpha.60@@material-ui/lab/TabPanel";
import statPic from "../assets/images/stat.svg";
import trophy from "../assets/images/trophy.svg"
import {Column, Item, Row} from "_@mui-treasury_components@1.10.1@@mui-treasury/components/flex";
import {useDynamicAvatarStyles} from "_@mui-treasury_styles@1.13.1@@mui-treasury/styles/avatar/dynamic";
import Avatar from "_@material-ui_core@4.12.1@@material-ui/core/Avatar";
import {
    Info,
    InfoCaption,
    InfoSubtitle,
    InfoTitle
} from "_@mui-treasury_components@1.10.1@@mui-treasury/components/info";
import {useD01InfoStyles} from "_@mui-treasury_styles@1.13.1@@mui-treasury/styles/info/d01";



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
        color: '#000000',
        height: '30px',
        backgroundColor: '#FFFFFF',
        position: 'fixed',
        bottom: 0
    },
    table: {
        marginTop:'10px',
        marginLeft:'20px'
    },
    line: {
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),
    },
    infoCard: {
        padding: theme.spacing(3),
        backgroundColor: '#ffffff',
        height: '150px',
    },
    statisticCard: {
        padding: theme.spacing(3)
    },
})
const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: 'green',
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

const callbacks = {
    onWordClick: console.log,
    onWordMouseOver: console.log,
    getWordTooltip: word => `${word.text} (${word.value}) [${word.value > 50 ? "good" : "bad"}]`,
}
const options = {
    colors: ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b"],
    enableTooltip: true,
    fontSizes: [30, 60],
    fontStyle: "normal",
    fontWeight: "normal",
    padding: 1,
    rotations: 3,
    rotationAngles: [0, 90],
    scale: "sqrt",
    spiral: "archimedean",
    transitionDuration: 1000
};
const size = [500, 300];
const words = [{"text":"欧洲杯","value":130},{"text":"金靴","value":50},{"text":"球员","value":50},{"text":"进球","value":30},{"text":"决赛","value":30},{"text":"本届","value":30},{"text":"凯恩","value":20},{"text":"历史","value":20},{"text":"金球奖","value":20},{"text":"赔率","value":20},{"text":"当选","value":20},{"text":"最佳","value":20},{"text":"希克","value":20},{"text":"出场","value":20},{"text":"美洲杯","value":20}]

function DarkRapListItem() {
    const avatarStyles = useDynamicAvatarStyles({ size: 70 });
    return (
        <Column gap={2}>
            <Row>
                <Item>
                    <Avatar
                        variant={'rounded'}
                        classes={avatarStyles}
                    />
                </Item>
                <Info useStyles={useD01InfoStyles}>
                    <InfoCaption>3d • #triphop #rap</InfoCaption>
                    <InfoTitle>Humility (feat. George Benson)</InfoTitle>
                    <InfoSubtitle>Gorillaz</InfoSubtitle>
                </Info>
            </Row>
            <Row mt={2}>
                <Item>
                    <Avatar
                        variant={'rounded'}
                        classes={avatarStyles}
                    />
                </Item>
                <Info useStyles={useD01InfoStyles}>
                    <InfoCaption>28d • #hiphop #rap</InfoCaption>
                    <InfoTitle>Old Town Road</InfoTitle>
                    <InfoSubtitle>Unknown</InfoSubtitle>
                </Info>
            </Row>
        </Column>
    );
}

class TeamPage extends Component {
    state = {
        input: this.props.match.params.input,
        info: {},
        teamRelatedPeopleList: [],
        teamHonorRecordList:[],
        imgURL: "",
        loading: true,
        catalog: -1,
        time: 220
    }

    async componentWillMount() {
        const that = this
        await axios.get('/team/getAll/' + that.state.input)
            .then(function (response) {
                that.setState({
                    info: response.data['teamBaseInfo'],
                    teamRelatedPeopleList:response.data['teamRelatedPeopleList'],
                    teamHonorRecordList:response.data['teamHonorRecordList'],
                    imgURL: response.data['imgURL']
                })
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.match.params.input &&
            (this.props.match.params.input !== nextProps.match.params.input)) {
            this.setState({
                input: nextProps.match.params.input
            })
        }
    }

    render() {
        const {classes} = this.props;
        const { info, imgURL,hotWord } = this.state;
        let rows = this.state.teamRelatedPeopleList;
        let rows1 = this.state.teamHonorRecordList;

        return (
            <div className={classes.main}>
                <NavBar1 className={classes.navBar} />
                <div className={classes.wrapper}>
                    <Grid container spacing={5}>
                        <Grid container xs={8}>
                            <Grid container xs={12}>
                                <Grid item xs>
                                    <div className={classes.infoCard}>
                                        <NationalResultCard data={{info: info, imgURL: imgURL , show:0}}/>
                                    </div>
                                    <div className={classes.statisticCard}>
                                        <Row>
                                            <img src={statPic} style={{marginRight: '10px', height: '32px', width: '32px'}}/>
                                            <Typography variant="h6" component="h5" >比赛数据</Typography>
                                        </Row>
                                        <TabContext>
                                            <TabPanel >
                                                <TableContainer component={Paper} >
                                                    <Table aria-label="customized table">
                                                        <TableHead>
                                                            <TableRow>
                                                                <StyledTableCell align="center">位置</StyledTableCell>
                                                                <StyledTableCell align="center">号码</StyledTableCell>
                                                                <StyledTableCell align="center">姓名</StyledTableCell>
                                                            </TableRow>
                                                        </TableHead>
                                                        <TableBody>
                                                            {rows.map((row) => (
                                                                <StyledTableRow >
                                                                    <StyledTableCell align="center">{row.role}</StyledTableCell>
                                                                    <StyledTableCell align="center">{row.number?row.number:'~'}</StyledTableCell>
                                                                    <StyledTableCell align="center">{row.name}</StyledTableCell>
                                                                </StyledTableRow>
                                                            ))}
                                                        </TableBody>
                                                    </Table>
                                                </TableContainer>
                                            </TabPanel >
                                        </TabContext>
                                    </div>
                                    <Divider/>
                                    <div className={classes.statisticCard}>
                                        <Row>
                                            <img src={trophy} style={{marginRight: '10px', height: '32px', width: '32px'}}/>
                                            <Typography variant="h6" component="h5" >荣誉记录</Typography>
                                        </Row>
                                        <TabContext>
                                            <TabPanel >
                                                <TableContainer component={Paper} >
                                                    <Table aria-label="customized table">
                                                        <TableHead>
                                                            <TableRow>
                                                                <StyledTableCell align="center">比赛</StyledTableCell>
                                                                <StyledTableCell align="center">获奖年份</StyledTableCell>
                                                            </TableRow>
                                                        </TableHead>
                                                        <TableBody>
                                                            {rows1.map((row) => (
                                                                <StyledTableRow >
                                                                    <StyledTableCell style={{width:'26%'}}>🏆&nbsp;{row.honor}✖️{row.years.split(',').length}</StyledTableCell>
                                                                    <StyledTableCell style={{wordBreak:"break-all" }} >{row.years.replaceAll(',','\t\0\t\0\t\0\t\0\t\0\t\0\t\0\t\0\t\0\t\0\t\0\t')}</StyledTableCell>
                                                                </StyledTableRow>
                                                            ))}
                                                        </TableBody>
                                                    </Table>
                                                </TableContainer>
                                            </TabPanel >
                                        </TabContext>
                                    </div>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs>
                            <Card className={classes.additionalInfo} style={{paddingTop:'6px',paddingLeft:'6px'}}>
                                <CardContent >
                                    <Typography variant="h6" component="h5" style={{marginBottom:"15px",marginTop:'30px'}}>
                                        相关人物
                                    </Typography>
                                    <DarkRapListItem/>
                                    <Divider/>
                                    <Typography variant="h6" component="h5" style={{marginBottom:"15px",marginTop:'30px'}}>
                                        {info.name}的最新动态
                                    </Typography>
                                    <DarkRapListItem/>
                                    <Divider/>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
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
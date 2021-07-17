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
import {Row} from "_@mui-treasury_components@1.10.1@@mui-treasury/components/flex";



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

const data2 = [{"id":201,"teamId":50001756,"honor":"欧洲冠军联赛","years":"2014/2015,2010/2011,2008/2009,2005/2006,1991/1992"},{"id":202,"teamId":50001756,"honor":"世界俱乐部杯","years":"2015 Japan,2011 Japan,2009 UAE"},{"id":203,"teamId":50001756,"honor":"欧洲超级杯","years":"2015/2016,2011/2012,2009/2010,1997/1998,1992/1993"},{"id":204,"teamId":50001756,"honor":"西班牙足球甲级联赛","years":"2018/2019,2017/2018,2015/2016,2014/2015,2012/2013,2010/2011,2009/2010,2008/2009,2005/2006,2004/2005,1998/1999,1997/1998,1993/1994,1992/1993,1991/1992,1990/1991,1984/1985,1973/1974,1959/1960,1958/1959,1952/1953,1951/1952,1948/1949,1947/1948,1944/1945,1929"},{"id":205,"teamId":50001756,"honor":"西班牙国王杯","years":"2020/2021,2017/2018,2016/2017,2015/2016,2014/2015,2011/2012,2008/2009,1997/1998,1996/1997,1989/1990,1987/1988,1982/1983,1980/1981,1977/1978,1971,1968,1963,1959,1957,1953,1952,1951,1942,1928,1926,1925,1922,1920,1913,1912,1910"},{"id":206,"teamId":50001756,"honor":"西班牙超级杯","years":"2018/2019,2016/2017,2013/2014,2011/2012,2010/2011,2009/2010,2006/2007,2005/2006,1996/1997,1994/1995,1992/1993,1991/1992,1983/1984,1953/1954,1952/1953* Automatically awarded to double winners,1948/1949,1945/1946"},{"id":207,"teamId":50001756,"honor":"加泰杯","years":"2013/2014"},{"id":208,"teamId":50001756,"honor":"欧洲优胜者杯","years":"1996/1997,1988/1989,1981/1982,1978/1979"},{"id":209,"teamId":50001756,"honor":"甘伯杯","years":"2020,2019,2018,2017,2016"},{"id":210,"teamId":50001756,"honor":"加泰罗尼亚超级杯","years":"2018"},{"id":211,"teamId":50001756,"honor":"奥迪杯","years":"2011"}]

class TeamPage extends Component {
    state = {
        input: this.props.match.params.input,
        info: {},
        teamRelatedPeopleList: [],
        teamHonorRecordList:[],
        imgURL: "",
        matchData: [],
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
        const { info, data, matchData, imgURL } = this.state;
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
                                    {/*<Typography variant="h6" component="h5" style={{marginBottom:"15px"}}>*/}
                                    {/*    {info.name}的能力六方图*/}
                                    {/*</Typography>*/}
                                    {/*<div style={{width: '335px', height: '335px', marginBottom: '30px'}}>*/}
                                    {/*    <ResponsiveContainer width="100%" height="100%">*/}
                                    {/*        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>*/}
                                    {/*            <Tooltip />*/}
                                    {/*            <PolarGrid />*/}
                                    {/*            <PolarAngleAxis dataKey="item" />*/}
                                    {/*            <PolarRadiusAxis/>*/}
                                    {/*            <Radar name={info.name} dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />*/}
                                    {/*        </RadarChart>*/}
                                    {/*    </ResponsiveContainer>*/}
                                    {/*</div>*/}
                                    {/*<Divider/>*/}
                                    {/*<Typography variant="h6" component="h5" style={{marginBottom:"15px",marginTop:'30px'}}>*/}
                                    {/*    相关人物*/}
                                    {/*</Typography>*/}
                                    {/*<DarkRapListItem/>*/}
                                    {/*<Divider/>*/}
                                    {/*<Typography variant="h6" component="h5" style={{marginBottom:"15px",marginTop:'30px'}}>*/}
                                    {/*    {info.name}的最新动态*/}
                                    {/*</Typography>*/}
                                    {/*<DarkRapListItem/>*/}
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
import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import NavBar from "../components/NavBar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import SearchResultItem from "../components/SearchResultItem";
import Divider from "@material-ui/core/Divider";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import PlayerCard from "../components/PlayerCard";
import Avatar from '@material-ui/core/Avatar';
import { Row, Column, Item } from '@mui-treasury/components/flex';
import {
    Info,
    InfoTitle,
    InfoSubtitle,
    InfoCaption,
} from '@mui-treasury/components/info';
import { useDynamicAvatarStyles } from '@mui-treasury/styles/avatar/dynamic';
import { useD01InfoStyles } from '@mui-treasury/styles/info/d01'
import { Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import PlayerTable from "../components/PlayerTable";

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

const data = [
    {
        subject: '速度',
        A: 120,
        B: 110,
        fullMark: 150,
    },
    {
        subject: '射门',
        A: 98,
        B: 130,
        fullMark: 150,
    },
    {
        subject: '传球',
        A: 86,
        B: 130,
        fullMark: 150,
    },
    {
        subject: '盘带',
        A: 99,
        B: 100,
        fullMark: 150,
    },
    {
        subject: '防守',
        A: 85,
        B: 90,
        fullMark: 150,
    },
    {
        subject: '力量',
        A: 65,
        B: 85,
        fullMark: 150,
    },
];

const playerInfo = {
    name: '张溢弛',
    club: '上海上港',
    country: '奥地利',
    height: '192厘米',
    position: '前锋',
    age: '32岁',
    weight: '82KG',
    number: '7号',
    birthday: '1989-04-19',
    foot: '左右脚'
}

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

class PlayerPage extends Component {
    state = {
        input: this.props.match.params.input,
        loading: true,
        catalog: -1,
        time: 220
    }

    componentDidMount() {
        // console.log(this.props);
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
        const { input, catalog, time } = this.state;

        return (
            <div className={classes.main}>
                <NavBar className={classes.navBar} />
                <div className={classes.wrapper}>
                    <Grid container spacing={5}>
                        <Grid container xs={8}>
                            <Grid container xs={12}>
                                <Grid item xs>
                                    <div className={classes.infoCard}>
                                        <SearchResultItem data={playerInfo}/>
                                    </div>
                                    <div className={classes.statisticCard}>
                                        <Divider orientation="vertical" flexItem/>
                                        <Typography variant="h6" component="h5">
                                            比赛数据
                                        </Typography>
                                        <PlayerTable/>
                                    </div>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs>
                            <Card className={classes.additionalInfo} style={{paddingTop:'6px',paddingLeft:'6px'}}>
                                <CardContent >
                                    <Typography variant="h6" component="h5" style={{marginBottom:"15px"}}>
                                        {input}的能力六方图
                                    </Typography>
                                    <div style={{width: '335px', height: '335px', marginBottom: '30px'}}>
                                        <ResponsiveContainer width="100%" height="100%">
                                            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                                                <PolarGrid />
                                                <PolarAngleAxis dataKey="subject" />
                                                <PolarRadiusAxis angle={30} domain={[0, 150]} />
                                                <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                                                <Radar name="Lily" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
                                                <Legend />
                                            </RadarChart>
                                        </ResponsiveContainer>
                                    </div>
                                    <Divider/>
                                    <Typography variant="h6" component="h5" style={{marginBottom:"15px",marginTop:'30px'}}>
                                        {input}的最新动态
                                    </Typography>
                                    <DarkRapListItem/>
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

export default withStyles(style)(PlayerPage);
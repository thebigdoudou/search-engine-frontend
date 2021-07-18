import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import axios from "axios";
import NavBar1 from "../components/NavBar1";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import SearchResultItem from "../components/SearchResultItem";
import Divider from "@material-ui/core/Divider";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
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
import { Radar, RadarChart, PolarGrid, Tooltip, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import PlayerTable from "../components/PlayerTable";
import TransferTable from "../components/transferTable";
import InjureTable from "../components/InjureTable";
import transferPic from "../assets/images/transfer.svg";
import injurePic from "../assets/images/injure.svg";
import statPic from "../assets/images/stat.svg";
import ReactWordcloud from "react-wordcloud";
import Graph from "react-graph-vis";

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

const callbacks = {
    getWordTooltip: (word) =>
        `The word "${word.text}" appears ${word.value} times.`,
};
const options = {
    colors: ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b"],
    enableTooltip: true,
    deterministic: false,
    fontFamily: "impact",
    fontSizes: [20, 50],
    fontStyle: "normal",
    fontWeight: "normal",
    padding: 1,
    rotations: 3,
    rotationAngles: [0, 90],
    scale: "sqrt",
    spiral: "archimedean",
    transitionDuration: 1000
};

const graphOptions = {
    groups: {
        self: {
            color: { background: "#00FA9A", border: "#00FA9A" },
            // shape: "circle",
            scaling: { min: 20 }
        },
        teammate: {
            color: { background: "#ffa3a3", border: "#ffa3a3" },
            shapeProperties: { borderDashes: true },
            // shape: "box",
        },
        relation: {
            color: { background: "#a9d2a9", border: "#a9d2a9" },
            shapeProperties: { borderDashes: true },
            // shape: "ellipse"
        },
        team: {
            color: { background: "#98F5FF", border: "#98F5FF" },
            shapeProperties: { borderDashes: true },
            // shape: "box"
        },
        oldTeam: {
            color: { background: "#98F5FF", border: "#98F5FF" },
            shapeProperties: { borderDashes: true },
            // shape: "box"
        },
        injure: {
            color: { background: "#FF6347", border: "#FF6347" },
            shapeProperties: { borderDashes: true },
            // shape: "box"
        },
        honor: {
            color: { background: "#FFD700", border: "#FFD700" },
            shapeProperties: { borderDashes: true },
            // shape: "box"
        }
    },
    layout: {
        hierarchical: false
    },
    edges: {
        width: 2,
        font: { align: "bottom", strokeWidth: 3, strokeColor: "#ffffff" },
        color: {
            color: "#cccccc",
            highlight: "#aabbee",
            hover: "#aaaaaa",
            inherit: "both",
            opacity: 1
        },
        arrowStrikethrough: false,
        // font: '12px arial #ff0000',
        scaling: {
            min: 1,
            max: 10,
            label: true
        },
        smooth: {
            type: "continuous",
            forceDirection: "horizontal"
        }
    },
    nodes: {
        font: {
            size: 14
        },
        color: {
            hover: {
                border: '#D2E5FF',
                background: '#D2E5FF'
            }
        },
        shape: "dot",
        size: 15,
        scaling: {
            type: "incomingAndOutgoingConnections",
            min: 10,
            max: 60,
            label: {
                enabled: true,
                min: 20,
                max: 32
            }
        }
    },
    interaction:{
        hover: true,
        zoomView: false
    }
};

const events = {
    select: function(event) {
        let { nodes, edges } = event;
        console.log("Selected nodes:");
        console.log(nodes);
        console.log("Selected edges:");
        console.log(edges);
    }
};

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

const items1 = ['速度', '射门', '传球', '盘带', '防守', '力量']
const items2 = ['speed', 'shoot', 'pass', 'dribbling', 'defence', 'strength']

class PlayerPage extends Component {
    state = {
        input: this.props.match.params.input,
        info: {},
        data: [],
        imgURL: "",
        matchData: [],
        injureData: [],
        hotWord: [],
        graph: {nodes: [], edges: []},
        loading: true,
        catalog: -1,
        time: 220
    }

    //test/find/梅西/0
    async componentWillMount() {
        const that = this
        await axios.get('/player/getAll/' + that.state.input)
            .then(function (response) {
                let data = []
                for(let i = 0; i < 6; i++) {
                    data.push({item: items1[i], value: response.data['playerBaseInfo'][items2[i]], fullMark: 100})
                }
                that.setState({
                    info: response.data['playerBaseInfo'],
                    data: data,
                    matchData: response.data['playerMatchDataList'],
                    transferData: response.data['playerTransferDataList'],
                    injureData: response.data['playerInjuredDataList'],
                    imgURL: response.data['imgURL']
                })
            })
            .catch(function (error) {
                console.log(error);
            });
        await axios.get('/player/hotWord/' + that.state.input)
            .then(function (response) {
                that.setState({
                    hotWord: response.data
                })
            })
            .catch(function (error) {
                console.log(error);
            });
        await axios.get('/player/kg/' + that.state.input)
            .then(function (response) {
                that.setState({
                    graph: response.data
                })
                console.log(response.data)
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
        const { input, info, data, matchData, transferData, injureData, imgURL, hotWord, graph } = this.state;

        return (
            <div className={classes.main}>
                <NavBar1 className={classes.navBar} />
                <div className={classes.wrapper}>
                    <Grid container spacing={5}>
                        <Grid container xs={8}>
                            <Grid container xs={12}>
                                <Grid item xs>
                                    <div className={classes.infoCard}>
                                        <SearchResultItem data={{info: info, imgURL: imgURL}}/>
                                    </div>
                                    <div className={classes.statisticCard}>
                                        <Row>
                                            <img src={statPic} style={{marginRight: '10px', height: '32px', width: '32px'}}/>
                                            <Typography variant="h6" component="h5">
                                                比赛数据
                                            </Typography>
                                        </Row>
                                        <PlayerTable id={input}/>
                                    </div>
                                    <Divider/>
                                    <div className={classes.statisticCard}>
                                        <Row>
                                            <img src={transferPic} style={{marginRight: '10px', height: '32px', width: '32px'}}/>
                                            <Typography variant="h6" component="h5">
                                                转会
                                            </Typography>
                                        </Row>
                                        <TransferTable data={transferData}/>
                                    </div>
                                    <Divider/>
                                    <div className={classes.statisticCard}>
                                        <Row>
                                            <img src={injurePic} style={{marginRight: '10px', height: '32px', width: '32px'}}/>
                                            <Typography variant="h6" component="h5">
                                                伤病
                                            </Typography>
                                        </Row>
                                        <InjureTable data={injureData}/>
                                    </div>
                                    <div className={classes.statisticCard}>
                                        <Row>
                                            <img src={injurePic} style={{marginRight: '10px', height: '32px', width: '32px'}}/>
                                            <Typography variant="h6" component="h5">
                                                知识图谱
                                            </Typography>
                                        </Row>
                                        <div style={{ height: "1100px" }}>
                                            <Graph
                                                graph={graph}
                                                options={graphOptions}
                                                events={events}
                                                style={{ height: "100%", width: "100%", fontFamily: 'sans-serif', textAlign: 'center' }}
                                            />
                                        </div>
                                    </div>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs>
                            <Card className={classes.additionalInfo} style={{paddingTop:'6px',paddingLeft:'6px'}}>
                                <CardContent >
                                    <Typography variant="h6" component="h5" style={{marginBottom:"15px"}}>
                                        {info.name}的能力六方图
                                    </Typography>
                                    <div style={{width: '335px', height: '335px', marginBottom: '30px'}}>
                                        <ResponsiveContainer width="100%" height="100%">
                                            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                                                <Tooltip />
                                                <PolarGrid />
                                                <PolarAngleAxis dataKey="item" />
                                                <PolarRadiusAxis/>
                                                <Radar name={info.name} dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                                            </RadarChart>
                                        </ResponsiveContainer>
                                    </div>
                                    <Divider/>
                                    <Typography variant="h6" component="h5" style={{marginBottom:"15px",marginTop:'30px'}}>
                                        {info.name}的实时关键词
                                    </Typography>
                                    <div style={{height: '300px', width: '100%'}}>
                                        <ReactWordcloud
                                            callbacks={callbacks}
                                            options={options}
                                            words={hotWord}
                                        />
                                    </div>
                                    <Divider/>
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

export default withStyles(style)(PlayerPage);
import React, { Component } from 'react'
import cx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import { Favorite, CloudCircle } from '@material-ui/icons';
import Typography from '@material-ui/core/Typography';
import NavBar from '../components/NavBar';
import Grid from '@material-ui/core/Grid';
import Filter from "../components/Filter";
import SideBar from "../components/SideBar";
import SearchResultItem from "../components/SearchResultItem";
import Button from '@material-ui/core/Button';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import Card from "@material-ui/core/Card";
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import { Column, Item, Row } from '@mui-treasury/components/flex';
import { useDynamicAvatarStyles } from '@mui-treasury/styles/avatar/dynamic';
import Icon1 from '../assets/images/1.png'
import Icon2 from '../assets/images/2.png'
import Icon3 from '../assets/images/3.png'
import Icon4 from '../assets/images/4.png'
import Icon5 from '../assets/images/5.png'
import Icon6 from '../assets/images/6.png'
import Icon7 from '../assets/images/7.png'
import Icon8 from '../assets/images/8.png'
import Icon9 from '../assets/images/9.png'
import Api from "../components/Api";
import NationalResultCard from "../components/NationalResultCard";
import InfoResultCard from "../components/InfoResultCard";
import Pagination from "_material-ui-flat-pagination@3.2.1@material-ui-flat-pagination";
import ItemCard from "../components/ItemCard";
import TablePanel from "../components/TablePanel";
import axios from "axios";

const style = theme => ({
  main: {
    backgroundColor: '#ffffff',
    minHeight: '100%',
    position: 'absolute',
    width: '100%',
    left: 0,
    top: 0
  },
  root: {
    maxWidth: 304,
    margin: 'auto',
    boxShadow: 'none',
    borderRadius: 0,
  },
  cardContent: {
    padding: 24,
  },
  cta: {
    marginTop: 24,
    textTransform: 'initial',
  },
  wrapper: {
    padding: '100px 35px 35px 35px',
    [theme.breakpoints.down("xs")]: {
      padding: "10px 10px"
    },
    margin: '25px 25px'
  },
  navBar: {
    backgroundColor: 'transparent',
    boxShadow: '0 0 0 0',
    padding: '20px',
  },
  head: {
    padding: theme.spacing(5)
  },
  searchInfo: {
    padding: theme.spacing(5),
    height: '200px',
  },
  additionalInfo: {
    padding: theme.spacing(5),
    minHeight: '650px',
  },
  inline: {
    display: 'inline',
  },
  line: {
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(5),
  },
  card: {
    padding: theme.spacing(3),
    backgroundColor: '#ffffff',
    height: '150px',
  },
  sider: {

  },
  // filter: {
  //   height: '50px',
  //   width: '50%'
  // },
  pagination: {
    marginLeft: theme.spacing(6),
    margin: '20px auto',
    display: 'center'
  },
  footer: {
    textAlign: 'center',
    alignItems: 'center',
    width: '100%',
    color: '#000000',
    height: '30px',
    backgroundColor: '#FFFFFF',
    bottom: 0
  },
  loveIcon: {
    fontSize: '1rem',
    padding: '2px 5px'
  },
  columnRow: {
    margin:'0px 0px 10px 0px',
    alignItems: 'center'
  },
  rankIcon: {
    width: theme.spacing(4),
    height: theme.spacing(4),
    marginRight:  theme.spacing(1),
  },
  textField:{
    marginBottom: theme.spacing(3)
  },
});

const PersonItem = ({ src, name}) => {
  const avatarStyles = useDynamicAvatarStyles({ size: 85});
  return (
        <Item>
          <Avatar classes={avatarStyles} src={src} />
          <div  style={{marginTop:"8px",textAlign:'center'}}>{name.length>6?name.toString().substring(0,5)+"...":name}</div>
        </Item>
  );
}

function AboutList(prams) {
  const about = prams.prams
  const about1=[],about2=[];
  for (var i = 0 ; i <= 5 ;i++) {
    if(i<3){
      about1.push(Array.from(about)[i]);
    }
    else{
      about2.push(Array.from(about)[i]);
    }
  }

  return (
      <div>
        <Box style={{display:'flex', justifyContent:'space-between' ,marginBottom:'20px'}}>
          {
            about1.map((item) => (
                <Box>
                  <PersonItem name={item.name} src={item.img_url} />
                </Box>
            ))
          }
        </Box>
        <Box style={{display:'flex', justifyContent:'space-between' ,marginBottom:'20px'}}>
          {
            about2.map((item) => (
                <Box>
                  <PersonItem name={item.name} src={item.img_url} />
                </Box>
            ))
          }
        </Box>
      </div>
  );
}

// const data1=[{"id":50001756,"url":"https://dongqiudi.com/team/50001756.html","birthYear":1899,"country":"?????????","city":"????????????","stadium":"???????????????","audience":99787,"phone":"+34 (902) 189900","email":"oab@club.fcbarcelona.com","name":"????????????","englishName":"Barcelona","address":"Avenida de Ar??stides Maillol"}]
class ResultPage extends Component {
  state = {
    query:{
      detail: this.props.match.params.input,
      catalog: "all",
    },
    page: 1,
    recommendList: [],
    totalDataList: [],
    offset: 0,
    total: 0,
    loading: true,
    question:'',
    answer:''
  }

  componentDidMount() {
    if(this.state.query)
      this.fetchData(this.state.query, 1);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.match.params.input &&
    (this.props.match.params.input !== nextProps.match.params.input)) {
      this.setState({
        query:{
          detail:nextProps.match.params.input,
          catalog:this.state.catalog
        },
        page: 1,
        offset: 0,
        loading: true
      }, () => {
        this.fetchData(this.state.query, 1);
      })
    }
  }

  fetchData = (query, page=1) => {
    const detail = query.detail;
    const catalog = query.catalog;
    let api=Api.searchAll;
    if(catalog==="all"){
      api =Api.searchAll;
    }
    else if(catalog==="player"){
      api =Api.searchPlayer;
    }
    else if(catalog==="team"){
      api =Api.searchTeam
    }
    else if(catalog==="news"){
      api = Api.searchNews
    }
    let url = api + detail + "/"+page;
    console.log(url)
    // const url = `http://10.214.213.43:9999/search?key=${input}&catalog=${catalog}&page=${page}&size=${pageSize}&delta=${time}`;

    fetch(url)
        .then(res => res.json())
        .then((json) => {
          this.setState({
            totalDataList: json.totalDataList,
            recommendList: json.recommendList,
            total: json.searchInfo.totalNum,
            loading: false
          })
        })
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  }

  changePage = (offset) => {
    const page = 1 + offset / 10;
    this.setState({
      offset: offset,
      page: page,
      loading: true
    });
    this.fetchData(this.state.query, page);
  }

  changeCatalog = (prams) => {
    let catalog="all";
    let detail = this.props.match.params.input
    let input = this.props.match.params.input
    if(prams.type === "all") {
      catalog = "all"
      detail = input
    }
    else if(prams.type === "player") {
      catalog = "player"
      const footValue = prams.player.foot==="all"?-1:prams.player.foot==="left"?0:1;
      detail = input + "/" + footValue + "/" + prams.player.role + "/" + prams.player.country + "/" + prams.player.age + "/" + prams.player.sort
    }
    else if(prams.type === "team") {
      catalog = "team"
      detail = input + "/" + prams.team.country
    }
    else if(prams.type === "news") {
      catalog = "news"
      detail = input + "/" + prams.news.sort
    }
    const query={
      time: this.state.time,
      catalog: catalog,
      detail: detail
    }
    console.log(input)
    console.log(detail)
    this.fetchData(query, 1);
    this.setState({
      query,
      page: 1,
      offset: 0,
    })
  }

  changeQuestion = (e) => {
    this.setState({question:e.target.value});
  }
  getAnswer = (e) => {
    const that = this
    setTimeout(()=>{axios.get('/autoAnswer/'+this.state.question)
        .then(function (response) {
          that.setState({
            answer:response.data
          })
        })
        .catch(function (error) {
          console.log(error);
        });},1800);
  }

  render() {
    const {classes} = this.props;
    const {totalDataList,recommendList,total,question,answer } = this.state;
    return (

      <div className={classes.main}>
        <NavBar className={classes.navBar}/>
        <div className={classes.wrapper}>
          <Grid container spacing={10}>
            <Grid item xs={12}>
              <TablePanel changeCatalog={this.changeCatalog}/>
            </Grid>
          </Grid>
          <Grid container spacing={5}>
            <Grid container xs={8}>
              { totalDataList.map((item, index) => (
                  <Grid container xs={12}>
                    <Grid container xs={12}>
                      <Grid item  xs>
                        <div className={classes.card} style={index?{marginBottom:'20px'}:{marginBottom:'20px',marginTop:'10px'}}>
                          {item.type==1?<SearchResultItem data={{info: item.playerReturn, imgURL: item.playerReturn.imgURL,show:1}}/>:''}
                          {item.type==2?<NationalResultCard data={{info: item.teamReturn, imgURL: item.teamReturn.imgURL,show:1}}/>:''}
                          {item.type==3?<InfoResultCard data={item.newsReturn}/>:''}
                        </div>
                      </Grid>
                    </Grid>
                    <Grid container xs={12} style={{height:'10px'}}>
                      <Grid xs >
                        <div className={classes.line}>
                          <Divider />
                        </div>
                      </Grid>
                    </Grid>
                  </Grid>
              ))}
              { total<5?(
                  <Grid container xs={12}>
                    <Grid container xs={12}>
                      <Grid item  xs>
                        <div className={classes.card} style={{marginBottom:'20px',marginTop:'20px'}}/>
                      </Grid>
                    </Grid>
                    <Grid container xs={12}>
                      <Grid item  xs>
                        <div className={classes.card} style={{marginBottom:'20px',marginTop:'20px'}}/>
                      </Grid>
                    </Grid>
                    <Grid container xs={12}>
                      <Grid item  xs>
                        <div className={classes.card} style={{marginBottom:'20px',marginTop:'20px'}}/>
                      </Grid>
                    </Grid>
                  </Grid>):''
              }
            </Grid>
            <Grid item xs>
              <Card className={classes.additionalInfo} style={{paddingTop:'6px',paddingLeft:'6px'}}>
                <CardContent >
                  <Typography variant="h6" component="h5" style={{marginBottom:"15px"}}>
                     ???????????????
                  </Typography>
                  {recommendList.length !== 0?<AboutList prams={recommendList}/>:''}
                  <Typography variant="h6" component="h5" style={{marginBottom:"15px",marginTop:'30px'}}>
                    ????????????
                  </Typography>
                  <Column>
                    <Row className={classes.columnRow}>
                      <Avatar src={Icon1} className={classes.rankIcon} />
                      <a style={{textDecoration:'none'}} href={'https://www.dongqiudi.com/articles/2150725.html'}>?????????????????????????????????????????????</a>
                    </Row>
                    <Row className={classes.columnRow}>
                      <Avatar src={Icon2} className={classes.rankIcon} />
                      <a style={{textDecoration:'none'}} href={'https://www.dongqiudi.com/articles/2150618.html'}>????????????????????????????????????</a>
                    </Row>
                    <Row className={classes.columnRow}>
                      <Avatar src={Icon3} className={classes.rankIcon} />
                      <a style={{textDecoration:'none'}} href={'https://www.dongqiudi.com/articles/2150966.html'}>???????????????2021??????????????????</a>
                    </Row>
                    <Row className={classes.columnRow}>
                      <Avatar src={Icon4} className={classes.rankIcon} />
                      <a style={{textDecoration:'none'}} href={'https://www.dongqiudi.com/articles/2151002.html'}>?????????????????????????????????3-1??????</a>
                    </Row>
                    <Row className={classes.columnRow}>
                      <Avatar src={Icon5} className={classes.rankIcon} />
                      <a style={{textDecoration:'none'}} href={'https://www.dongqiudi.com/articles/2151107.html'}>?????????????????????????????????????????????</a>
                    </Row>
                    <Row className={classes.columnRow}>
                      <Avatar src={Icon6} className={classes.rankIcon} />
                      <a style={{textDecoration:'none'}} href={'https://www.dongqiudi.com/articles/2151070.html'}>?????????????????????????????????</a>
                    </Row>
                    <Row className={classes.columnRow}>
                      <Avatar src={Icon7} className={classes.rankIcon} />
                      <a style={{textDecoration:'none'}} href={'https://www.dongqiudi.com/articles/2151162.html'}>????????????????????????????????????????????????</a>
                    </Row>
                    <Row className={classes.columnRow}>
                      <Avatar src={Icon8} className={classes.rankIcon} />
                      <a style={{textDecoration:'none'}} href={'https://www.dongqiudi.com/articles/2150904.html'}>??????????????????????????????????????????????????????</a>
                    </Row>
                    <Row className={classes.columnRow}>
                      <Avatar src={Icon9} className={classes.rankIcon} />
                      <a style={{textDecoration:'none'}} href={'https://www.dongqiudi.com/articles/2150120.html'}>C????????????????????????</a>
                    </Row>
                  </Column>
                  <Divider style={{marginTop:'20px',marginBottom:'20px'}}/>
                  <Typography variant="h6" component="h5" style={{marginBottom:"15px",marginTop:'30px'}}>????????????</Typography>
                  <TextField
                      className={classes.textField}
                      label="??????"
                      variant="outlined"
                      value={question}
                      onChange={this.changeQuestion}
                      fullWidth={true}
                      id="mui-theme-provider-outlined-input"
                  />
                  <TextField
                      className={classes.textField}
                      label="??????"
                      value={answer}
                      variant="outlined"
                      fullWidth={true}
                      id="mui-theme-provider-outlined-input"
                  />
                  <Button
                      variant="contained"
                      color="default"
                      className={classes.button}
                      onClick={this.getAnswer}
                      startIcon={<KeyboardVoiceIcon />}
                      style={{marginLeft:"74%"}}
                  >
                    ??????
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </div>
        <div className={classes.pagination}>
          <Pagination
              limit={10}
              offset={this.state.offset}
              total={total}
              onClick={(event, offset) => this.changePage(offset)}
              otherPageColor="default"
              currentPageColor="secondary"
          />
        </div>
        <footer className={classes.footer} >
          <Typography variant="body2" component="p" style={{marginTop: 5}}>
            Copyright ?? <a href={'https://github.com/Cheungki/KnowABall'} style={{color: 'black'}}>G07</a> @Zhejiang University. All Rights Reserved.
          </Typography>
        </footer>
      </div>
    )
  }
}

export default withStyles(style)(ResultPage);
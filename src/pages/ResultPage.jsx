import React, { Component } from 'react'
import cx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import { Favorite, CloudCircle } from '@material-ui/icons';
import Typography from '@material-ui/core/Typography';
import NavBar from '../components/NavBar';
import Grid from '@material-ui/core/Grid';
import Filter from "../components/Filter";
import SideBar from "../components/SideBar";
import SimpleTabs from "../components/TablePanel"
import SearchResultItem from "../components/SearchResultItem";
import SearchResult from "../components/SearchResult";
import { Switch, Route } from 'react-router-dom';
import TagList from '../components/TagList';
import TagResult from '../components/TagResult';
import TagCloud from '../components/TagCloud';
import ScrollTop from '../components/ScrollTop';
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
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Icon1 from '../assets/images/1.png'
import Icon2 from '../assets/images/2.png'
import Icon3 from '../assets/images/3.png'
import Icon4 from '../assets/images/4.png'
import Icon5 from '../assets/images/5.png'
import Icon6 from '../assets/images/6.png'
import Icon7 from '../assets/images/7.png'
import Icon8 from '../assets/images/8.png'
import Icon9 from '../assets/images/9.png'
import data from "../components/data";
import NationalResultCard from "../components/NationalResultCard";
import InfoResultCard from "../components/InfoResultCard";
import Pagination from "_material-ui-flat-pagination@3.2.1@material-ui-flat-pagination";
import ItemCard from "../components/ItemCard";

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

class ResultPage extends Component {
  state = {
    query:{
      input: this.props.match.params.input,
      time: 0,
      catalog: -1,
    },
    page: 1,
    data: [],
    offset: 0,
    total: 0,
    loading: true
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
          input:nextProps.match.params.input,
          time:this.state.time,
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
    const input = query.input;
    const catalog = query.catalog || -1;
    const time = query.time || 0;
    const url ='http://192.168.43.146:8080/testTeam/name/'+input;
    // const url = `http://10.214.213.43:9999/search?key=${input}&catalog=${catalog}&page=${page}&size=${pageSize}&delta=${time}`;

    if(input) {
      console.log(url);
      fetch(url)
          .then(res => res.json())
          .then((json) => {
            console.log(json);
            // if(json.code === 200) {
            //   this.setState({
            //     data: json.data.result,
            //     total: json.data.total,
            //     loading: false
            //   })
            // }
          })
    }
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 1000);
  }

  changePage = (offset) => {
    const page = 1 + offset / 10;
    this.setState({
      offset: offset,
      page: page,
      loading: true
    });
    // this.fetchData(this.state.query, page);
  }

  changeCatalog = (catalog) => {
    this.setState({catalog});
    // console.log("catalog", catalog);
  }

  changeTime = (time) => {
    this.setState({time});
    // console.log("time", time);
  }

  render() {
    const {classes} = this.props;
    const { input, catalog, time } = this.state;
    console.log(this.state)
    return (

      <div className={classes.main}>
        <NavBar className={classes.navBar} />
        <div className={classes.wrapper}>
          {/*<Grid container spacing={4} className={classes.content}>*/}
          {/*  <Grid item xs={12} sm={3} md={2} className={classes.sider}>*/}
          {/*    /!*<SideBar input={input} changeCatalog={this.changeCatalog} />*!/*/}
          {/*  </Grid>*/}
          {/*  <Grid item xs={12} sm={6} md={7}>*/}
          {/*    <Switch>*/}
          {/*      <Route path="/search/query/:input"*/}
          {/*        render={() => <SearchResult query={{"input": input, "catalog": catalog, "time": time }}/>}*/}
          {/*      />*/}
          {/*      <Route path="/search/tags/all" component={TagList} />*/}
          {/*      <Route path="/search/tags/:tag" component={TagResult} />*/}
          {/*    </Switch>*/}
          {/*  </Grid>*/}
          {/*  <Grid item xs={12} sm={3} md={3} className={classes.sider}>*/}
          {/*    { this.props.location.pathname.indexOf("tags") < 0 &&*/}
          {/*      <Filter changeTime={this.changeTime} />*/}
          {/*    }*/}
          {/*    <Typography variant="subtitle1" component="h2" style={{color: '#7D7D7D', margin:'25px 0'}}>*/}
          {/*      <CloudCircle /> 标签词云*/}
          {/*    </Typography>*/}
          {/*    <TagCloud />*/}
          {/*  </Grid>*/}
          {/*</Grid>*/}
          {/*<ScrollTop />*/}
          <Grid container spacing={10}>
            <Grid item xs={12}>
              <SimpleTabs/>
            </Grid>
          </Grid>
          <Grid container spacing={5}>
            <Grid container xs={8}>
              { data.map((item, index) => (
                  <Grid container xs={12}>
                    <Grid container xs={12}>
                      <Grid item xs>
                        <div className={classes.card} style={index?{marginBottom:'20px'}:{marginBottom:'20px',marginTop:'10px'}}>
                          <SearchResultItem key={index} data={item}/>
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
              {/*<Grid container xs={12}>*/}
              {/*  <Grid item xs>*/}
              {/*    <div className={classes.card}>*/}
              {/*      <InfoResultCard />*/}
              {/*    </div>*/}
              {/*  </Grid>*/}
              {/*</Grid>*/}
              {/*<Grid container xs={12}>*/}
              {/*  <Grid item xs>*/}
              {/*    <div className={classes.line}>*/}
              {/*      <Divider />*/}
              {/*    </div>*/}
              {/*  </Grid>*/}
              {/*</Grid>*/}
              {/*<Grid container xs={12}>*/}
              {/*  <Grid item xs>*/}
              {/*    <div className={classes.card}>*/}
              {/*      <NationalResultCard/>*/}
              {/*    </div>*/}
              {/*  </Grid>*/}
              {/*</Grid>*/}
            </Grid>
            <Grid item xs>
              <Card className={classes.additionalInfo} style={{paddingTop:'6px',paddingLeft:'6px'}}>
                <CardContent >
                  <Typography variant="h6" component="h5" style={{marginBottom:"15px"}}>
                    相关球员
                  </Typography>
                  <Box style={{display:'flex', justifyContent:'space-between' ,marginBottom:'20px'}}>
                    <Box>
                      <PersonItem name={'里卡多·洛佩斯'} src={'https://i.pravatar.cc/300?img=10'} />
                    </Box>
                    <Box >
                      <PersonItem name={'阿瑙托维奇'}src={'https://i.pravatar.cc/300?img=20'} />
                    </Box>
                    <Box>
                      <PersonItem name={'卡尔德克'} src={'https://i.pravatar.cc/300?img=30'} />
                    </Box>
                  </Box>
                  <Box style={{display:'flex', justifyContent:'space-between'}}>
                    <Box>
                      <PersonItem name={'里卡多洛佩'} src={'https://i.pravatar.cc/300?img=10'} />
                    </Box>
                    <Box >
                      <PersonItem name={'阿瑙托维奇'}src={'https://i.pravatar.cc/300?img=20'} />
                    </Box>
                    <Box>
                      <PersonItem name={'卡尔德克'} src={'https://i.pravatar.cc/300?img=30'} />
                    </Box>
                  </Box>
                  <Typography variant="h6" component="h5" style={{marginBottom:"15px",marginTop:'30px'}}>
                    最新资讯
                  </Typography>
                  <Column>
                    <Row className={classes.columnRow}>
                      <Avatar src={Icon1} className={classes.rankIcon} />精
                    </Row>
                    <Row className={classes.columnRow}>
                      <Avatar src={Icon2} className={classes.rankIcon} />准
                    </Row>
                    <Row className={classes.columnRow}>
                      <Avatar src={Icon3} className={classes.rankIcon} />抓
                    </Row>
                    <Row className={classes.columnRow}>
                      <Avatar src={Icon4} className={classes.rankIcon} />住
                    </Row>
                    <Row className={classes.columnRow}>
                      <Avatar src={Icon5} className={classes.rankIcon} />一
                    </Row>
                    <Row className={classes.columnRow}>
                      <Avatar src={Icon6} className={classes.rankIcon} />个
                    </Row>
                    <Row className={classes.columnRow}>
                      <Avatar src={Icon7} className={classes.rankIcon} />很
                    </Row>
                    <Row className={classes.columnRow}>
                      <Avatar src={Icon8} className={classes.rankIcon} />痛
                    </Row>
                    <Row className={classes.columnRow}>
                      <Avatar src={Icon9} className={classes.rankIcon} />点
                    </Row>
                  </Column>
                  <Divider style={{marginTop:'20px',marginBottom:'20px'}}/>
                  <Typography variant="h6" component="h5" style={{marginBottom:"15px",marginTop:'30px'}}>智能问答</Typography>
                  <TextField
                      className={classes.textField}
                      label="你问"
                      variant="outlined"
                      fullWidth={true}
                      id="mui-theme-provider-outlined-input"
                  />
                  <TextField
                      className={classes.textField}
                      label="我答"
                      variant="outlined"
                      fullWidth={true}
                      id="mui-theme-provider-outlined-input"
                  />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </div>
        <div className={classes.pagination}>
          <Pagination
              limit={10}
              offset={this.state.offset}
              total={this.state.total}
              onClick={(event, offset) => this.changePage(offset)}
              otherPageColor="default"
              currentPageColor="secondary"
          />
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

export default withStyles(style)(ResultPage);
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
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { Column,Row, Item } from '@mui-treasury/components/flex';
import { useDynamicAvatarStyles } from '@mui-treasury/styles/avatar/dynamic';
import Filter1Icon from '@material-ui/icons/Filter1';


const style = theme => ({
  main: {
    backgroundColor: '#ffffff',
    minHeight: '100%',
    position: 'absolute',
    width: '100%',
    left: 0,
    top: 0
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
  firstCard: {
    padding: theme.spacing(5),
    backgroundColor: '#ffffff',
    height: '150px',
    marginRight: '40px',
    marginLeft: '40px',
    marginTop: '40px',
    marginBottom: '20px'
  },
  line: {
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
  },
  card: {
    padding: theme.spacing(5),
    backgroundColor: '#ffffff',
    height: '150px',
    margin: '20px 40px'
  },
  content: {
    padding: '0 20px',
    minHeight: 600
  },
  sider: {

  },
  // filter: {
  //   height: '50px',
  //   width: '50%'
  // },
  pagination: {
    margin: '20px auto'
  },
  footer: {
    textAlign: 'center',
    alignItems: 'center',
    width: '100%',
    color: '#000000',
    height: '30px',
    backgroundColor: '#F9F7F7',
    position: 'fixed',
    bottom: 0
  },
  loveIcon: {
    fontSize: '1rem',
    padding: '2px 5px'
  },
  columnRow: {
    margin:'0px 0px 10px 0px'
  }
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
    input: this.props.match.params.input,
    loading: true,
    catalog: -1,
    time: 0
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

    return (
      <div className={classes.main}>
        <NavBar className={classes.navBar} />
        <div className={classes.wrapper}>
          {/*<SimpleTabs style={{marginTop:"100px"}}/>*/}
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
          <Grid container spacing={10}>
            <Grid container xs={8}>
              <Grid container xs={12}>
                <Grid item xs>
                  <div className={classes.firstCard}>
                    <SearchResultItem/>
                  </div>
                </Grid>
              </Grid>
              <Grid container xs={12}>
                <Grid item xs>
                  <div className={classes.line}>
                    <Divider />
                  </div>
                </Grid>
              </Grid>
              <Grid container xs={12}>
                <Grid item xs>
                  <div className={classes.card}>
                    <SearchResultItem/>
                  </div>
                </Grid>
              </Grid>
              <Grid container xs={12}>
                <Grid item xs>
                  <div className={classes.line}>
                    <Divider />
                  </div>
                </Grid>
              </Grid>
              <Grid container xs={12}>
                <Grid item xs>
                  <div className={classes.card}>
                    <SearchResultItem/>
                  </div>
                </Grid>
              </Grid>
              <Grid container xs={12}>
                <Grid item xs>
                  <div className={classes.line}>
                    <Divider />
                  </div>
                </Grid>
              </Grid>
              <Grid container xs={12}>
                <Grid item xs>
                  <div className={classes.card}>
                    <SearchResultItem/>
                  </div>
                </Grid>
              </Grid>
              <Grid container xs={12}>
                <Grid item xs>
                  <div className={classes.line}>
                    <Divider />
                  </div>
                </Grid>
              </Grid>
              <Grid container xs={12}>
                <Grid item xs>
                  <div className={classes.card}>
                    <SearchResultItem/>
                  </div>
                </Grid>
              </Grid>
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
                      <Filter1Icon style={{marginRight:'10px'}}/>精
                    </Row>
                    <Row className={classes.columnRow}>
                      <Filter1Icon style={{marginRight:'10px'}}/>准
                    </Row>
                    <Row className={classes.columnRow}>
                      <Filter1Icon style={{marginRight:'10px'}}/>抓
                    </Row>
                    <Row className={classes.columnRow}>
                      <Filter1Icon style={{marginRight:'10px'}}/>住
                    </Row>
                    <Row className={classes.columnRow}>
                      <Filter1Icon style={{marginRight:'10px'}}/>一
                    </Row>
                    <Row className={classes.columnRow}>
                      <Filter1Icon style={{marginRight:'10px'}}/>个
                    </Row>
                    <Row className={classes.columnRow}>
                      <Filter1Icon style={{marginRight:'10px'}}/>很
                    </Row>
                    <Row className={classes.columnRow}>
                      <Filter1Icon style={{marginRight:'10px'}}/>痛
                    </Row>
                    <Row className={classes.columnRow}>
                      <Filter1Icon style={{marginRight:'10px'}}/>的
                    </Row>
                    <Row className={classes.columnRow}>
                      <Filter1Icon style={{marginRight:'10px'}}/>点
                    </Row>
                  </Column>
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

export default withStyles(style)(ResultPage);
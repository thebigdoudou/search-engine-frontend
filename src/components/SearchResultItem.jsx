import React, { Component } from 'react'
import Card from "@material-ui/core/Card";
import cx from 'clsx';
import makeStyles from '@material-ui/styles/makeStyles';
import Box from '@material-ui/core/Box';
import Link1 from '@material-ui/core/Link';
import {Link} from 'react-router-dom';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Divider from '@material-ui/core/Divider';
import Rating from '@material-ui/lab/Rating';
import ArrowForwardIos from '@material-ui/icons/ArrowForwardIos';
import ModeComment from '@material-ui/icons/ModeComment';
import Favorite from '@material-ui/icons/Favorite';
import Chip from '@material-ui/core/Chip';
import { Row, Item, Column } from '@mui-treasury/components/flex';
import { usePushingGutterStyles } from '@mui-treasury/styles/gutter/pushing';
import { useLabelIconStyles } from '@mui-treasury/styles/icon/label';
import { useRowFlexStyles } from '@mui-treasury/styles/flex/row';
import LinkIcon from "_@material-ui_icons@4.11.2@@material-ui/icons/Link";

const useStyles = makeStyles(({ spacing, palette }) => ({
    card: {
        display: 'flex',
        borderRadius: 16,
    },
    media: {
        width:'auto',
        height:'160px',
        display: 'block',
        flexShrink: 0,
        backgroundColor: palette.grey[200],
        borderRadius: 12,
        boxShadow: '0 2px 8px 0 #c1c9d7, 0 -2px 8px 0 #cce1e9',
        marginRight:'40px'
    },
    rating: {
        verticalAlign: 'text-top',
    },
    content: {
        padding: spacing(0, 2, 0, 0),
        width:'100%'
    },
    heading: {
        fontSize: 17,
        fontWeight: 'bold',
        letterSpacing: '0.5px',
        marginBottom: 5,
        marginRight: spacing(1.5),
        display: 'inline-block',
    },
    body: {
        fontSize: 15,
        color: palette.grey[500],
    },
    divider: {
        margin: spacing(1, 0),
    },
    textFooter: {
        fontSize: 14,
    },
    icon: {
        fontSize: '1.2rem',
        verticalAlign: 'bottom',
    },
    textItem:{
        marginBottom:'10px'
    }
}));
const ReviewCard2Demo = React.memo(function(info) {
    const styles = useStyles();
    const labelStyles = useLabelIconStyles({ linked: true });
    const flexStyles = useRowFlexStyles();
    const data = info.info;
    return (
        <Card className={styles.card} elevation={0}>
            <CardMedia
                className={styles.media}
                component="img"
                image={
                    'https://img1.dongqiudi.com/fastdfs6/M00/08/A4/rBUCgGCBVxeAK_tOAAAeajgrIY0335.jpg'
                }
            />
            <CardContent className={styles.content}>
                <Box mb={1}>
                    <Chip  size="small" label="球员" style={{marginRight:'8px'}}/>
                    <h3 className={styles.heading}>{data.name} </h3>
                    <Rating
                        name={'rating'}
                        value={2}
                        className={styles.rating}
                        size={'small'}
                    />
                </Box>
                <Row >
                    <Column className={styles.body} style={{width:'30%'}}>
                        <Item className={styles.textItem}>
                            俱乐部：{data.club}
                        </Item>
                        <Item  className={styles.textItem}>
                            国籍：{data.country}
                        </Item>
                        <Item  className={styles.textItem}>
                            身高：{data.height}
                        </Item>
                    </Column>
                    <Column className={styles.body} style={{marginRight:'20%'}}>
                        <Item className={styles.textItem}>
                            位置：{data.role}
                        </Item>
                        <Item className={styles.textItem}>
                            年龄：{data.age}
                        </Item>
                        <Item className={styles.textItem}>
                            体重：{data.weight}
                        </Item>
                    </Column>
                    <Column className={styles.body}>
                        <Item className={styles.textItem}>
                            号码：{data.number}
                        </Item>
                        <Item className={styles.textItem}>
                            生日：{data.birthday}
                        </Item>
                        <Item className={styles.textItem}>
                            惯用脚：{data.foot?"左脚":"右脚"}
                        </Item>
                    </Column>
                </Row>
                <div className={flexStyles.parent}>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <Link1
                        className={cx(labelStyles.primaryLink, styles.textFooter)}
                        href={"/player/"+data.id}
                    >
                        Read more <ArrowForwardIos className={labelStyles.icon} />
                    </Link1>
                    {/*<div*/}
                    {/*    className={cx(*/}
                    {/*        flexStyles.rightChild,*/}
                    {/*        flexStyles.parent,*/}
                    {/*        gutterStyles.parent*/}
                    {/*    )}*/}
                    {/*>*/}
                    {/*    <button type={'button'} className={labelStyles.link}>*/}
                    {/*        <ModeComment className={labelStyles.icon} /> 135*/}
                    {/*    </button>*/}
                    {/*    <button type={'button'} className={labelStyles.link}>*/}
                    {/*        <Favorite className={labelStyles.icon} /> 12*/}
                    {/*    </button>*/}
                    {/*</div>*/}
                </div>
            </CardContent>
        </Card>
    );
});
class SearchResultItem extends Component {

    render() {
        return (
            <ReviewCard2Demo info={this.props.data}/>
        )
    }
}

export default SearchResultItem;
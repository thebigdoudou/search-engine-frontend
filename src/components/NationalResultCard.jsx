import React, { Component } from 'react'
import Card from "@material-ui/core/Card";
import cx from 'clsx';
import makeStyles from '@material-ui/styles/makeStyles';
import Box from '@material-ui/core/Box';
import Link1 from '@material-ui/core/Link';
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
        fontSize: 17,
        display: 'inline-block',
        marginBottom: 5,
        color: palette.grey[700],
    },
    content: {
        padding: spacing(0, 2, 0, 0),
        width:'100%'
    },
    heading: {
        fontSize: 17,
        fontWeight: 'bold',
        letterSpacing: '0.5px',
        marginBottom: 0,
        marginRight: spacing(2),
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
const ReviewCard2Demo = React.memo(function() {
    const styles = useStyles();
    const labelStyles = useLabelIconStyles({ linked: true });
    const flexStyles = useRowFlexStyles();
    return (
        <Card className={styles.card} elevation={0}>
            <CardMedia
                className={styles.media}
                component="img"
                image={
                    'https://img1.dongqiudi.com/fastdfs5/M00/6A/80/rB8BO2AbmgCAYbglAABlcqHyDWc494.png'
                }
            />
            <CardContent className={styles.content}>
                <Box mb={1}>
                    <Chip  size="small" label="球队"  style={{marginRight:'8px'}}/>
                    <h3 className={styles.heading}>上海海港</h3>
                    <h3 className={styles.rating}>Shanghai Port</h3>
                </Box>
                <Row>
                    <Column className={styles.body} style={{marginRight:'1%'}}>
                        <Item className={styles.textItem}>
                            成立：2005
                        </Item>
                        <Item  className={styles.textItem}>
                            主场：上海虹口足球场
                        </Item>
                        <Item  className={styles.textItem}>
                            地址：浦东新区沪南公路260..
                        </Item>
                    </Column>
                    <Column className={styles.body} style={{marginRight:'0%'}}>
                        <Item className={styles.textItem}>
                            国家：中国
                        </Item>
                        <Item className={styles.textItem}>
                            容纳：33060人
                        </Item>
                        <Item className={styles.textItem}>
                            邮箱：shenhuaj@shenhuaf..
                        </Item>
                    </Column>
                    <Column className={styles.body} style={{marginRight:'0'}}>
                        <Item className={styles.textItem}>
                            城市：上海
                        </Item>
                        <Item className={styles.textItem}>
                            电话：+86 (21) 5812 8877
                        </Item>
                    </Column>
                </Row>
                <div className={flexStyles.parent}>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <Link1
                        className={cx(labelStyles.primaryLink, styles.textFooter)}
                        href={"/player/4"}
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
class NationalResultCard extends Component {

    render() {
        return (
            <ReviewCard2Demo/>
        )
    }
}

export default NationalResultCard;
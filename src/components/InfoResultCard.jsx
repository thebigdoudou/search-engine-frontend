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
        width:'160px',
        height:'160px',
        display: 'block',
        flexShrink: 0,
        backgroundColor: palette.grey[200],
        borderRadius: 12,
        boxShadow: '0 2px 8px 0 #c1c9d7, 0 -2px 8px 0 #cce1e9',
        marginRight:'40px'
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
        marginBottom:'5px',
        lineHeight:'22px'
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
                    'https://xyimg1.qunliao.info/fastdfs6/M00/27/9B/280x210/crop/-/rBUCgGDrrKaAVjWxAAF-oGEfJBg275.jpg'
                }
            />
            <CardContent className={styles.content}>
                <Box mb={1}>
                    <Chip  size="small" label="资讯" style={{marginRight:'8px'}}/>
                    <h3 className={styles.heading}>温家宝谈U23亚洲杯预选赛：印尼很有实力；这次重新证明自己</h3>
                </Box>
                <Row >
                    <Column className={styles.body} >
                        <Item className={styles.textItem}>
                            时间：{data.birthday}
                        </Item>
                        <Item  className={styles.textItem}>
                            简介：北京时间7月9日，2022年U23亚洲杯预选赛抽签仪式结束，最终中国U23与澳大利亚、印度尼西亚和文莱同在G组，中国队将前往赛地印度尼西亚比赛。对此，小将温家宝在接受《体坛周报》采访时，也发表了自己的看法。
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
class InfoResultCard extends Component {

    render() {
        return (
            <ReviewCard2Demo info={this.props.data}/>
        )
    }
}

export default InfoResultCard;
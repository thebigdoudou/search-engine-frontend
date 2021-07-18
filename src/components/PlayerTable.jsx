import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabPanel from '@material-ui/lab/TabPanel';
import Tabs from '@material-ui/core/Tabs';
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import TableCell from "@material-ui/core/TableCell";
import axios from "axios";

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

export default class PlayerTable extends Component {
    state = {
        value: "0",
        rows: []
    }

    componentDidMount() {
        const that = this
        axios.get('/player/match/' + that.props.id + '/0')
            .then(function (response) {
                that.setState({
                    rows: response.data
                })
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    handleChange = (event, newValue) => {
        const that = this
        axios.get('/player/match/' + that.props.id + '/' + newValue)
            .then(function (response) {
                that.setState({
                    rows: response.data,
                    value: newValue
                })
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    render() {
        const {value} = this.state
        let emptyCaption;
        if(this.state.rows.length === 0) {
            emptyCaption = <caption style={{textAlign: 'center'}}>暂无数据</caption>
        }
        else emptyCaption = <div/>

        return (
            <TabContext value={value}>
                <Tabs
                    variant={'fullWidth'}
                    indicatorColor="primary"
                    value={value}
                    onChange={this.handleChange}
                >
                    {/*<Tab classes={twitterTabsStylesHook.useTabItem()} label={'总计'} value="1"/>*/}
                    {/*<Tab classes={twitterTabsStylesHook.useTabItem()} label={'联赛'} value="2"/>*/}
                    {/*<Tab classes={twitterTabsStylesHook.useTabItem()} label={'杯赛'} value="3"/>*/}
                    {/*<Tab classes={twitterTabsStylesHook.useTabItem()} label={'国家队'} value="4"/>*/}
                    <Tab label={'总计'} value="0"/>
                    <Tab label={'联赛'} value="1"/>
                    <Tab label={'杯赛'} value="2"/>
                    <Tab label={'国家队'} value="3"/>
                </Tabs>
                <TabPanel value="0">
                    <TableContainer component={Paper}>
                        <Table aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell align="center">赛季</StyledTableCell>
                                    <StyledTableCell align="center">俱乐部</StyledTableCell>
                                    <StyledTableCell align="center">上场</StyledTableCell>
                                    <StyledTableCell align="center">首发</StyledTableCell>
                                    <StyledTableCell align="center">进球</StyledTableCell>
                                    <StyledTableCell align="center">助攻</StyledTableCell>
                                    <StyledTableCell align="center">黄牌</StyledTableCell>
                                    <StyledTableCell align="center">红牌</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.state.rows.map((row) => (
                                    <StyledTableRow key={row.season}>
                                        <StyledTableCell component="th" scope="row" align="center">
                                            {row.season}
                                        </StyledTableCell>
                                        <StyledTableCell align="center">{row.club}</StyledTableCell>
                                        <StyledTableCell align="center">{row.play}</StyledTableCell>
                                        <StyledTableCell align="center">{row.start}</StyledTableCell>
                                        <StyledTableCell align="center">{row.goal}</StyledTableCell>
                                        <StyledTableCell align="center">{row.assist}</StyledTableCell>
                                        <StyledTableCell align="center">{row.yellowCard}</StyledTableCell>
                                        <StyledTableCell align="center">{row.redCard}</StyledTableCell>
                                    </StyledTableRow>
                                ))}
                            </TableBody>
                            {emptyCaption}
                        </Table>
                    </TableContainer>
                </TabPanel>
                <TabPanel value="1">
                    <TableContainer component={Paper}>
                        <Table aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell align="center">赛季</StyledTableCell>
                                    <StyledTableCell align="center">俱乐部</StyledTableCell>
                                    <StyledTableCell align="center">上场</StyledTableCell>
                                    <StyledTableCell align="center">首发</StyledTableCell>
                                    <StyledTableCell align="center">进球</StyledTableCell>
                                    <StyledTableCell align="center">助攻</StyledTableCell>
                                    <StyledTableCell align="center">黄牌</StyledTableCell>
                                    <StyledTableCell align="center">红牌</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.state.rows.map((row) => (
                                    <StyledTableRow key={row.season}>
                                        <StyledTableCell component="th" scope="row" align="center">
                                            {row.season}
                                        </StyledTableCell>
                                        <StyledTableCell align="center">{row.club}</StyledTableCell>
                                        <StyledTableCell align="center">{row.play}</StyledTableCell>
                                        <StyledTableCell align="center">{row.start}</StyledTableCell>
                                        <StyledTableCell align="center">{row.goal}</StyledTableCell>
                                        <StyledTableCell align="center">{row.assist}</StyledTableCell>
                                        <StyledTableCell align="center">{row.yellowCard}</StyledTableCell>
                                        <StyledTableCell align="center">{row.redCard}</StyledTableCell>
                                    </StyledTableRow>
                                ))}
                            </TableBody>
                            {emptyCaption}
                        </Table>
                    </TableContainer>
                </TabPanel>
                <TabPanel value="2">
                    <TableContainer component={Paper}>
                        <Table aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell align="center">赛季</StyledTableCell>
                                    <StyledTableCell align="center">杯赛</StyledTableCell>
                                    <StyledTableCell align="center">俱乐部</StyledTableCell>
                                    <StyledTableCell align="center">上场</StyledTableCell>
                                    <StyledTableCell align="center">首发</StyledTableCell>
                                    <StyledTableCell align="center">进球</StyledTableCell>
                                    <StyledTableCell align="center">助攻</StyledTableCell>
                                    <StyledTableCell align="center">黄牌</StyledTableCell>
                                    <StyledTableCell align="center">红牌</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.state.rows.map((row) => (
                                    <StyledTableRow key={row.season}>
                                        <StyledTableCell component="th" scope="row" align="center">
                                            {row.season}
                                        </StyledTableCell>
                                        <StyledTableCell align="center">{row.eventName}</StyledTableCell>
                                        <StyledTableCell align="center">{row.club}</StyledTableCell>
                                        <StyledTableCell align="center">{row.play}</StyledTableCell>
                                        <StyledTableCell align="center">{row.start}</StyledTableCell>
                                        <StyledTableCell align="center">{row.goal}</StyledTableCell>
                                        <StyledTableCell align="center">{row.assist}</StyledTableCell>
                                        <StyledTableCell align="center">{row.yellowCard}</StyledTableCell>
                                        <StyledTableCell align="center">{row.redCard}</StyledTableCell>
                                    </StyledTableRow>
                                ))}
                            </TableBody>
                            {emptyCaption}
                        </Table>
                    </TableContainer>
                </TabPanel>
                <TabPanel value="3">
                    <TableContainer component={Paper}>
                        <Table aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell align="center">赛季</StyledTableCell>
                                    <StyledTableCell align="center">国家队</StyledTableCell>
                                    <StyledTableCell align="center">上场</StyledTableCell>
                                    <StyledTableCell align="center">首发</StyledTableCell>
                                    <StyledTableCell align="center">进球</StyledTableCell>
                                    <StyledTableCell align="center">助攻</StyledTableCell>
                                    <StyledTableCell align="center">黄牌</StyledTableCell>
                                    <StyledTableCell align="center">红牌</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.state.rows.map((row) => (
                                    <StyledTableRow key={row.season}>
                                        <StyledTableCell component="th" scope="row" align="center">
                                            {row.season}
                                        </StyledTableCell>
                                        <StyledTableCell align="center">{row.club}</StyledTableCell>
                                        <StyledTableCell align="center">{row.play}</StyledTableCell>
                                        <StyledTableCell align="center">{row.start}</StyledTableCell>
                                        <StyledTableCell align="center">{row.goal}</StyledTableCell>
                                        <StyledTableCell align="center">{row.assist}</StyledTableCell>
                                        <StyledTableCell align="center">{row.yellowCard}</StyledTableCell>
                                        <StyledTableCell align="center">{row.redCard}</StyledTableCell>
                                    </StyledTableRow>
                                ))}
                            </TableBody>
                            {emptyCaption}
                        </Table>
                    </TableContainer>
                </TabPanel>
            </TabContext>
        );
    }
}
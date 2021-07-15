import React from 'react';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import Tabs from '@material-ui/core/Tabs';
import { twitterTabsStylesHook } from '@mui-treasury/styles/tabs';
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import TableCell from "@material-ui/core/TableCell";

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

function createData(season, team, onCourt, firstRound, score, assist, yellowCard, redCard) {
    return { season, team, onCourt, firstRound, score, assist, yellowCard, redCard };
}

export default function PlayerTable(info) {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const tabsStyles = twitterTabsStylesHook.useTabs();
    const tabItemStyles = twitterTabsStylesHook.useTabItem();
    let rows = info.data
    return (
        <TabContext value={value}>
            <Tabs
                variant={'fullWidth'}
                classes={tabsStyles}
                value={value}
                onChange={handleChange}
            >
                <Tab classes={tabItemStyles} label={'总计'} value="1"/>
                <Tab classes={tabItemStyles} label={'联赛'} value="2"/>
                <Tab classes={tabItemStyles} label={'杯赛'} value="3"/>
                <Tab classes={tabItemStyles} label={'国家队'} value="4"/>
            </Tabs>
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
                            {rows.map((row) => (
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
                    </Table>
                </TableContainer>
            </TabPanel>
            <TabPanel value="2">
                <TableContainer component={Paper}>
                    <Table aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Dessert (100g serving)</StyledTableCell>
                                <StyledTableCell align="right">Calories</StyledTableCell>
                                <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
                                <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
                                <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <StyledTableRow key={row.name}>
                                    <StyledTableCell component="th" scope="row">
                                        {row.name}
                                    </StyledTableCell>
                                    <StyledTableCell align="right">{row.calories}</StyledTableCell>
                                    <StyledTableCell align="right">{row.fat}</StyledTableCell>
                                    <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                                    <StyledTableCell align="right">{row.protein}</StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </TabPanel>
            <TabPanel value="3">
                <TableContainer component={Paper}>
                    <Table aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Dessert (100g serving)</StyledTableCell>
                                <StyledTableCell align="right">Calories</StyledTableCell>
                                <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
                                <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
                                <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <StyledTableRow key={row.name}>
                                    <StyledTableCell component="th" scope="row">
                                        {row.name}
                                    </StyledTableCell>
                                    <StyledTableCell align="right">{row.calories}</StyledTableCell>
                                    <StyledTableCell align="right">{row.fat}</StyledTableCell>
                                    <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                                    <StyledTableCell align="right">{row.protein}</StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </TabPanel>
            <TabPanel value="4">
                <TableContainer component={Paper}>
                    <Table aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Dessert (100g serving)</StyledTableCell>
                                <StyledTableCell align="right">Calories</StyledTableCell>
                                <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
                                <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
                                <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <StyledTableRow key={row.name}>
                                    <StyledTableCell component="th" scope="row">
                                        {row.name}
                                    </StyledTableCell>
                                    <StyledTableCell align="right">{row.calories}</StyledTableCell>
                                    <StyledTableCell align="right">{row.fat}</StyledTableCell>
                                    <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                                    <StyledTableCell align="right">{row.protein}</StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </TabPanel>
        </TabContext>
    );
}
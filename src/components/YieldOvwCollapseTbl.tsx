import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { YieldData, YieldOvwData } from "./Interface";
import Container from "react-bootstrap/Container";
import ResponsiveAppBar from "../components/AppBar";


interface YieldProductStatsProps {
    handleMassUplModalOpen: () => void;
    setMessages: (locale: any) => void;
    ProductData: YieldOvwData;
}

// function createData(
//   name: string,
//   calories: number,
//   fat: number,
//   carbs: number,
//   protein: number,
//   price: number,
// ) {
//   return {
//     name,
//     calories,
//     fat,
//     carbs,
//     protein,
//     price,
//     history: [
//       {
//         date: '2020-01-05',
//         customerId: '11091700',
//         amount: 3,
//       },
//       {
//         date: '2020-01-02',
//         customerId: 'Anonymous',
//         amount: 1,
//       },
//     ],
//   };
// }

// function Row(props: { row: ReturnType<typeof createData> }) {
const Row = (YieldData: YieldData) => {
    // const { row } = props.ProductData.YieldData;
    const [open, setOpen] = React.useState(false);

    return (
        <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {YieldData.Season}
                </TableCell>
                <TableCell align="right">{String(YieldData.ProductCount)}</TableCell>
                {/* <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell> */}
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography sx={{ fontWeight: 'bold' }} variant="h6" gutterBottom component="div">
                                Products
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell sx={{ fontWeight: 'bold' }}>
                                            Product</TableCell>
                                        <TableCell sx={{ fontWeight: 'bold' }}>Total Quantity</TableCell>
                                        <TableCell align="right" sx={{ fontWeight: 'bold' }}>Net Weight</TableCell>
                                        <TableCell align="right" sx={{ fontWeight: 'bold' }}>Avg Weight</TableCell>
                                        <TableCell align="right" sx={{ fontWeight: 'bold' }}>Avg Leaves Count</TableCell>
                                        <TableCell align="right" sx={{ fontWeight: 'bold' }}>Avg Leaves Length</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {YieldData.ProductData.map((item, index) => (
                                        <TableRow key={index}>
                                            <TableCell component="th" scope="row">
                                                {item.Product}
                                            </TableCell>
                                            <TableCell>{String(item.TotalCount)}</TableCell>
                                            <TableCell align="right">{String(item.NetWeight)}</TableCell>
                                            <TableCell align="right">
                                                {String(item.AvgWeight)}
                                            </TableCell>
                                            <TableCell align="right">
                                                {String(item.AvgLeavesCount)}
                                            </TableCell>
                                            <TableCell align="right">
                                                {String(item.AvgLength)}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 3.99),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 4.99),
//   createData('Eclair', 262, 16.0, 24, 6.0, 3.79),
//   createData('Cupcake', 305, 3.7, 67, 4.3, 2.5),
//   createData('Gingerbread', 356, 16.0, 49, 3.9, 1.5),
// ];

// export default function YieldOvwCollapseTbl() {

const YieldOvwCollapseTbl: React.FC<YieldProductStatsProps> = (props) => {
    return (
        <div>
            <ResponsiveAppBar
                handleMassUplModalOpen={props.handleMassUplModalOpen}
                setMessages={props.setMessages}
            ></ResponsiveAppBar>
            <Container>
                <TableContainer component={Paper}>
                    <Table aria-label="collapsible table" size="small">
                        <TableHead>
                            <TableRow>
                                <TableCell />
                                <TableCell sx={{ fontWeight: 'bold' }}>Season</TableCell>
                                <TableCell align="right" sx={{ fontWeight: 'bold' }}>Products Yielded</TableCell>
                                {/* <TableCell align="right">Fat&nbsp;(g)</TableCell>
                        <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                        <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {/* <Row YieldData={props.ProductData.YieldData} AllData={props.ProductData.AllData} /> */}
                            {props.ProductData.YieldData.map((row, index) => (
                                <Row Season={row.Season} ProductData={row.ProductData} ProductCount={row.ProductCount} />
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </div>
    );
}

export default YieldOvwCollapseTbl;
import React from 'react';
import { Typography } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function CardDetail(props) {

    return (
        <div>
            <Typography style={{fontFamily:'sans-serif',fontWeight:'bold'}} variant={'h5'}>
               {props.detail}
            </Typography><hr />
            <div>
                <p style={{fontWeight:'bold'}}>Detail</p>
                 <Table>
                 <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
          </TableRow>
        </TableHead>
                 </Table>
            </div>
        </div>
    );
}

export default CardDetail;
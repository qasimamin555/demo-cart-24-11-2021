import React from 'react';
import {Alert} from '@mui/material';


const Error = props =><Alert severity="error"> {props.children} </Alert>


export default Error
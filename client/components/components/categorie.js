import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function FullWidthGrid() {
  return (
    <Box style={{fontSize:'16px'}} sx={{ flexGrow: 1 ,display: { xs: 'none', md: 'flex' }}} >
      <Grid container spacing={2}>
        <Grid item xs={6} md={11}>
          
         <span style={{cursor:'pointer',fontWeight:'bold',marginLeft:10}}>ALL CATEGORIES</span>
         <span style={{cursor:'pointer',marginLeft:20,fontSize:16}}>Mobile phones</span>
         <span style={{cursor:'pointer',marginLeft:20,fontSize:16}}>Cars</span>
         <span style={{cursor:'pointer',marginLeft:20,fontSize:16}}>Motorcycles</span>
         <span style={{cursor:'pointer',marginLeft:20,fontSize:16}}>House</span>
         <span style={{cursor:'pointer',marginLeft:20,fontSize:16}}>TV-Video-Audio</span>
         <span style={{cursor:'pointer',marginLeft:20,fontSize:16}}>Tabletes</span>
         <span style={{cursor:'pointer',marginLeft:20,fontSize:16}}>Lands</span>
           
        </Grid>
      </Grid>
    </Box>
  );
}

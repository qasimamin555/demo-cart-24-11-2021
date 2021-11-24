import React,{useEffect} from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ImageSlider from '../components/imageSlider';
import CardDetail from '../components/CardDetail';
import Price from '../components/price.js';
import {read,listRelated} from '../Api/productApi';
import ActionAreaCard from '../components/cards';
import {LinearProgress, Typography} from '@mui/material'


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
}));

export default function BasicGrid(props) {
  
  const [product,setProduct] = React.useState({});
  const [suggestions, setSuggestions] = React.useState([]);
  const [progress,stopProgress]=React.useState(false)
  const [error,setError]=React.useState('')


 const loadProduct = (productId) => {
    read({productId: productId}).then((data) => {
      if (data.error) {
        setError(data.error)
      } else {
          setProduct(data);
          stopProgress(true)
     }
      })
    }

  useEffect(() => {
    loadProduct(props.match.params.productId); 
  },[props.match.params.productId])

  useEffect(() => {
    const abortController = new AbortController()
    const signal = abortController.signal

        listRelated({
          productId: props.match.params.productId}, signal).then((data) => {
          if (data.error) {
              setError(data.error)
          } 
            setSuggestions(data)
        })
  return function cleanup(){
    abortController.abort()
  }
}, [props.match.params.productId])

 
  return (
    <div>
      {!progress && <LinearProgress style={{marginTop:'74px'}} />}

    
    
    <Box style={{paddingTop:'100px'}} 
       sx={{ flexGrow: 1 }}  
       sx={{ display: { xs: 'none', md: 'flex' } }}>
     {error?<Typography variant={'h3'}>{error}</Typography>:
      <Grid style={{margin:10}} container spacing={2}>
        <Grid item xs={5}>
          <Item>
            <ImageSlider photo={product.image} title={product.name} />
            </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <CardDetail detail={product.description} />
          </Item>
        </Grid>
        <Grid item  xs={2.5}>
          <Item>
            <Price data={product} />
          </Item>
        </Grid>
        <br />
        { suggestions.length > 0 &&
        <Grid item xs={12}>
               <ActionAreaCard productTitle={'Related products'} products={suggestions} />
        </Grid> }
      </Grid>}
    </Box>
    



    <Box style={{paddingTop:'100px'}} sx={{ flexGrow: 1 }}  sx={{ display: { xs: 'flex', md: 'none' } }}>
    {error?<Typography variant={'h3'}>{error}</Typography>:
      <Grid container spacing={2}>
           <Grid item xs={'15'}>
             <Item>
          <ImageSlider photo={product.image} title={product.name} />
          </Item>
        </Grid>
        <Grid item xs={15}>
          <Item>
            <Price data={product} />
          </Item>
          </Grid> 
        <Grid item xs={15}>
          <Item>
            <CardDetail detail={product.description} />
          </Item>
        </Grid>
        { suggestions.length > 0 &&
        <Grid item xs={12}>
               <ActionAreaCard productTitle={'Related products'} products={suggestions} />
        </Grid> }
      </Grid>}
    </Box>
 
    </div>
  );
}
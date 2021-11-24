import React,{useEffect,useState} from 'react';
import FullWidthGrid from '../components/categorie';
import ActionAreaCard from '../components/cards';
import {Box,Button,Grid,LinearProgress,Copyright,Container, Typography} from '@mui/material';
import {ListLatest} from '../Api/productApi'; 
import shooping from '../images/shooping.jpg';


function Home(props) {

  const [product,setProduct]=useState([])
  const [error,setError]=useState('')
  const shuffleImage = () => {
    return shooping
  }

  useEffect(()=>{
    ListLatest().then((data) => {
      if (data.error) {
        console.log(data)
         setError(data.error)
      }
      setProduct(data);
    })

  },[])


  return (
    <div style={{marginTop:100}}>
{/* 
        <FullWidthGrid /> */}
        
      {/* <Box style={{textAlign:'center'}}>
        <Grid
         >
         <img style={{width:300,borderRadius:'10px'}} src={shooping}/>
        </Grid>
      </Box> */}

      {product.length === 0 ?<div>
        <LinearProgress />
      </div>
        :
      <div>
        {error?<Typography varaint={'h6'}>{error}</Typography>:
        <ActionAreaCard History={props} productTitle={'Fresh Recommendation'} products={product} />
      }</div>}<br />
      {/* <Container xs={12} item style={{backgroundColor:'black'}}>
          <Typography variant={'h6'} color="white">
            This is the Demo of e-commerce website <br />
            which is now pending ...<br />
            Developed by :<div style={{width:200,color:'orange'}}><marquee><i>QASIM AMEEN</i></marquee></div>
          </Typography>
       </Container> */}
    </div>
  );
}

export default Home;
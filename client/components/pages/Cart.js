import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { Button,TextField } from '@mui/material';
import cart from '../components/cart-handler';
import auth from '../Api/auth-helper'
import {sendingEmail} from '../Api/productApi';



function Cart(props) {

  const [cartItems, setCartItems] = React.useState(cart.getCart());
  const [click,setClick] = React.useState(false)
  const [btn,setBtn]= React.useState(false)
  const [value,setValue] = React.useState("")

  const sentEmail = (event) => {
    event.preventDefault();
    const data =  new FormData(event.currentTarget);
    // setBtn(true)
      const email= data.get('email')
      sendingEmail(email)
      .then((result)=>{
        console.log(result)
        if(result.msg === 'success'){
          cart.orderSucess(async()=>{
              await props.history.push('/')
              await cart.itemTotal()
              alert('email sent you successfully')
          })
        }
      })
       .catch((err)=> alert('something wrong in email'))
  }


  const handleChange = index => event => {

    let updatedCartItems = cartItems

    if(event.target.value == 0){
      updatedCartItems[index].quantity = 1
    }else{
      updatedCartItems[index].quantity = event.target.value
    }
    setCartItems([...updatedCartItems])
    cart.updateCart(index, event.target.value)

  }

  const removeItem = index => event =>{
    let updatedCartItems = cart.removeItem(index);

    // if(updatedCartItems.length == 0){
    //   props.setCheckout(false)
    // }
    setCartItems(updatedCartItems)
  } 

  const getTotal = () => {
    return cartItems.reduce((a, b) => {
        return a + (b.quantity*b.product.price)
    }, 0)
  }
  // const getItems = () => {
  //   return cartItems.reduce((a,b)=>{
  //       return (+a.quantity) + (+b.quantity)
  //   })
  // }

    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        color: theme.palette.text.secondary,
      }));

    return (
        <div>
            {cartItems.length > 0 ?

              <Box style={{paddingTop:'100px'}} sx={{ display: { xs: 'none', md: 'flex' } }}>
                 <Grid container spacing={0}>
                   <Grid style={{margin:'20px'}} item xs={6.4}>
                      <Item>
                          <div>
                            <Typography style={{margin:'5 20px',fontWeight:'600'}} variant={'h5'}>
                             Shopping Cart
                             </Typography>

                            <Typography style={{float:'right'}} variant={'h6'}>
                               Price
                               </Typography>
                               <br />
                               
                               <div>
                               {cartItems.map((item,index)=>{

                                  return <div key={index}>
                                    <hr />
                                    <Grid  container spacing={2}>
                                  <Grid item xs={4}>
                                <img className="d-block w-100" src={item.product.image} /> 
                                       </Grid>
                               <Grid item xs={6}>
                                 <Typography variant={'h6'}> 
                                 {item.product.description}
                                  </Typography>
                                   <p>Eligible for FREE Shipping </p>
                                 <div>
                          
                                  {/* <TextField style={{width:'15%',textAlign:'center'}} id="outlined-basic"  /> */}
                                  <input value={item.quantity} onChange={handleChange(index)} style={{width:'13%',outline:'1px solid blue',textAlign:'center'}}  />
                                      
                                  <Button onClick={removeItem(index)} style={{marginLeft:10}}>delete</Button>
                              </div>
                            </Grid>
                                    <Grid item xs={2}>
                                    <Typography style={{textAlign:'right',fontWeight:600,color:'orange'}} variant={'h6'}>
                                     Rs {item.product.price}
                              </Typography>
                         </Grid>
                    </Grid>
                 
                    </div>
                 })}
                </div>
              </div>
            </Item>
        </Grid>

                 <Grid item xs={5}>
                     <Item>
                        <Typography variant={'h6'}>
                        Subtotal : {getTotal()}Rs
                        </Typography><br />
                       <p> Your order qualifies for FREE Shipping. Choose this option at checkout. See details</p>
                       <Button style={{backgroundColor:'orange'}} 
                         onClick={()=>props.history.push('/')}
                        variant="contained">Continue Shopping</Button><hr />
                        {click?
                        <div>
                          <label style={{fontWeight:'bold',fontSize:25}}>enter your email :</label><br /><br />
                         
                         <form onSubmit={sentEmail}> 
                         <TextField name="email" id="email" placeholder="e.g.qasim@gmail.com ..." type="email" required />
                        <Button  type="submit"
                        style={{backgroundColor:'orange',marginLeft:20}} 
                        disabled={btn}
                        variant="contained">Order</Button></form>
                        </div>: <Button style={{backgroundColor:'orange'}} 
                        onClick={()=>setClick(true)}
                        variant="contained" >Proceed to Checkout</Button>
                       }</Item>
                 </Grid>
                
           </Grid>
          </Box>
          :<Typography  sx={{ display: { xs: 'none', md: 'flex' } }} style={{marginTop:200,textAlign:'center',fontWeight:'bold',fontSize:30}}>No any product selected</Typography>}

                     {/* for mobile viewers */}

                    { 
                     cartItems.length > 0 ?   

                       <Box style={{paddingTop:'100px'}} sx={{ display: { xs: 'flex', md: 'none' } }}>
                 <Grid container spacing={1}>
                 <Grid item xs={15}>
                     <Item>
                        <Typography variant={'h6'}>
                        Subtotal ${getTotal()}
                        </Typography><br />
                       <p> Your order qualifies for FREE Shipping. Choose this option at checkout. See details</p>
                       <Button style={{backgroundColor:'orange'}} 
                         onClick={()=>props.history.push('/')}
                        variant="contained">Continue Shopping</Button><hr />
                       {click?
                        <div>
                          <label style={{fontWeight:'bold',fontSize:25}}>enter your email :</label><br /><br />
                         
                         <form onSubmit={sentEmail}> 
                         <TextField name="email" id="email" placeholder="e.g.qasim@gmail.com ..." type="email" required />
                        <Button  type="submit"
                        style={{backgroundColor:'orange',marginLeft:20}} 
                        disabled={btn}
                        variant="contained">Order</Button></form>
                        </div>: <Button style={{backgroundColor:'orange'}} 
                        onClick={()=>setClick(true)}
                        variant="contained" >Proceed to Checkout</Button>}
                        </Item>
                 </Grid>
            
                 {cartItems.map((item,index)=>{    
                 return<div key={index}>
                    <Grid item xs={15}>
                          <div style={{margin:5}}>
                                 <div>
                                  <Grid container spacing={2}>
                                  <Grid item xs={5}>
                                  <img className="d-block w-100" src={item.product.image} /> 
                         </Grid>
                               <Grid item xs={7}>
                                 <Typography variant={'h6'}> 
                                 {item.product.description}
                                  </Typography>
                                   <p>Eligible for FREE Shipping </p>
                         </Grid>
                    </Grid>
                </div>
              </div>
          
        </Grid>
          <Grid xs={15} item>
            <br />
         <div style={{margin:'0 15px',textAlign:'center'}}>
             <input value={item.quantity} onChange={handleChange(index)} style={{width:'20%',outline:'1px solid blue',textAlign:'center'}} type="number"  />
                   
                 <Button onClick={removeItem(index)} style={{marginLeft:10}}>delete</Button>
                </div>
                
              </Grid> 
              <hr />
              </div>})}
                  
           </Grid>
           
          </Box>
 :
   <Typography style={{marginTop:200,textAlign:'center',fontWeight:'bold',fontSize:35}} sx={{ display: { xs: 'flex', md: 'none' } }}>No any product selected</Typography>
   }

     
        </div>
    );
}

export default Cart;
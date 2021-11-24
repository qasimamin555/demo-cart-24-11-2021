import React,{Component} from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link,Redirect } from 'react-router-dom';
import  cart from './cart-handler';

class Price extends Component{
    constructor(){
        super();
        this.state={
                redirect:false
        }
      
    }

      addToCart () {    
       
           cart.addCart(this.props.data, async() => {
              this.setState({redirect:true})  
        })
           
      }
 
    render(){ 
        if(this.state.redirect){
            return (<Redirect to={'/cart'}/>)
        }
    return (
        <div>  
            <Typography variant={'h4'}>
               {this.props.data.price}
            </Typography>
            <div>
                <p>Arrives: Sep 29 - Oct 5</p>
                <Button
                onClick={()=>this.addToCart()}
                style={{textAlign:'center',backgroundColor:'orange'}} 
                variant="contained" >
                     Add to Cart
              </Button>
            </div>
        </div>
    );
}
}


export default Price;

import React,{useEffect} from 'react';
import ActionAreaCard from '../components/cards';

function Search(props) {
    useEffect(()=>{
     console.log(props.location.state)
    },[])
    return (
        <div style={{marginTop:100}}>
            {props.location.state ? 
      <ActionAreaCard productTitle={'Searching Result'} products={props.location.state} />
          :"Loading ..."}
        </div>
    );
}

export default Search;
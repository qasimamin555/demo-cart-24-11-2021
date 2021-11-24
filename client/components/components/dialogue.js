import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PersonIcon from '@mui/icons-material/Person';
import { Typography,IconButton } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import auth from '../Api/auth-helper';
import { useHistory } from "react-router-dom";




export default function BasicMenu(props) {
  let history = useHistory();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      {/* <div
      //  style={{fontSize:'32px'}}
      //   id="basic-button"
      //   aria-controls="basic-menu"
      //   aria-haspopup="true"
      //   aria-expanded={open ? 'true' : undefined}
        // onClick={handleClick}
      > */}
      <MenuItem onClick={handleClick} onClose={handleClose}>
      <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        
        >
           <PersonIcon />
        </IconButton>
        <p>profile</p>
        </MenuItem>
       
      <Menu 
       
       PaperProps={{  
         style: {  
           width: 250
                 },  
      }}
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
          <Typography style={{textAlign:'center',textTransform:'capitalize'}} variant={'h6'}>Hi {
              auth.isAuthenticated() && auth.isAuthenticated().user.name
          }</Typography><hr />
        <MenuItem onClick={()=>{auth.signout(async function(){
          await history.push('/');
          await handleClose()
          await window.location.reload()
        })}}>Sign Out <LockIcon style={{
            position:'absolute',right:'3px'
        }} /></MenuItem>
        
      </Menu>
    </div>
  );
}
import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import olx from './images/olx-logo.png';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import ChatIcon from '@mui/icons-material/Chat';
import Button from '@mui/material/Button';
import UnstyledButtonCustom from './button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import {Link} from 'react-router-dom';
import auth from './Api/auth-helper';
import BasicMenu from './components/dialogue';
import cart from './components/cart-handler';
import PageviewIcon from '@mui/icons-material/Pageview';
import {InputAdornment} from '@mui/material';
import {list} from './Api/productApi';
import { Redirect } from 'react-router-dom';
// import {InputGroup,FormControl} from 'react-bootstrap';




const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function PrimarySearchAppBar(props) {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const [value,setValue] = React.useState("");
  const [direct,Not] = React.useState(false)
  const [datas,setData]= React.useState([])


  const handleChange =  (event) => {
     setValue(event.target.value)
  }


  const search = () => {
    if(value){
      list({
        search: value || undefined
      }).then(async(data) => {
        if (data.error) {
          console.log(data.error)
        } else {
          await setData(data)
          await Not(true);
          
        }
      })
    }
  }
  
  if(direct){
    return (<Redirect  
      to={{
      pathname: "/search",
      state: datas
    }} />)
  }

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      
      <Link style={{textDecoration:'none'}} to={'/cart'}><MenuItem>
        <IconButton onClick={handleMobileMenuClose} size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={cart.itemTotal()} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Cart</p>
      </MenuItem></Link>
      {auth.isAuthenticated()?

        
        <BasicMenu />
         :
      
      <Link style={{textDecoration:"none"}} to={'/signin'}>
      <MenuItem onClick={handleMobileMenuClose}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem></Link>}
    </Menu>
  );

  return (

    <Box  sx={{ flexGrow: 0 }}>
      <AppBar position="fixed" color="default">
        <Toolbar>
          <IconButton
            style={{fontWeight:'bold',color:'orange'}}
            edge="start"
            color="secondary"
            aria-label="open drawer"
            sx={{ mr: 1 }}
          >
            Demo Shopping Cart
              {/* {auth.isAuthenticated()?auth.isAuthenticated().user.name:"amazon"}        */}
              </IconButton>
          {/* <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            MUI
          </Typography> */}
          {/* <Search style={{backgroundColor:'lightgray'}}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="choose your location"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search> */}
{/*           
          <Search 
          sx={{ display: { xs: 'none', md: 'flex' } }}
           style={{backgroundColor:'lightgray',}}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase 
              placeholder="search products.."
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search> */}



         
{/* <TextField sx={{ display: { xs: 'none', md: 'flex' } }} id="outlined-basic" label="Outlined" variant="outlined" />  */}
         {/* <TextField
         style={{width:200}}
         sx={{ display: { xs: 'none', md: 'flex' } }}
         id="outlined-multiline-flexible"
         label="Multiline"
        //  axRows={12}
        />
         <Box sx={{ flexGrow: 0 }} />
         
          {/* <FormControl style={{width:"600px"}} sx={{ m: 1 }}>
          <InputLabel htmlFor="outlined-adornment-amount">enter products....</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            label="enter products...."
          />
        </FormControl> */}
        {/* <FormControl onChange={handleChange} sx={{ m: 1, width: 'auto' }} variant="outlined">
          <InputLabel>search products ...</InputLabel>
          <OutlinedInput
            // id="outlined-adornment-password"
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={search}
                  edge="end"
                >
                  <PageviewIcon  style={{fontSize:40}} />
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl> */} 


          <Box sx={{ flexGrow: 1 }} />
          <Box  sx={{ display: { xs: 'none', md: 'flex' } }}>
            {/* <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="error">
                <ChatIcon />
              </Badge>
            </IconButton> */}
            {/* <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton> */}
          {/* { auth.isAuthenticated() ?
             <BasicMenu />
           :
            <Link style={{textDecoration:'none',color:'black'}} to={'/signin'}>
            <IconButton 
              style={{marginRight:'5px'}}
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle style={{fontSize:'32px'}} />
            </IconButton>
            </Link>
            } */}
            
            <IconButton 
              style={{color:'orange',fontSize:'22px',marginRight:'5px'}}
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
            >
              <Link style={{color:'black'}} to={'/cart'}>
                <Badge badgeContent={cart.itemTotal()} color="error">
                <AddShoppingCartIcon style={{fontSize:'32px'}} />
              </Badge>
              </Link>
              <Typography>
                Cart
              </Typography>
            </IconButton>
           
            {/* <Box sx={{ flexGrow: 1 }} /> */}
                 {/* <span>
                    <Button style={{
                      marginLeft:'15px',
                     border:"2px solid red",
                     borderRadius:"30%",
                     fontSize:'19px',
                     width:'100px'
                   }} varient="primary"> Sell </Button>
                   </span>       */}
          </Box>



          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}

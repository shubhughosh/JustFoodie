import React,{useState} from 'react';
import {Grid,Button,Paper,InputBase,Link,Table,TableContainer,TableCell,TableBody,TableHead,TableRow,List,ListItem,ListItemText,Typography} from '@material-ui/core';
import { fade,makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import Icon from '@material-ui/core/Icon';
import Box from './box';

function createData(product, unit_price, qty, total, delete_data) {
    return { product, unit_price, qty, total, delete_data };
}
  
const rows = [
    createData('Akon', '400', 2, 800, <Icon className="fas fa-times" style={{backgroundColor:'#2c3e50',borderRadius: '100px',color:'white',padding:'3px',fontSize:'15px'}}/>),
    createData('Akon', '400', 2, 800, <Icon className="fas fa-times" style={{backgroundColor:'#2c3e50',borderRadius: '100px',color:'white',padding:'3px',fontSize:'15px'}}/>),
    createData('Akon', '400', 2, 800, <Icon className="fas fa-times" style={{backgroundColor:'#2c3e50',borderRadius: '100px',color:'white',padding:'3px',fontSize:'15px'}}/>),
    createData('Akon', '400', 2, 800, <Icon className="fas fa-times" style={{backgroundColor:'#2c3e50',borderRadius: '100px',color:'white',padding:'3px',fontSize:'15px'}}/>),
  ];

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    search: {
        position: 'relative',
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          width: 'auto',
        },
        borderBottom: "4px solid #bdc3c7",
        height: '40px'
      },
      searchIcon: {
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#95a5a6'
      },
      inputRoot: {
        color: 'inherit',
      },
      inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(2)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
          width: '20ch',
          height: '25px'
        },
      },
      inputInput2: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(2)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
          width: '70ch',
          height: '25px'
        },
      },
    size: {
        height: '81.3vh',
        overflow: "auto",
        marginRight: '5px',
        '&::-webkit-scrollbar': {
            width: "0.4rem",
        },
        // '&::-webkit-scrollbar-track': {
        //     backgroundColor: "grey",
        //     webkitBoxShadow: "inset 0 0 6px rgba(255, 255, 255, 0.3)",
        // },
        '&:hover':{
            '&::-webkit-scrollbar-thumb': {
                webkitBoxShadow: "inset 0 0 6px rgba(0, 0, 0, 0.52)",
                backgroundColor: "#c6c6c6",
                borderRadius: "2px",
            },
        },
    },
    table_size: {
        height: '70vh',
        overflow: "auto",
        marginRight: '5px',
        '&::-webkit-scrollbar': {
            width: "0.4rem",
        },
        // '&::-webkit-scrollbar-track': {
        //     backgroundColor: "grey",
        //     webkitBoxShadow: "inset 0 0 6px rgba(255, 255, 255, 0.3)",
        // },
        '&:hover':{
            '&::-webkit-scrollbar-thumb': {
                webkitBoxShadow: "inset 0 0 6px rgba(0, 0, 0, 0.52)",
                backgroundColor: "#c6c6c6",
                borderRadius: "2px",
            },
        },
    },
    product_size: {
        height: '84.4vh',
        overflow: "auto",
        marginRight: '5px',
        '&::-webkit-scrollbar': {
            width: "0.4rem",
        },
        // '&::-webkit-scrollbar-track': {
        //     backgroundColor: "grey",
        //     webkitBoxShadow: "inset 0 0 6px rgba(255, 255, 255, 0.3)",
        // },
        '&:hover':{
            '&::-webkit-scrollbar-thumb': {
                webkitBoxShadow: "inset 0 0 6px rgba(0, 0, 0, 0.52)",
                backgroundColor: "#c6c6c6",
                borderRadius: "2px",
            },
        },
    },
    fast_cash: {
        width: '50%',
        height: '10%',
        borderRadius: '0px',
    },
    check_out: {
        width: '50%',
        height: '10%',
        borderRadius: '0px',
    },
  }));



const data = 
[{
    'size':3,
    'img':'https://freepngimg.com/thumb/chicken/22064-6-cooked-chicken-transparent-image.png',
    'product_name':"Beautifly Chicken Full"
},
{
    'size':3,
    'img':'https://www.clipartkey.com/mpngs/m/326-3269350_chicken-leg-piece-transparent-background-transparent-chicken-drumstick.png',
    'product_name':"Chicken Drum Sticks"
},
{
    'size':3,
    'img':'https://www.fhmpakistan.com/wp-content/uploads/2019/08/chicken-pakora-png-1.png',
    'product_name':"Chicken Pakora"
},
{
    'size':3,
    'img':'http://pngimg.com/uploads/fries/fries_PNG35.png',
    'product_name':"French Fries"
},
{
    'size':3,
    'img':'https://www.nicepng.com/png/detail/21-211113_sweet-spicy-chicken-spicy-chicken-wings-png.png',
    'product_name':"Spicy Wings"
},
{
    'size':3,
    'img':'https://5.imimg.com/data5/EM/QO/MY-764091/sweet-corn-soup-500x500.png',
    'product_name':"Corn Soup"
},
{
    'size':3,
    'img':'https://www.pngitem.com/pimgs/m/121-1219952_hot-and-sour-vegetable-soup-veg-hot-sour.png',
    'product_name':"Hot and Sour Soup"
},
{
    'size':3,
    'img':'https://cdn.shortpixel.ai/client/q_glossy,ret_img/https://www.positivenewstrends.com/wp-content/uploads/2018/12/Grilled-fish-fingers.png',
    'product_name':"Finger Fish"
},
{
    'size':3,
    'img':'https://freepngimg.com/thumb/chicken/22064-6-cooked-chicken-transparent-image.png',
    'product_name':"Beautifly Chicken Full"
},
{
    'size':3,
    'img':'https://www.clipartkey.com/mpngs/m/326-3269350_chicken-leg-piece-transparent-background-transparent-chicken-drumstick.png',
    'product_name':"Chicken Drum Sticks"
},
{
    'size':3,
    'img':'https://www.fhmpakistan.com/wp-content/uploads/2019/08/chicken-pakora-png-1.png',
    'product_name':"Chicken Pakora"
},
{
    'size':3,
    'img':'http://pngimg.com/uploads/fries/fries_PNG35.png',
    'product_name':"French Fries"
},
{
    'size':3,
    'img':'https://www.nicepng.com/png/detail/21-211113_sweet-spicy-chicken-spicy-chicken-wings-png.png',
    'product_name':"Spicy Wings"
},
{
    'size':3,
    'img':'https://5.imimg.com/data5/EM/QO/MY-764091/sweet-corn-soup-500x500.png',
    'product_name':"Corn Soup"
},
{
    'size':3,
    'img':'https://www.pngitem.com/pimgs/m/121-1219952_hot-and-sour-vegetable-soup-veg-hot-sour.png',
    'product_name':"Hot and Sour Soup"
},
{
    'size':3,
    'img':'https://cdn.shortpixel.ai/client/q_glossy,ret_img/https://www.positivenewstrends.com/wp-content/uploads/2018/12/Grilled-fish-fingers.png',
    'product_name':"Finger Fish"
},
];


export default function Layout(){
    const classes = useStyles();
    const [box,setbox] = useState(data);
    return (
        <React.Fragment>
            <Grid container>
                <Grid item xs={2} style={{borderRight: "4px solid #bdc3c7"}}>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                        placeholder="Search category here…"
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                    <List className={classes.size}>
                        <ListItem button>
                            <ListItemText><span style={{fontFamily: 'Quicksand'}}>All Products</span></ListItemText>
                        </ListItem>
                        <ListItem button>
                            <ListItemText><span style={{fontFamily: 'Quicksand'}}>Staters</span></ListItemText>
                        </ListItem>
                        <ListItem button>
                            <ListItemText><span style={{fontFamily: 'Quicksand'}}>Sea Food</span></ListItemText>
                        </ListItem>
                        <ListItem button>
                            <ListItemText><span style={{fontFamily: 'Quicksand'}}>Soups</span></ListItemText>
                        </ListItem>
                        <ListItem button>
                            <ListItemText><span style={{fontFamily: 'Quicksand'}}>Nodels</span></ListItemText>
                        </ListItem>
                        <ListItem button>
                            <ListItemText><span style={{fontFamily: 'Quicksand'}}>Indian Gravy</span></ListItemText>
                        </ListItem>
                        <ListItem button>
                            <ListItemText><span style={{fontFamily: 'Quicksand'}}>Plan Rice</span></ListItemText>
                        </ListItem>
                        <ListItem button>
                            <ListItemText><span style={{fontFamily: 'Quicksand'}}>Indian Rice</span></ListItemText>
                        </ListItem>
                        <ListItem button>
                            <ListItemText><span style={{fontFamily: 'Quicksand'}}>Boneless Gravies</span></ListItemText>
                        </ListItem>
                        <ListItem button>
                            <ListItemText><span style={{fontFamily: 'Quicksand'}}>Chicken With Bone</span></ListItemText>
                        </ListItem>
                        <ListItem button>
                            <ListItemText><span style={{fontFamily: 'Quicksand'}}>Mutton Gravies</span></ListItemText>
                        </ListItem>
                        <ListItem button>
                            <ListItemText><span style={{fontFamily: 'Quicksand'}}>B.B.Q</span></ListItemText>
                        </ListItem>
                        <ListItem button>
                            <ListItemText><span style={{fontFamily: 'Quicksand'}}>Salad Bar</span></ListItemText>
                        </ListItem>
                    </List>

                </Grid>
                <Grid item xs={6} style={{borderRight: "4px solid #bdc3c7"}}>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                        placeholder="Search products here…"
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput2,
                        }}
                        inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>

                    <Grid container spacing={1} className={classes.product_size}>
                    
                        {box.map((value,key) => (
                            <Box key={key} size={value.size} image={value.img} product_name={value.product_name}/>
                        ))}
                    </Grid>

                </Grid>
                <Grid item xs={4}>
                <TableContainer component={Paper} className={classes.table_size}>
                    <Table stickyHeader>
                        <TableHead>
                        <TableRow style={{height: 42, borderBottom: "4px solid #bdc3c7"}}>
                            <TableCell style={{padding: "0px 16px",borderRight: "4px solid #bdc3c7"}}>Product Name</TableCell>
                            <TableCell style={{padding: "0px 16px",borderRight: "4px solid #bdc3c7"}} align="center">Unit price</TableCell>
                            <TableCell style={{padding: "0px 16px",borderRight: "4px solid #bdc3c7"}} align="center">Qty</TableCell>
                            <TableCell style={{padding: "0px 16px",borderRight: "4px solid #bdc3c7"}} align="center">Total</TableCell>
                            <TableCell style={{padding: "0px 16px"}} align="center">Delete</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {rows.map((row) => (
                            <TableRow hover style={{height: 48}}>
                            <TableCell style={{padding: "0px 16px"}} component="th" scope="row">
                                {row.product}
                            </TableCell>
                            <TableCell style={{padding: "0px 16px"}} align="center">{row.unit_price}</TableCell>
                            <TableCell style={{padding: "0px 16px"}} align="center">{row.qty}</TableCell>
                            <TableCell style={{padding: "0px 16px"}} align="center">{row.total}</TableCell>
                            <TableCell style={{padding: "0px 16px"}} align="center"><Link href='#' style={{textDecoration: 'none'}}>{row.delete_data}</Link></TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                    </TableContainer>
                    <Typography variant="h4" color="primary" style={{padding: '17.3px'}}><span style={{color: '#e67e22'}}>Total:</span> 842/-</Typography>
                    <Button className={classes.fast_cash} style={{background: '#e67e22',color: 'white'}}>Fast Cash &nbsp;<Icon className="fas fa-bolt"/></Button>
                    <Button variant="contained" color="primary" className={classes.check_out}>Check Out &nbsp;<Icon className="fas fa-shopping-cart" style={{width: "35px"}}/></Button>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}
import React from 'react';
import { Grid, Card,CardMedia,Link } from '@material-ui/core';

const Box = (props) => {
    return (
        <Grid item xs={props.size} style={{padding: '8px',marginTop: '10px'}}>
            <Link href='#' style={{textDecoration: 'none'}}>
                <Card style={{border: '1px solid #bdc3c7',borderRadius: '0px'}}>
                    <CardMedia component="img" image={props.image} style={{width: '200px',height:'100px'}}/>
                    <p style={{margin: '10px'}}><small>{props.product_name}</small></p>
                </Card>
            </Link>
        </Grid>
    )
}

export default Box;
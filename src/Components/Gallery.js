import React from 'react';
import {Container} from 'react-bootstrap';
import "./Gallery.css";
import FirstCarousel from "./FirstCarousel.jpg";
import Image1 from "./GalleryImg/Image1.jpg";
import Image2 from "./GalleryImg/Image2.jpg";
import Image3 from "./GalleryImg/Image3.jpg";
import Image4 from "./GalleryImg/Image4.jpg";
import Image5 from "./GalleryImg/Image5.jpg";
import Image6 from "./GalleryImg/Image6.jpg";
import Image7 from "./GalleryImg/Image7.jpg";
import Image8 from "./GalleryImg/Image8.jpg";
import Image9 from "./GalleryImg/Image9.jpg";
import Image10 from "./GalleryImg/Image10.jpg";
import Image11 from "./GalleryImg/Image11.jpg";
import Image12 from "./GalleryImg/Image12.jpg";
import Image13 from "./GalleryImg/Image13.jpg";
import Image14 from "./GalleryImg/Image14.jpg";
import Image15 from "./GalleryImg/Image15.jpg";
import Image31 from "./GalleryImg/Image31.jpg";
import Image32 from "./GalleryImg/Image32.jpg";
import Image33 from "./GalleryImg/Image33.jpg";
import Image34 from "./GalleryImg/Image34.jpg";
import Image35 from "./GalleryImg/Image35.jpg";
import Image36 from "./GalleryImg/Image36.jpg";
import {Grid, rgbToHex} from '@material-ui/core';
function Gallery() {
    return (
        <Container> 
                 
            <Grid container direction="row" alignItems="center" justify="center" >
                
                <Grid item xs={12} sm={12} md={4} lg={3} xl={3} >
                   
            <img className="gallery hovering" src={Image4} alt="image"/>
            
            </Grid>
           
            <Grid item xs={12} sm={12} md={4} lg={3} xl={3} >
        <img className="gallery hovering" src={Image2} alt="image"/>
        
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={3} xl={3} >
            
        <img className="gallery hovering" src={Image3} alt="image"/>
        
        
        </Grid>
        </Grid>
        <Grid container direction="row" alignItems="center" justify="center">
                <Grid item xs={12} sm={12} md={4} lg={3} xl={3} >
                    
            <img className="gallery hovering" src={Image1} alt="image"/>
            
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={3} xl={3} >
        <img className="gallery hovering" src={Image6} alt="image"/>
        
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={3} xl={4} >
        <img className="gallery hovering" src={Image5} alt="image"/>
        
        </Grid>
        </Grid>
        <Grid container direction="row" alignItems="center" justify="center">
                <Grid item xs={12} sm={12} md={4} lg={3} xl={3} >
                    
            <img className="gallery hovering" src={Image14} alt="image"/>
            
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={3} xl={3} >
        <img className="gallery hovering" src={Image8} alt="image"/>
        
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={3} xl={4} >
        <img className="gallery hovering" src={Image9} alt="image"/>
        
        </Grid>
        </Grid>
        <Grid container direction="row" alignItems="center" justify="center">
                <Grid item xs={12} sm={12} md={4} lg={3} xl={3} >
                    
            <img className="gallery hovering" src={Image10} alt="image"/>
            
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={3} xl={3} >
        <img className="gallery hovering" src={Image11} alt="image"/>
        
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={3} xl={4} >
        <img className="gallery hovering" src={Image34} alt="image"/>
        
        </Grid>
        </Grid>
        <Grid container direction="row" alignItems="center" justify="center">
                <Grid item xs={12} sm={12} md={4} lg={3} xl={3} >
                    
            <img className="gallery hovering" src={Image13} alt="image"/>
           
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={3} xl={3} >
        <img className="gallery hovering" src={Image33} alt="image"/>
        
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={3} xl={4} >
        <img className="gallery hovering" src={Image15} alt="image"/>
        
        </Grid>
        </Grid>
        <Grid container direction="row" alignItems="center" justify="center" >
                
                <Grid item xs={12} sm={12} md={4} lg={3} xl={3} >
                   
            <img className="gallery hovering" src={Image35} alt="image"/>
            
            </Grid>
           
            <Grid item xs={12} sm={12} md={4} lg={3} xl={3} >
        <img className="gallery hovering" src={Image31} alt="image"/>
        
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={3} xl={3} >
            
        <img className="gallery hovering" src={Image32} alt="image"/>
        
        
        </Grid>
        </Grid>
        <Grid container direction="row" alignItems="center" justify="center" >
                
                <Grid item xs={12} sm={12} md={4} lg={3} xl={3} >
                   
            <img className="gallery hovering" src={Image7} alt="image"/>
            
            </Grid>
           
            <Grid item xs={12} sm={12} md={4} lg={3} xl={3} >
        <img className="gallery hovering" src={Image12} alt="image"/>
        
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={3} xl={3} >
            
        <img className="gallery hovering" src={Image36} alt="image"/>
        
        
        </Grid>
        </Grid>
        </Container>
    )
}
 export default Gallery

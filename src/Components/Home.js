
import React from 'react'
import {Carousel } from 'react-bootstrap'
import './Home.css'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {display} from '@material-ui/system';
import Box from '@material-ui/core/Box';
import {Grid, rgbToHex} from '@material-ui/core';
import FirstCarousel from "./FirstCarousel.jpg";
import Image2 from "./Image2.jpg";
import Image3 from "./Image3.jpg"; 
import Image4 from "./Image4.jpg";
import Image5 from "./Image5.jpg";
import Image6 from "./Image6.jpg";
import Image17 from "./GalleryImg/Image17.jpg";
import Image16 from "./GalleryImg/Image16.jpg";
import Image19 from "./GalleryImg/Image19.jpg";
import Image20 from "./GalleryImg/Image20.jpg";
import Image21 from "./GalleryImg/Image21.jpg";
import Image22 from "./GalleryImg/Image22.jpg";
import Image23 from "./GalleryImg/Image23.jpg";
import Image24 from "./GalleryImg/Image24.jpg";
import Image25 from "./GalleryImg/Image25.jpg";
import Image26 from "./GalleryImg/Image26.jpg";
import Image27 from "./GalleryImg/Image27.jpg";
import Image28 from "./GalleryImg/Image28.jpg";
import Image29 from "./GalleryImg/Image29.jpg";
import Image30 from "./GalleryImg/Image30.jpg";
const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 250,
    },
  });
function Home() {
    const classes = useStyles();
    return (
        <>
        <div className="container Textbeforecarousel"  style={{paddingTop:70}}>
                Santhi Nursery
        </div>
        <div className="container" style={{paddingTop:20,textEmphasisColor:'white'}}>
          <div className="container1">
        <Carousel style={{backgroundColor:'black'}}>
  <Carousel.Item interval={3000}>
    <Grid container direction="row" alignItems="center" justify="center">
      <Grid item xs={12} md={6} >
    <img
      className="first1"
      src={FirstCarousel}
      alt="First slide"
      width={50}
      height={500}
      style={{}}      
    />
    </Grid>
    </Grid>
    <Carousel.Caption>
      
      <h3>Santhi Nursery</h3>
      <p>We supply healthy saplings to your doorstep</p>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={3000}>
    <img
    
      className="d-block w-100"
      src={Image2}
      alt="Second slide"
      
      
    />
    <Carousel.Caption>
      
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={3000}>
    <img
      className="d-block w-100"
      src={Image6}
      alt="Third slide"
      
    />
    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={3000}>
    <img
      className="d-block w-100"
      src={Image3}
     
      alt="Second slide"
      
    />
    <Carousel.Caption>
      <h3>Santhi Nursery</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={3000}>
    <img
      className="d-block w-100"
      src={Image4}
      alt="Third slide"
      
    />
    <Carousel.Caption>
      <h3>Santhi Nursery</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={3000}>
    <img
      className="d-block w-100"
      src={Image5}
      alt="Third slide"
      
    />
    <Carousel.Caption>
      <h3>Santhi Nursery</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
        <h1 className="Textaftercarousel container">వృక్షో రక్షతి రక్షితః</h1>
        </div>
        <div className="container" styles={{}}>
            <h3 style={{textAlign:'center',paddingTop:20}}>Our Products</h3>
        <Grid container direction="row" alignItems="center" justify="center">
          <Grid item xs={12} sm={6} md={6} lg={4} className="cards">
          <Card className={classes.root} >
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={Image20}
          
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <a href="./Gallery">
        <Button color="primary">
          See More
        </Button>
        </a>
      </CardActions>
    </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4} className="cards">
          <Card className={classes.root} >
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={Image16}
          
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <a href="./Gallery">
        <Button color="primary">
          See More
        </Button>
        </a>
      </CardActions>
    </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4} className="cards">
          <Card className={classes.root} >
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={Image21}
          
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <a href="./Gallery">
        <Button color="primary">
          See More
        </Button>
        </a>
      </CardActions>
    </Card>
          </Grid>
        </Grid>
        <Grid container direction="row" alignItems="center" justify="center">
          <Grid item xs={12} sm={6} md={6} lg={4} className="cards">
          <Card className={classes.root} >
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={Image24}
          
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <a href="./Gallery">
        <Button color="primary">
          See More
        </Button>
        </a>
      </CardActions>
    </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4} className="cards">
          <Card className={classes.root} >
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={Image22}
          
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <a href="./Gallery">
        <Button color="primary">
          See More
        </Button>
        </a>
      </CardActions>
    </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4} className="cards">
          <Card className={classes.root} >
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={Image23}
          
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <a href="./Gallery">
        <Button color="primary">
          See More
        </Button>
        </a>
      </CardActions>
    </Card>
          </Grid>
        </Grid>
        <Grid container direction="row" alignItems="center" justify="center">
          <Grid item xs={12} sm={6} md={6} lg={4} className="cards">
          <Card className={classes.root} >
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={Image25}
          
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <a href="./Gallery">
        <Button color="primary">
          See More
        </Button>
        </a>
      </CardActions>
    </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4} className="cards">
          <Card className={classes.root} >
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={Image26}
          
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <a href="./Gallery">
        <Button color="primary">
          See More
        </Button>
        </a>
      </CardActions>
    </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4} className="cards">
          <Card className={classes.root} >
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={Image27}
          
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <a href="./Gallery">
        <Button color="primary">
          See More
        </Button>
        </a>
      </CardActions>
    </Card>
          </Grid>
        </Grid>
        <Grid container direction="row" alignItems="center" justify="center">
          <Grid item xs={12} sm={6} md={6} lg={4} className="cards">
          <Card className={classes.root} >
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={Image28}
          
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <a href="./Gallery">
        <Button color="primary">
          See More
        </Button>
        </a>
      </CardActions>
    </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4} className="cards">
          <Card className={classes.root} >
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={Image29}
          
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <a href="./Gallery">
        <Button color="primary">
          See More
        </Button>
        </a>
      </CardActions>
    </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4} className="cards">
          <Card className={classes.root} >
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={Image30}
          
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <a href="./Gallery">
        <Button color="primary">
          See More
        </Button>
        </a>
      </CardActions>
    </Card>
          </Grid>
        </Grid>
    
    </div>
    
    
    
    
        
        </>
    )
}

export default Home

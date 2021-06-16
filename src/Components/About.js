import React from 'react'
import  'bootstrap/dist/css/bootstrap.css'; 
import "./About.css"
import {Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {Container} from 'react-bootstrap';
import FirstCarousel from "./FirstCarousel.jpg";
import { red } from '@material-ui/core/colors';

function About() {
      
    return (
        <>
        <Container>
        <Grid>
          <Grid item xs={12} lg={3}>
           <img className="aboutImage" style={{paddingTop:90}}
           src={FirstCarousel} alt="Award Image" />
         </Grid>
         </Grid>
        
        
        <Grid  style={{paddingTop:20}}>
            <Grid item xs={12} md={12}>
              
           Santhi Nursery ( Kadiyapulanka Nurseries , Kadiyam Nursery) is well known as Santhi Nursery located at Kadiyapulanka village in Kadiyam Mandal of Andhra Pradesh,India.<br /> <br /> <br />

           Santhi Nursery is a well-established name in horticulture industry in India. From farms in 9 different locations, Santhi Nursery breeds and grows a complete line of plants.<br /> <br /> <br />

           Santhi Nursery is a wholesale nursery that extends its services to individuals, landscapers, and other retail nurseries .We provide great quality plants and reliable services at a competitive and affordable prices.<br /> <br /> <br />

            We take pride in the quality and value of our plants and services. And we make every effort to ensure that they measure up to the highest possible standards.<br />
            Being receptive to new ideas and a close collaboration with the clients, are the keys to the success of Santhi Nursery. Creativity in all its aspects forms the basis of the success.<br />
            <br  />
            <br />
            </Grid>
            <Grid item>
                <h5>Products</h5>
               Santhi Nursery is engaged in cultivating and supplying a wide range of nursery plants. <br />In our collection, we offer avenue Plants , bamboo’s, flowering plants, fruit plants, foliage plants, ornamental plants, palm plants and trees. Our wide collection meets the demands of horticulture and farming sector and is known for excellent flowering and used for decorative and other purposes. Plants includes, but is not limited to:<br /><br />
                <ul>
                    <li>
                    Avenue plants</li><br />
                   <li>Bamboo’s & Grasses</li><br />
                    <li>Flowering plants</li><br />
                    <li>Fruit plants,</li><br />
                    <li>Foliage</li><br />
                   <li> Ornamental</li><br />
                    <li>Palms
                    & Trees
                    </li><br />
                </ul>

            </Grid>
            <Grid item xs={12}>
              <h5>Fruit Plants</h5>
              <p>When it comes to offering the finest quality of fruits plants, Santhi Nursery is counted on top of the list. The array of Fruit Trees Plants supplied by us includes Mango of all varieties,Coconut,Guava,Sapota,Jackfruit Musambi,Orange,Pomelo,Lime,Sweet lemon & Pomegranate etc. Besides, we also offer Coconut Plants of the best quality. Our Fruit Plants are very high yielding in nature. In addition to this, we are one of the leading Fruit Plants Suppliers Nursery in the country. You are always welcome to visit our Nursery and check the large scale cultivation of fruit plants.</p>
            </Grid>
            <Grid item>
              <h5>Some of our fruit varieties are:</h5>
              <ul>
              <li>Mango</li>
              <br />
              <li>Coconut</li>
              <br />
              <li>Guava</li>
              <br />
              <li>Sapota</li>
              <br />
              <li>Jackfruit</li>
              <br />
              <li>Musambi</li>
              <br />
              <li>Orange</li>
              <br />
              <li>Pomelo</li>
              <br />
              <li>Lime</li>
              <br />
              <li>Sweet lemon</li>
              <br />
              <li>Pomegranate etc. </li>
              </ul>
            </Grid>
        </Grid>
        </Container>


        </>
    )
}

export default About

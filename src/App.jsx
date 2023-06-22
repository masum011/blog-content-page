
import {React,useState} from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { Typography,Button } from '@mui/material'
import imglogo from '../src/assets/aboutus/material-symbols_image-rounded.png'
import card1 from '../src/assets/aboutus/card1.png'
import card2 from '../src/assets/aboutus/card2.png'
import card3 from '../src/assets/aboutus/card3.png'
import card4 from '../src/assets/aboutus/card4.png'
import emp1 from '../src/assets/aboutus/aston.png'
import emp2 from '../src/assets/aboutus/allen.png'
import emp3 from '../src/assets/aboutus/bailey.png'
import emp4 from '../src/assets/aboutus/barmby.png'
import emp5 from '../src/assets/aboutus/abbott.png'
import emp6 from '../src/assets/aboutus/ashurst.png'
import partners1 from '../src/assets/aboutus/partners1.png'
import partners2 from '../src/assets/aboutus/partners2.png'
import partners3 from '../src/assets/aboutus/partners3.png'
import word from '../src/assets/aboutus/word_dev.png'
import EmpCard from './component/aboutUs/EmpCard';
import CopyrightIcon from '@mui/icons-material/Copyright';
import './App.css'
 export default function App() {
  const [textColor, setTextColor] = useState(null);

  const changeTextColor = () => {
    setTextColor('white');
  };

  const images = [
    "https://www.groupdiscussionideas.com/wp-content/uploads/2021/09/teamwork-vs-individual-work.jpg",
    "https://www.groupdiscussionideas.com/wp-content/uploads/2021/09/teamwork-vs-individual-work.jpg",
    "https://www.groupdiscussionideas.com/wp-content/uploads/2021/09/teamwork-vs-individual-work.jpg",
];

  return (
    <>  
    <div className="header-content bg-black h-screen flex items-center justify-center ">
        <div className="content-div w-2/4 m-auto text-white">
          <div className="word-dev-img">
          <img src={word} alt='word-dev-lab' className='m-auto '/>
          </div>
          <Typography variant='h4' sx={{fontSize:"40px",textAlign:"center"}} >RyanTech01 Alliance, Helping Professionals</Typography>
          <div className="text flex justify-evenly w-2/4 m-auto mt-8">
            <Button variant='text' sx={{textTransform:"none",color:"white"}}>Learn</Button>
            <Button variant='text'sx={{textTransform:"none",color:""}} >Lead</Button>
            <Button variant='text'sx={{textTransform:"none",color:""}} >Succeed</Button>
          </div>
          <div className="mote-text  w-2/4 m-auto mt-8">
            <Typography >We enable people to Nurture, Explore, Think and Learn through our extensive programs.</Typography>
          </div>
        </div>
    </div>

    <div className="bg-[#1c1f24]  h-screen">
      <div className="head-number-cntent h-2/4 flex justify-evenly items-center">
        <div className="number-div text-white center">
        <Typography variant='h3'>+5000 <span>hrs</span></Typography>
        <p>  of Training Delivered</p>
      </div>
        <div className="number-div text-white">
        <Typography variant='h3'>+600</Typography>
        <p> Happy Professionals</p>
      </div>
        <div className="number-div text-white">
        <Typography variant='h3'>3</Typography>
        <p>Countries</p>
      </div>
        <div className="number-div text-white">
        <Typography variant='h3'>+15</Typography>
        <p>Corporate Clients</p>
      </div>
      </div>
      <div className="text-with-image h-2/4 flex justify-evenly items-center ">
        <div className="text-left w-2/4 px-12">
          <Typography variant='h4' sx={{color:"#1A5AFA"}}>RyanTech01 Alliance.<span className='text-white'>Us</span> </Typography>
          <Typography sx={{color:"#CCCCCC"}}>RyanTech01 Alliance is an emerging Information technology consulting and training company headquartered in Gurugram. We conduct career transformation workshops & training in Artificial Intelligence, Machine Learning, Deep Learning, Agile, DevOps, Big Data, Blockchain, Software Test Automation, Robotics Process Automation, and other cutting edge technologies.</Typography>
        </div>
        <div className="img-logo-right w-2/4 ">
            <img src={imglogo} alt='logo' className='m-auto'/>
        </div>
      </div>
    </div>

    <div className="cardsection h-screen">
      <div className="card-section h-full flex justify-evenly items-center">
        <div className="text-left w-2/4 px-12">
          <Typography variant='h4' sx={{color:"#1A5AFA"}}>Values. <span className='text-white'> D.I.C.E</span> </Typography>
          <Typography className='text-white'>WE CELEBRATE DIFFERENCES</Typography>
          <Typography sx={{color:"#CCCCCC"}}>RyanTech01 Alliance is an emerging Information technology consulting and training company headquartered in Gurugram. We conduct career transformation workshops & training in Artificial Intelligence, Machine Learning, Deep Learning, Agile, DevOps, Big Data, Blockchain, Software Test Automation, Robotics Process Automation, and other cutting edge technologies.</Typography>
        </div>
        <div className="img-logo-right w-2/4 flex  justify-evenly ">
            <div className="card cursor-pointer">
            <img src={card1} alt='card' /><br /><br />
            <img src={card2} alt='card'/>
            </div>
            <div className="card cursor-pointer">
            <img src={card3} alt='card'/><br /><br />
            <img src={card4} alt='card'className='' style={{backgroundColor: textColor}} onClick={changeTextColor}/>
            </div>
        </div>
      </div>
    </div>

    <div className="page4 bg-white h-screen">
    <div className="card-section h-full flex justify-evenly items-center">
        <div className="text-left w-2/4 px-12">
        <Slide autoplay={true} arrows={false} indicators={true}>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[0]})` }}>
                    <span></span>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[1]})` }}>
                    <span></span>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[2]})` }}>
                    <span></span>
                </div>
            </div>
        </Slide>
        </div>
        <div className="img-logo-right w-2/4   flex  justify-evenly p-12 ">
            <div className="text-content">
              <Typography variant='h3'  sx={{color:"#1A5AFA"}}>Work Culture.
                <br />
                <span className='text-black'> How we work</span>
              </Typography>
           <Typography className='pr-16 mt-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus feugiat in ante metus dictum at. Dolor sit amet consectetur adipiscing</Typography>
           {/* <Button variant='contained' color='primary' className='px-8 mt-8' sx={{textTransform:"none"}}>Join Us</Button> */}
           <button style={{backgroundColor:"#1A5AFA",padding:"0.5rem",color:"white"}} className='px-12 rounded mt-8'>Join Us </button>
            </div>
        </div>
      </div>

    </div>

    <div className="our-team-member px-12">
    <Typography variant='h3'  sx={{color:"#1A5AFA"}}>Our Team. 
                <span className='text-black'> Our Family</span>
              </Typography>
              <div className="text-emp w-11/12 my-8"> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus feugiat in ante metus dictum at. Dolor sit amet consectetur adipiscing</p></div>
           
            <div className="card-main-div ">
              <div className="card-section1 flex justify-between">
                  <EmpCard photo={emp1} name="J. Aston"/>
                  <EmpCard photo={emp2} name="R. Allen"/>
                  <EmpCard photo={emp3} name="H. Bailey"/>
             </div><br />
              <div className="card-section1 flex justify-between">
                  <EmpCard photo={emp4} name="N. Barmby"/>
                  <EmpCard photo={emp5} name="W. Abbott"/>
                  <EmpCard photo={emp6} name="W. Ashurst"/>
             </div>
            </div>
    </div><br /><br />
    <div className="our-partners h-screen px-12 flex items-center justify-center ">
      <div className="div-vetical-middle">

      <div className="text-div">
    <Typography variant='h3'  sx={{color:"#1A5AFA"}}>Our Partners. 
                <span className='text-black'> Our Alliance </span>
              </Typography><br />
           <Typography className='pr-16 my-8 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Risus feugiat in ante metus dictum at. Dolor sit amet consectetur adipiscing</Typography>
      </div>

        <div className="partners-card flex justify-between mt-12">
          <img src={partners1} alt='our partners'/>
          <img src={partners2} alt='our partners'/>
          <img src={partners3} alt='our partners'/>
        </div>
      </div>
    </div>
    <div className="my-cv-section text-[5rem] text-center" >
      <h1 className='btext-old'><u>my skills</u></h1>
      <h2>Html,Html5 -10/10</h2>
      <h2>css,sass 10/10</h2>
      <h2>javaScrip,reactjs,reduxtoolkit 10/10</h2>
      <h2>git,github 10/10</h2>
      <h2>npdejs 10/7</h2>
    </div>
    <div className="footer-section cardsection flex justify-evenly items-center py-36">
      <div className="text-copy">
        <b><CopyrightIcon/>2023 </b>
        <p>ryantexh01</p>
        All Rights Reserved.


      </div>
      <div className="botton-footer ">
        <p className='text-white'>Auther: Masum Reza</p>
        <b><u className='text-blue'>masumr111@gmail.com</u></b>
      </div>
    </div>
    </>
  )
}

import React,{useState} from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import styled from 'styled-components';
import {sliderItems} from './data'

const Container=styled.div`
width:100%;
display:flex;
height:100vh;
position:relative;
overflow: hidden;
`

const Arrow=styled.div`
width:50px;
height:50px;
top:0;
bottom:0;
margin:auto;
display:flex;
align-items:center;
justify-content:center;
position:absolute;
background: #FF0;
left:${(props)=>props.direction==="left" && "10px"};
right:${(props)=>props.direction==="right" && "10px"};
opacity:0.5;
cursor:pointer;
z-index:2;
`
const Wrapper=styled.div`
height:100%;
display:flex;
transform:translateX(-100vw);
transition: all 1.5s ease;
transform: translateX(${(props) => props.slideIndex * -100}vw);
`
const Slide =styled.div`
display:flex;
align-items:center;
width:100vw;
height:100vh;
background:url(${(props)=>props.bg}) no-repeat fixed;`

const InfoContainer=styled.div`
flex:1;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background: #FFF7;

`

const Title=styled.h1`
height:70px;
position: relative;
z-index: 10;

`
const Desc=styled.p`
font-weight:500;
letter-spacing:3px;
margin:50px 0px;
font-size:20px;`

const Button=styled.button`
padding:10px;
border:2px solid black;
box-shadow:0 4px rgba(0,0,0,0.3);
cursor:pointer;
background-color:transparent;`

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick=(direction)=>{
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
        }
    }
    return (
        <Container>
            <Arrow direction="left" onClick={()=>{handleClick("left")}}>
                <ArrowBackIosIcon/>
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map((item) => (
                    <Slide bg={item.img} key={item.id}>
                        {/* <ImageContainer>
                            <Image src={item.img} />
                        </ImageContainer> */}
                        
                        <InfoContainer cla>
                            <Title>{item.title}</Title>
                            <Desc>{item.desc}</Desc>
                            <Button>REGISTER</Button>
                        </InfoContainer>
                    </Slide>
                ))}

            </Wrapper>
            <Arrow direction="right" onClick={()=>handleClick("right")}>
                <ArrowForwardIosIcon/>
            </Arrow>
        </Container>
    );
}

export default Slider;

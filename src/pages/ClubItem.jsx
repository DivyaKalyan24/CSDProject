import styled from "styled-components";
import InfoIcon from '@mui/icons-material/Info';


const Info = styled.div`
  position: absolute;
  opacity: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  `;

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
  
  &:hover ${Info}{
    opacity: 1;
    transition: all 0.5s ease;
  }

`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  

`;



// const Title = styled.h1`
//   color:white;
//   background: #FFF7;
//   color: #000;
//     margin-bottom: 20px;
// `;

// const Button = styled.button`  
//     padding: 10px;
//     background-color: white;
//     color:gray;
//     cursor: pointer;
//     font-weight: 600;
// `;
const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s ease;
    &:hover {
      background-color: #e9f5f5;
      transform: scale(1.1);
    }
  `;

const ClubItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Icon>
          <InfoIcon />
        </Icon>
      </Info>
    </Container>
  );
};

export default ClubItem;
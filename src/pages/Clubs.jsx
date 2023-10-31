import React from 'react';
import styled from "styled-components";
import '../App.css';
import { categories } from "./data";
import ClubItem from './ClubItem';

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  background-color: #F89920;
  `;
  
const Clubs = () => {
    return (
        <div>
            <h2 className='heading'>EXPLORE CLUBS</h2>
            <Container>
                {categories.map((item) => (
                    
                    <ClubItem item={item} key={item.id} />
                ))}
            </Container>
        </div>
    );
}

export default Clubs;

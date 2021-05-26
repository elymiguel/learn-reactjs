import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
background-color: #eee;
display: flex;
position: relative;
justify-content: space-between;
align-items: center;
widht: 100%;
height: 70px;
`


const Items = styled.a`
font-size: 18px;
color: green;
font-family; 'Read';
font-weight: bold;
padding: 0px 20px 0px 20px;
`

export default function header() {
    return (
    <Header>
      
      <Items>Home</Items>
      <Items>Contact</Items>
      <Items>About</Items>
      
    </Header>
    );
  }
import React from 'react';
import styled from 'styled-components';
/** Image **/
import srcLogoGit from '../img/githublogo.png';

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
color: #777777;
font-family; 'Read';
font-weight: bold;
padding: 0px 20px 0px 20px;
`

const GitLogo = styled.img`
    width: 40px;
    height: 40px;
`;

export default function header() {
    return (
    <Header>
      
      <Items href="https://github.com/elymiguel/learn-reactjs/tree/main/reactapp" target="_blank"><GitLogo src={srcLogoGit}/></Items>
      <Items>Contact</Items>
      <Items>About</Items>
      
    </Header>
    );
  }
import React from 'react';
import styled from 'styled-components';
/** Image **/
import srcLogoDio from '../img/diologo.png';

const Footer = styled.footer`
background-color: #eee;
display: flex;
position: fixed;
bottom: 0;
left: 0;
justify-content: center;
align-items: center;
width: 100%;
height: 70px;
`

const FooterItem = styled.a`
font-size: 18px;
text-decoration: none;
color: #777777;
font-weight: bold;
`

const DioLogo = styled.img`
    width: 150px;
    height: 50px;
`;

export default function footer() {
  return(
      <React.Fragment>
        <Footer>
            <FooterItem href="https://digitalinnovation.one" target="_blank"><DioLogo src={srcLogoDio}/></FooterItem>
        </Footer>
      </React.Fragment>
      
  );
}
import React from 'react';
import styled from 'styled-components';

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

const FooterItem = styled.span`
font-size: 18px;
text-decoration: none;
color: #777777;
`

export default function footer() {
  return(
      <React.Fragment>
        <Footer>
            <FooterItem>Footer Item</FooterItem>
        </Footer>
      </React.Fragment>
      
  );
}
// #4fa1f2 #ffc85c #192734

import React from 'react';
import styled from 'styled-components';

const Content = styled.main`
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: row;
margin: 0 auto;
box-sizing: border-box;

padding: 20px;
margin: 20px;
`
const ContentItems = styled.p`
background-color: #30475e;
text-align: center;
font-family: 'Read';
box-sizing: border-box;
margin: 20px;
padding: 20px;
color: white;

`

function content() {
  return <Content>
    <ContentItems>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</ContentItems>
    <ContentItems>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</ContentItems>
  </Content>;
}

export default content;
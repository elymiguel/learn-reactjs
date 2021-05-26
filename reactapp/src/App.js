import React from 'react'
import Header from './components/Header'
import Global from './theme/global'
import Footer from './components/Footer';
import Content from './components/Content';


function App() {
  return (
    <React.Fragment>
    <Global/>
    <Header/>
    <Footer/>
    <Content/>
    </React.Fragment>
  );
}

export default App;

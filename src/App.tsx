import React from 'react';
import './App.css';
import { Header } from './components/Header'
import { Body } from './components/body'
import { Footer } from './components/Footer'

const App: React.FC = () => {

  return <>
  <div>
    <Header name='chavez.tech' bio='programmer'/>
  </div>

  <div>
    <Body />
  </div>

  <div>
    <Footer link1='https://github.com/smellycyborg' 
    link2='https://www.linkedin.com/in/smellycyborg/' />
  </div>
  </>
}

export default App;

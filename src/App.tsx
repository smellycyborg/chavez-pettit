import React from 'react';
import './App.css';
import { Header } from './components/Header'
import { Body } from './components/body'
import { Footer } from './components/Footer'
import { Experience } from './components/Experience'

const App: React.FC = () => {

  return <>
  <div>
    <Header name='chavez pettit' bio='programmer'/>
  </div>

  <div>
    <Body />
    <Experience />
  </div>

  <div>
    <Footer link1='https://github.com/smellycyborg' 
    link2='https://www.linkedin.com/in/smellycyborg/'
    link3='chavezworkmail@gmail.com' />
  </div>
  </>
}

export default App;

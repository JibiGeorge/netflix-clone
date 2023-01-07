import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import './App.css'
import Banner from './Components/Banner/Banner'
import RowPost from './Components/RowPost/RowPost'
import {Trending,Actions, Adventure,Animation,Horror,Crime,Thriller,Drama} from './url'

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Banner />
      <RowPost title='Trending Now' url={Trending} />
      <RowPost title='Action' isSmall url={Actions} />
      <RowPost title='Adventure' isSmall url={Adventure} />
      <RowPost title='Critically-acclaimed Scary TV Shows' isSmall url={Horror} />
      <RowPost title='Animation' isSmall url={Animation} />
      <RowPost title='Crime' isSmall url={Crime} />
      <RowPost title='Thriller' isSmall url={Thriller} />
      <RowPost title='Drama' isSmall url={Drama} />
    </div>
  )
}

export default App
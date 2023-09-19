import React, { Component } from 'react'
import { Routes, Route, Link } from 'react-router-dom' 
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.js'

import AddTutorial from './components/add-tutorial.js'
import Tutorial from './components/tutorial.js'
import TutorialsList from './components/tutorials-list.js'
import About from './components/about.js'

class App extends Component {
  render() {
    return (
      <>
        <nav className='navbar navbar-expand navbar-secondary bg-secondary'>
          <Link to='/' className='navbar-brand'>
            NBU
          </Link>
          <div className='navbar-nav mr-auto'>
            <li className='nav-item'>
              <Link to='/tutorials' className='nav-link'> 
                Lessons              
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/add' className='nav-link'> 
                Add              
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/about' className='nav-link'> 
                About              
              </Link>
            </li>
          </div>
        </nav>

        <div className='container mt-3'>
          <Routes>
            <Route path='/' element={<TutorialsList />} />
            <Route path='/tutorials' element={<TutorialsList />} />
            <Route path='/add' element={<AddTutorial />} />
            <Route path='/tutorial/:id' element={<Tutorial />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </div>
      </>
    )
  }
}

export default App
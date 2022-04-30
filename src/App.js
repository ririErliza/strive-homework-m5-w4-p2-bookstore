import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import BookList from './components/BookList'
import historyBooks from './historyBooks.json'
import MyNavbar from './components/MyNavbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import NotFound from './components/NotFound'
import BookDetails from './components/BookDetails'

const App =()=> {

  const[searchQuery,setSearchQuery]=useState('')

  const handleSearchQuery = (value) => {
    setSearchQuery(value)
  }


    return (
      <BrowserRouter>
        <div className='App'>
          <MyNavbar
            searchQuery={searchQuery}
            handleSearchQuery={handleSearchQuery}
          />
          <header className='App-header'>
            <Routes>
              <Route element={<Login/> } path="/login"/>
              <Route element={<BookList books={historyBooks} searchQuery={searchQuery}/> } path="/"/>
              <Route element={<BookDetails/> } path="/bookdetails/:asin"/>
              <Route element={<NotFound />} path="*" />
            </Routes>
          </header>
        </div>
      </BrowserRouter>
    )
  
}

export default App

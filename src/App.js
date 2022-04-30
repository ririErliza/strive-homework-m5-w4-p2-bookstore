import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import BookList from './components/BookList'
import historyBooks from './historyBooks.json'
import MyNavbar from './components/MyNavbar'

const App =()=> {

  const[searchQuery,setSearchQuery]=useState('')

  const handleSearchQuery = (value) => {
    setSearchQuery(value)
  }


    return (
      <div className='App'>
        <MyNavbar
          searchQuery={searchQuery}
          handleSearchQuery={handleSearchQuery}
        />
        <header className='App-header'>
          <BookList books={historyBooks} searchQuery={searchQuery} />
        </header>
      </div>
    )
  
}

export default App

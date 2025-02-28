import { Route, Routes } from 'react-router-dom'
import './App.css'
import MainPage from './pages/mainPage/MainPage'
import CollectionPage from './pages/collectionPage/CollectionPage'
import Header from './components/header/Header'
import Buttle from './pages/buttle/Buttle'

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' index element={<MainPage/>}/>
        <Route path='/collection' element={<CollectionPage/>}/>
        <Route path='/buttle' element={<Buttle/>}/>
      </Routes>
    </>
  )
}

export default App

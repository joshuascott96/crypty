import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Footer from './components/Footer'
import Navbar from './components/Navbar';
import Signup from './pages/Signup';
import Account from './pages/Account';
import axios from 'axios';
import Loginmodal from './pages/Loginmodal';
import { AuthContextProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute'
import CoinPage from './pages/CoinPage';

function App() {

  const [coins, setCoins] = useState([])

  const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"

  useEffect(() => {
    axios.get(url).then((response) => {
      setCoins(response.data)
    })
  }, [url])




  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home coins={coins} />} />
          <Route path='/coin/:coinId' element={<CoinPage />} />
          <Route path='/account' element={
            <ProtectedRoute>
              <Account />
            </ProtectedRoute>
          } />
        </Routes>
        <Loginmodal />
        <Signup />
        <Footer />
      </AuthContextProvider>
    </>
  );
}

export default App;

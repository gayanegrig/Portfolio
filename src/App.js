import React from 'react'
import './App.scss';
import {
  Routes,
  Route,
  Link
} from "react-router-dom"
import {
  Layout,
  Typography,
  Space
} from 'antd'
import { NavBar, Exchanges, HomePage, Cryptocurrencies, CryptoDetails, News } from './components';

function App() {
  return (
    <div className="App">
      <div className='navBar'>
        <NavBar />
      </div>
      <div className='main'>
        <Layout>
          <div className='routes'>
            <Routes>
              <Route exact path='/' element={<HomePage />}></Route>
              <Route exact path='/exchanges' element={<Exchanges />}></Route>
              <Route exact path='/cryptocurrencies' element={<Cryptocurrencies />}></Route>
              <Route exact path='/crypto/:coinId' element={<CryptoDetails />}></Route>
              <Route exact path='/news' element={<News />}></Route>
            </Routes>
          </div>
        </Layout>

      </div>
      <div className='footer' >
        <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>
          Cryptoverse <br />
          All rigths reserverd
        </Typography.Title>
        <Space>
          <Link to='/'>Home</Link>
          <Link to='/exchanges'>Exchanges</Link>
          <Link to='/cryptocurrencies'>Cryptocurrencies</Link>
          <Link to='/crypto/:coinId'>CryptoDetails</Link>
          <Link to='/news'>News</Link>
        </Space>
      </div>
    </div >
  );
}

export default App;

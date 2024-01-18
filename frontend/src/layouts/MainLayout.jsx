import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Outlet } from 'react-router';
import wave from '../assets/wave.svg';

function Main() {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
            <img src={wave} alt="wave" />
        </div>
    );
  }

export default Main
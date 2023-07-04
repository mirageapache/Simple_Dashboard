import React from 'react'
import Header from 'components/Header';
import MainContent from 'components/MainContent';
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"


function HomePage() {
  const navigate = useNavigate();

  useEffect(()=>{
    navigate('/');
  },[navigate])

  return (
    <div>
      <Header />
      <MainContent />
    </div>
  )
}

export default HomePage

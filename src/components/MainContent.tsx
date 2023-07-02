import React, { useState } from 'react'
import 'styles/css/mainContent.css'
// import { ReactComponent as IconCaretDown } from 'assets/icons/caret-down.svg'

function MainContent() {
  const [year, setYear] = useState<string>('110')


  return (
    <section id='main-content'>
      <h2 className='title'>人口數、戶數按戶別及性別統計</h2>
      <div className='search-bar'>
        <span className='form-span select-year'>
          <label htmlFor="year-select">年份</label>
          <select id='year-select' className="form-select" disabled={false} defaultValue={year}  onChange={(e)=>{setYear(e.target.value)}} >
            <option value="110">110</option>
            <option value="109">109</option>
            <option value="108">108</option>
            <option value="107">107</option>
            <option value="106">106</option>
          </select>
        </span>

        {/* 縣/市 */}
        <span className='form-span select-city'>
          <label htmlFor="city-select">縣/市</label>
          <select id='city-select' className="form-select" disabled={true} defaultValue={year}  onChange={(e)=>{setYear(e.target.value)}} >
            <option value="110">請選擇 縣/市</option>
          </select>
        </span>

        {/* 區 */}
        <span className='form-span select-district'>
          <label htmlFor="district-select">區</label>
          <select id='district-select' className="form-select" disabled={true} defaultValue={year}  onChange={(e)=>{setYear(e.target.value)}} >
            <option value="110">請先選擇 縣/市</option>
          </select>
        </span>

        <button className='submit-btn'>SUBMIT</button>
      </div>
      <div className='search-result'>
        
      </div>
    </section>
  )
}

export default MainContent
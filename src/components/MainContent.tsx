import axios from 'axios'
import { useEffect, useState } from 'react'
import SelectItem from './mainContents/SelectItem';
import 'styles/css/mainContent.css'
import { yearData, cityData } from 'assets/dummyData.js';

interface Data {
  district_code: string;
  household_bussiness_f:string;
  household_business_m:string;
  household_business_total:string;
  household_ordinary_f:string;
  household_ordinary_m:string;
  household_ordinary_total:string;
  household_single_f:string;
  household_single_m:string;
  household_single_total:string;
  site_id:string;
  statistic_yyy:string;
  village:string;
}

function MainContent() {
  const apiUrl:string = 'https://www.ris.gov.tw/rs-opendata/api/v1/datastore/ODRP019';
  const [data, setData] = useState<any|undefined>() // api資料
  const [districtData, setDistrictData] = useState<string[]>() // 區資料
  const [year, setYear] = useState<string>('') // 年份
  const [city, setCity] = useState<string>('') // 縣/市
  const [cityDisable, setCityDisable] = useState<boolean>(true) // 縣/市select控制項
  const [district, setDistrict] = useState<string>('') // 區
  const [districtDisable, setDistrictDisable] = useState<boolean>(true) // 區select控制項
  
  useEffect(()=>{
    if(city.length > 0){
      axios(`${apiUrl}/${year}?county=${city}`)
      .then(res => {
        let rawData: string[] = [...new Set((res.data.responseData as Data[]).map((item: Data) => item.site_id.substring(3)))];
        setDistrictData(rawData);
      })
      .catch(error => console.log(error))
    }
  }, [year,city,district])

  // 設定年份選項
  function handleYearChange(value:string){
    setYear(value)
    value.length > 0 ? setCityDisable(false) : setCityDisable(true)
  }

  // 設定縣/市選項
  function handleCityChange(value:string){
    setCity(value)
    value.length > 0 ? setDistrictDisable(false) : setDistrictDisable(true)

  }

  // 設定縣/市選項
  function handleDistrictChange(value:string){
    setDistrict(value)
  }
  
  // 搜尋資料
  function searchData(){
    // axios(`${apiUrl}`)
  }

  return (
    <section id='main-content'>
      <h2 className='title'>人口數、戶數按戶別及性別統計</h2>
      <div className='search-bar'>
        {/* 年份 */}
        <SelectItem 
          id='year-select' 
          title='年份' 
          data={yearData} 
          value={year} 
          handleChange={handleYearChange} 
          disable={false}
          placeholder = '請選擇年份'
        />

        {/* 縣/市 */}
        <SelectItem 
          id='year-select' 
          title='縣/市' 
          data={cityData} 
          value={city} 
          handleChange={handleCityChange} 
          disable={cityDisable}         
          placeholder='請選擇 縣/市'
        />

        {/* 區 */}
        <SelectItem 
          id='district-select' 
          title='區' 
          data={districtData} 
          value={district} 
          handleChange={handleDistrictChange} 
          disable={districtDisable}         
          placeholder='請先選擇 縣/市'
        />

        {/* Submit Button */}
        {district.length > 0 ?
          <button className='btn submit-btn'>SUBMIT</button>
        :
          <button className='btn submit-btn disable-btn'>SUBMIT</button>
        }
      
      </div>
      
      <div className='search-result'>
        {/* 分隔線 */}
        <div className='div-line'></div>

        {/* 資料呈現 */}
        <div>


        </div>
      </div>
    </section>
  )
}

export default MainContent
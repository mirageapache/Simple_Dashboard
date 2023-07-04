import React from 'react'
import Highcharts from 'highcharts/highstock'
import HeightchartsReact from 'highcharts-react-official'
import 'styles/css/chart.css'

interface ChartData {
  year: string;
  city: string;
  district: string;
  ordinary_f: number;
  ordinary_m: number;
  ordinary_total: number;
  single_f: number;
  single_m: number;
  single_total: number;
}

function Chart(props:{ chartData:ChartData}) {
  const { chartData } = props

  // 長條圖
  const column_options = {
    title:{
      text: '人口數統計' //標題
    },
    chart: {
      type: 'column', // 圖型: 長條圖
    },
    series:[ 
      { 
        name:'男性', 
        color: '#7D5FB2',
        dataLabels:{
          enabled: true
        },
        data:[
          {
            y:chartData.ordinary_m,
            color: "#7D5FB2",
          },
          {
            y:chartData.single_m,
            color: "#7D5FB2"
          }
        ]
      },
      {
        name: '女性',
        color: "#C29FFF",
        dataLabels:{
          enabled: true
        },
        data:[
          {
            y:chartData.ordinary_f,
            color: "#C29FFF"
          },
          {
            y:chartData.single_f,
            color: "#C29FFF"
          }
        ]
      },
      
    ],
    xAxis: {
      categories: ['共同生活', '獨立生活'],
      title:{
        text:'<b>型態</b>',
        style:{
          color: "#00000"
        }
      }
    },
    yAxis: {
      title:{
        text:'<b>數量</b>',
        style:{
          color: "#00000"
        },
        align: 'high',
        rotation: 0,
        x: 38,
        y: -20
      }
    }
  }
  
  // 圓餅圖
  const pie_options = {
    chart: {
      type: 'pie', // 圖型: 圓餅圖
    },
    title:{
      text: '戶數統計' //標題
    },
    series:[ 
      { 
        name: '戶數統計',
        dataLabels:{
          enabled: true
        },
        data:[
          {
            name: '共同生活',
            y:chartData.ordinary_total,
            color: "#626EB2",
          },
          { 
            name: '獨立生活',
            y:chartData.single_total,
            color: "#A3B1FF"
          },
        ]
      },   
    ],
    plotOptions: {
      pie: {
        allowPointSelect: false, // 是否允許選中點
        cursor: 'pointer', 
        dataLabels: {
          enabled: true, // 是否顯示數據標籤
          format: '{point.percentage:.2f} %' // 數據標籤的格式
        },
        showInLegend: true // 是否顯示圖例
      }
    },
    legend: {
      align: 'center', // 圖例的對齊方式
      verticalAlign: 'bottom', // 圖例的垂直對齊方式
      layout: 'horizontal' // 圖例的佈局方式
    }
  }

  return (
    <div className='chart-panel'>
      <h2 className='title'>{chartData.year}年 {chartData.city} {chartData.district}</h2>
      <div className='column-chart'>
        <HeightchartsReact highcharts={Highcharts} options={column_options}/>
      </div>
      <div className='pie-chart'>
        <HeightchartsReact highcharts={Highcharts} options={pie_options}/>
      </div>
    </div>
  )
}

export default Chart
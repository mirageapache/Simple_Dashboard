import React from 'react'

function SelectItem(
  props:{ 
    name:string;
    title:string; 
    data:string[]|undefined; 
    value:string; 
    handleChange:(value:string)=>void; 
    disable:boolean;
    placeholder:string;
  }) 
{
  const { name, title, data, value, handleChange, disable, placeholder } = props;
  let option_data;
  if (data) { 
    option_data = data.map((item:string,index:number) => {
      return <option key={index} value={item}>{item}</option>
    })
  }
  let id = `${name}-select`
  let className = `form-span ${name}-span`

  return (
    <>
      <span className={className}>
        <label htmlFor={id}>{title}</label>
        <select id={id} className="form-select" disabled={disable} value={value} onChange={(e)=>{handleChange(e.target.value)}} >
          <option value=''>{placeholder}</option>
          {option_data}
        </select>
      </span>
    </>
  )
}

export default SelectItem
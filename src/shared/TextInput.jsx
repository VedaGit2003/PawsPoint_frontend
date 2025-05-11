import React from 'react'

const TextInput = ({title,theme,placeHolder,type,required=true,value,setValue}) => {
    return (

        // <div>
        //     <label htmlFor="inputname" className="block text-gray-800 font-semibold text-sm">{title}</label>
        //     <div className="mt-2">
        //         <input placeholder={placeHolder} type="text" name="inputname" className="block w-56 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800" />
        //     </div>
        //     <label className="pt-1 block text-gray-500 text-sm">{description}</label>
        // </div>
/* From Uiverse.io by kamehame-ha */ 
<div className="input flex flex-col w-fit static">
<label 
  htmlFor="input" 
  className={`${theme === 'light' ? 'text-black' : 'text-primary'} text-xs font-semibold relative top-2 ml-[7px] px-[3px]  ${theme==='light'? 'bg-primary': 'bg-black'} w-fit`}
>
  {title}:
</label>
<input
    type={type}
    placeholder={placeHolder}
    name="input"
    value={value}
    onChange={(e)=>{setValue(e.target.value)}}
    className={`px-[10px] py-[11px] text-xs border-2 rounded-[5px] w-[210px] focus:outline-none placeholder-opacity-50
                ${theme === 'light' 
                  ? 'bg-[#f9f9f9] text-black border-gray-400 focus:border-black placeholder:text-gray-500' 
                  : 'bg-[#2c2c2c] text-white border-gray-700 focus:border-primary placeholder:text-gray-400'}`}
    required={required}
  />
</div>





    )
}

export default TextInput
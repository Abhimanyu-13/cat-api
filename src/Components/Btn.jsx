import React from 'react'

const Btn = ({
  buttonName
})=>{
  return(
    <button type="submit" className={`w-52 flex border-2  bg-blue-600 py-2 px-2 text-white rounded-lg justify-center cursor-pointer 
                      items-center mt-4  text-xl`}>
      {buttonName}
    </button>
  );
}



export default Btn;
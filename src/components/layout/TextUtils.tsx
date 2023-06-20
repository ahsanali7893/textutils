import React, { useState } from 'react'

const TextUtils = () => {

  const [text, settext] = useState('');

  const uppercase = () => {
    let newtext = text.toUpperCase();
    settext(newtext);
      // showalert(" UpperCase converted ", "success");
  }
  return (
    <div className='max-w-screen-lg mx-auto'>
    <div className="relative mb-4 ">
    <label htmlFor="message" className="leading-7 text-sm text-gray-600">TextUtils</label>
    <textarea value={text} onChange={(e:any)=>{settext(e.target.value)}} id="textbox" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"/>
  </div>
    <button onClick={uppercase} className="text-white mx- bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-sm">UpperCase</button>
    </div>
  );
}

export default TextUtils;


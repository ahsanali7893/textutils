import React, { useState } from "react";

const TextUtils = () => {
  const [text, settext] = useState("");

  const uppercase = () => {
    let newtext = text.toUpperCase();
    settext(newtext);
    showAlert("UpperCase Converted");
    
  };
  const showAlert = (message: string | null) => {
    const popup = document.createElement("div");
    popup.classList.add("popup");
    popup.textContent = message;
    document.body.appendChild(popup);         
   
    setTimeout(() => {
      document.body.removeChild(popup);
    }, 1000); 
  };

  const lowercase = () => {
    let newtext = text.toLowerCase();
    settext(newtext);
    showAlert("LowerCase Converted")
  };
  const copyText = (): void => {
    const textInput: HTMLInputElement | null = document.getElementById(
      "textbox"
    ) as HTMLInputElement;

    if (textInput) {
      const text: string = textInput.value;

      navigator.clipboard
        .writeText(text)
        .then(() => {
          console.log("Text copied to clipboard");
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      console.error("Text input element not found");
    }
    showAlert("CopyToClipboard")
  };
  const cleartext = () => {
    settext("");
    showAlert("Clear")
  };
  const RextraS = () => {
    let newtext = text.split(/[ ]+/);
    settext(newtext.join(" "));
  
  };
  return (
    <div
    className="h-screen"
    style={{
      backgroundImage: `url(5039684.jpg)`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      opacity: 0.9,
      zIndex: "auto",
      
    }}
  >
    
    <div className="max-w-screen-lg mx-auto px-5 sm:px-0 py-12">
   
      <div className="relative mb-4 ">
        <label htmlFor="message" className="leading-7 text-sm text-yellow-600 font-bold">
          TextUtils
        </label>
        <textarea
          value={text}
          onChange={(e: any) => {
            settext(e.target.value);
          }}
          id="textbox"
          name="message"
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="flex flex-wrap ">
        <button
          onClick={uppercase}
          className="text-white my-2  bg-fuchsia-600 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-sm duration-300"
        >
          UpperCase
        </button>
        <button
          onClick={lowercase}
          className="text-white  mx-2 my-2  bg-emerald-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-sm duration-300"
        >
          LowerCase
        </button>
        <button
          onClick={copyText}
          className="text-white my-2 bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-sm duration-300"
        >
          Copy To Clipboard
        </button>
        <button
          onClick={cleartext}
          className="text-white mx-2 my-2 bg-violet-700 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-sm duration-300"
        >
          Clear Text
        </button>
        <button
          onClick={RextraS}
          className="text-white mx-2 my-2 bg-amber-800 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-sm duration-300"
        >
          Remove Extra Spaces
        </button>
      </div>
      <div className="overflow-x-auto py-11">
      <div className="flex">
        <div className="flex-shrink-0">
          <div className="bg-gray-200 w-64 h-64 mx-4 rounded-lg p-4">
            <img
              className="object-cover w-full h-full mb-4"
              src="coming.jpg"
              alt="Card Image"
            />
            {/* Card Content */}
          </div>
        </div>
        <div className="flex-shrink-0">
          <div className="bg-gray-200 w-64 h-64 mx-4 rounded-lg p-4">
            <img
              className="object-cover w-full h-full mb-4"
              src="coming.jpg"
              alt="Card Image"
            />
            {/* Card Content */}
          </div>
        </div>
        <div className="flex-shrink-0">
          <div className="bg-gray-200 w-64 h-64 mx-4 rounded-lg p-4">
            <img
              className="object-cover w-full h-full mb-4"
              src="coming.jpg"
              alt="Card Image"
            />
            {/* Card Content */}
          </div>
        </div>
        <div className="flex-shrink-0">
          <div className="bg-gray-200 w-64 h-64 mx-4 rounded-lg p-4">
            <img
              className="object-cover w-full h-full mb-4"
              src="coming.jpg"
              alt="Card Image"
            />
            {/* Card Content */}
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default TextUtils;

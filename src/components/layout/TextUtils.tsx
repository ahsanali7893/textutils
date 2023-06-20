import React, { useState } from "react";

const TextUtils = () => {
  const [text, settext] = useState("");

  const uppercase = () => {
    let newtext = text.toUpperCase();
    settext(newtext);
    showAlert("UpperCase Converted");
    // showalert(" UpperCase converted ", "success");
  };
  const showAlert = (message: string | null) => {
    const popup = document.createElement("div");
    popup.classList.add("popup");
    popup.textContent = message;
    document.body.appendChild(popup);

    setTimeout(() => {
      document.body.removeChild(popup);
    }, 1000); // Remove the popup after 3 seconds (adjust the duration as needed)
  };

  const lowercase = () => {
    let newtext = text.toLowerCase();
    settext(newtext);
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
          console.error("Failed to copy text to clipboard:", error);
        });
    } else {
      console.error("Text input element not found");
    }
  };
  const cleartext = () => {
    settext("");
  };
  const RextraS = () => {
    let newtext = text.split(/[ ]+/);
    settext(newtext.join(" "));
  };
  return (
    <div className="max-w-screen-lg mx-auto">
      <div className="relative mb-4 ">
        <label htmlFor="message" className="leading-7 text-sm text-gray-600">
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
          className="text-white my-2 bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-sm"
        >
          UpperCase
        </button>
        <button
          onClick={lowercase}
          className="text-white mx-2 my-2  bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-sm"
        >
          LowerCase
        </button>
        <button
          onClick={copyText}
          className="text-white mx-2 my-2 bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-sm"
        >
          Copy To Clipboard
        </button>
        <button
          onClick={cleartext}
          className="text-white mx-2 my-2 bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-sm"
        >
          Clear Text
        </button>
        <button
          onClick={RextraS}
          className="text-white mx-2 my-2 bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-sm"
        >
          Remove Extra Spaces
        </button>
      </div>
    </div>
  );
};

export default TextUtils;

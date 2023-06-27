import React, { useState } from 'react'



export default function TextForm() {
    function inOnChange(event) {
        let i = document.querySelector('textarea[name="textItem"]');
        let textValue = i.value;
        // console.log(event.target.value)
        // setItem(event.target.value);
        // console.log(textValue);
        setItem(textValue);
    }


    function btnClick() {
        // console.log(item.toUpperCase())
        setItem(item.toUpperCase());
    }


    const [item, setItem] = useState('Enter some text to convert')
    return (
        <>
            <div className="mb-3 container col-6 mt-5">
                <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                <textarea name='textItem' className="form-control" value={item} onChange={inOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
                <button type="button" onClick={btnClick} className='mt-2 border-0 p-2 bg-dark text-white rounded-1'>convert to uppercase</button>
            </div>
        </>
    )
}

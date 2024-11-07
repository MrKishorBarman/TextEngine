import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('')

    const handleUpClick = () => {
        setText(text.toUpperCase())
        props.showAlert("Converted to uppercase", "success")
    }

    const handleLowClick = () => {
        setText(text.toLowerCase())
        props.showAlert("Converted to lowercase", "success")
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const handleSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed", "success")
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text)

        props.showAlert("Copied to Clipboard", "success")
    }

    const handleClear = () => {
        setText("")
        props.showAlert("Text cleared", "success")
    }

    return (
        <>
            <div
                className='container'
                style={{ color: props.mode === "dark" ? 'white' : 'black',  color: "black"}}>

                <h2 className="mb-4">
                    <strong>{props.heading}</strong>
                </h2>

                <div
                    className="mb-3">
                    <textarea
                        placeholder='Enter text here'
                        className="form-control"
                        id="myBox"
                        rows="9"
                        value={text}
                        onChange={handleOnChange}
                        style={{ backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'dark' ? 'white' : 'black',
                        border: props.mode === 'dark' ? 'none' : '.1px solid #dee2e6'
                        }}>
                    </textarea>
                </div>

                <button
                    disabled={text.length === 0}
                    className="btn btn-${props.mode === 'dark' ? 'light' : 'dark'} mx-1 my-1"
                    onClick={handleUpClick}>
                    Convert to Uppercase
                </button>

                <button
                    disabled={text.length === 0}
                    className="btn btn-${props.mode === 'dark' ? 'light' : 'dark'} mx-1 my-1"
                    onClick={handleLowClick}>
                    Convert to Lowercase
                </button>

                <button
                    disabled={text.length === 0}
                    className="btn btn-${props.mode === 'dark' ? 'light' : 'dark'} mx-1 my-1"
                    onClick={handleSpace}>
                    Remove Extra Spaces
                </button>

                <button
                    disabled={text.length === 0}
                    className="btn btn-${props.mode === 'dark' ? 'light' : 'dark'} mx-1 my-1"
                    onClick={handleCopy}>
                    Copy Text
                </button>

                <button
                    disabled={text.length === 0}
                    className="btn btn-${props.mode === 'dark' ? 'light' : 'dark'} mx-1 my-1"
                    onClick={handleClear}>
                    Clear Text
                </button>
            </div>

            <div
                className="container my-3"
                style={{ color: props.mode === "dark" ? 'white' : 'black',  color: "black"}}>

                <h2>
                    Your text summary
                </h2>

                <p>
                    {text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} characters
                </p>

                <p>
                    {0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} Minutes to read
                </p>

                <h2>Preview</h2>

                <p>{text.length > 0 ? text : "Nothing to preview!"}</p>

            </div>

        </>
    )
}

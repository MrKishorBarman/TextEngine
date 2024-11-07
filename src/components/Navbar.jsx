import React from 'react'
import { NavLink } from 'react-router-dom'
import "../style.css"

export default function Navbar(props) {
    
    return (
        <nav 
            className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
            style={{ 
                position: 'sticky', 
                top: 0,
            }}
            >
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">{props.title}</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">

                            <NavLink to="/" className="nav-link" aria-current="page">Home</NavLink>

                        </li>
                        <li className="nav-item">
                            <NavLink to="/About" className="nav-link">{props.aboutText}</NavLink>
                        </li>
                    </ul>


                    {/* Added */}
                    <div
                        className="d-flex">
                        <div
                            className="bg-primary rounded mx-2"
                            style={{ height: '30px', width: '30px', cursor: 'pointer' }}
                            onClick={() => { props.toggleMode('primary') }}>
                        </div>
                    </div>

                    <div
                        className="d-flex">
                        <div
                            className="bg-danger rounded mx-2"
                            style={{ height: '30px', width: '30px', cursor: 'pointer' }}
                            onClick={() => { props.toggleMode('danger') }}>
                        </div>
                    </div>

                    <div
                        className="d-flex">
                        <div
                            className="bg-success rounded mx-2"
                            style={{ height: '30px', width: '30px', cursor: 'pointer' }}
                            onClick={() => { props.toggleMode('success') }}>
                        </div>
                    </div>

                    <div
                        className="d-flex">
                        <div
                            className="bg-warning rounded mx-2"
                            style={{ height: '30px', width: '30px', cursor: 'pointer' }}
                            onClick={() => { props.toggleMode('warning') }}>
                        </div>
                    </div>

                    <div
                        className="d-flex">
                        <div
                            className="bg-light rounded mx-2 border border-dark-subtle"
                            style={{ height: '30px', width: '30px', cursor: 'pointer' }}
                            onClick={() => { props.toggleMode('light') }}>
                        </div>
                    </div>

                    <div
                        className="d-flex">
                        <div
                            className="bg-dark rounded mx-2 border border-black"
                            style={{ height: '30px', width: '30px', cursor: 'pointer' }}
                            onClick={() => { props.toggleMode('dark') }}>
                        </div>
                    </div>
                    
                    <div className={`form-check form-switch ms-2 text-${props.mode === "light" ? 'dark' : 'light'}`}> 
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.switchMode} />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{(props.mode === "dark") ? "Light Mode" : "Dark Mode"}</label>
                    </div>
                </div>
            </div>
        </nav>
    )
}

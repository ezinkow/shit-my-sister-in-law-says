import React from 'react'

import {
    Link
} from "react-router-dom";

export default function HomeNavbar() {

    return (
        <div className="container homeNavBar">
            <div className="row">
                <div className="navbar">
                    <div className="col-2">
                        <Link to='/wish'>Make A New Year's Wish</Link>
                    </div>
                    <div className="col-3">
                        <Link to='/wishes'>Wishes</Link>
                    </div>
                    <div className="col-2 logoImage">
                        <Link to='/'>Home</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
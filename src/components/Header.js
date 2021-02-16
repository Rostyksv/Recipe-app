import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { MdFavorite } from 'react-icons/md'
import 'bootstrap/dist/css/bootstrap.min.css';

function Header({ }) {
    return (
        <div className='home-cont'>
            <div className='home-content'>
                <div>
                    Recipe app
                </div>
                <div>
                    <MdFavorite />
                </div>
            </div>
        </div>
    );
}

export default Header;

{/* <div className="header-container">
<p>Recipe app</p>
    <div className='btns-header'>
        <button value='pizza' onClick={(e) => changeDish(e)}>pizza</button>
        <button value='chicken' onClick={(e) => changeDish(e)}>chicken</button>
    </div>
    <div className='btns-header'>
        <button value='sushi' onClick={(e) => changeDish(e)}>sushi</button>
        <button value='fish' onClick={(e) => changeDish(e)}>fish</button>
    </div>
    <div> 
        <select onChange={(e) => changeDish(e)} className='form-select'>
            <option disabled selected>More...</option>
            <option value="potato">potato</option>
            <option value="pasta">pasta</option>
            <option value="cake">cake</option>
            <option value="tacos">tacos</option>
            <option value="steak">steak</option>
            <option value="kebab">kebab</option>
        </select>
    </div>
</div> */}
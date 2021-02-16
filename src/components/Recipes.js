import React, { useState } from 'react'
import Recipe from './Recipe';
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.min.css';

function Recipes({ data, page, setPage, changeDish }) {
    const [inputText, setInputText] = useState('');

    function handleInput(e) {
        setInputText(e.target.value);
    }

    return (
    <div>
          <div className='btns-container'>
              <button value='pizza' onClick={(e) => changeDish(e)}>pizza</button>
              <button value='chicken' onClick={(e) => changeDish(e)}>chicken</button>
              <button value='sushi' onClick={(e) => changeDish(e)}>sushi</button>
              <button value='fish' onClick={(e) => changeDish(e)}>fish</button>
              <button value='kebab' onClick={(e) => changeDish(e)}>fish</button>
          </div>
          <div> 
          </div>
        <div className='input-container'>
            <form >
                <input placeholder='Enter ingredient...' onChange={(e) => handleInput(e)} type="text" className='input'></input>
            </form>
        </div>
        <div className='container recipe-grid'>
        {data.filter(el => el.title.toLowerCase().includes(inputText.toLowerCase())).slice(page*9, page*9+9).map((el, i) => {
          const {recipe_id} = el;
        return (
          <Recipe key={recipe_id} el={el}/>
        )
      })}
      </div>
      <div className="pagination">
          <div className='btn-container'>
            {data.map((el, i, arr) => { 
              if(i % 10 === 0)
            {  return (
                <button key={i} onClick={() => {setPage(i/10)}} className='btn btn-dark'>{i/10+1}</button>
              )}
            })}
          </div>
      </div>
    </div>
    );
}

export default Recipes;
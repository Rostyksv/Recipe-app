import React, { useEffect, useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';

function ViewRecipe({ showRecipe, setShowRecipe, recipe }) {
    const [favs, setFavs] = useState([]);
    const url = 'https://forkify-api.herokuapp.com/api/get?rId=47746' //`https://forkify-api.herokuapp.com/api/get?rId=${recipe_id}`

    // useEffect(() => {
    //     async function getData() {
    //         const res = await fetch('https://forkify-api.herokuapp.com/api/get?rId=47746');
    //         const data = await res.json();
    //         setRecipe(data);
    //         setLoading(false);
    //       }
    //       getData();
    // }, [])

    if(typeof recipe.recipe == 'undefined') {
        return (
            <div></div>
        )
    }

    const {image_url, title, ingredients} = recipe.recipe;
    console.log(recipe.recipe)
    return (
        <div className={showRecipe ? 'ViewRecipe-overlay ViewRecipe-show' : 'ViewRecipe-overlay'}>
            <div className='ViewRecipe-cont'>
                <div className="Recipe-top">
                    <button onClick={() => setShowRecipe(false)}>X</button>
                    <img src={image_url}></img>
                </div>
                <p style={{textAlign: 'center', fontWeight: '700', fontSize: '20px'}}>{title}</p>
                <div className='ingredients-cont'>
                    {ingredients.map((el, i) => {
                        return <p key={i}>{el}</p>
                    })}
                </div>
                <button>Add to favorites</button>
            </div>
        </div>
    )
}

export default ViewRecipe;
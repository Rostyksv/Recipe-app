import React, {useState} from 'react'
import ViewRecipe from './ViewRecipe';
import 'bootstrap/dist/css/bootstrap.min.css';

function Recipe({ el }) {
    const [showRecipe, setShowRecipe] = useState(false);
    const [recipe, setRecipe] = useState({});
    const {image_url, publisher, title, recipe_id} = el;

    const url = `https://forkify-api.herokuapp.com/api/get?rId=${recipe_id}`

    async function getRecipe() {
        const res = await fetch(url);
        const datas = await res.json();
        setRecipe(datas);
        setShowRecipe(true);
    }

    return (
        <div>
            <ViewRecipe showRecipe={showRecipe} setShowRecipe={setShowRecipe} recipe={recipe}/>
            <div className='recipe-cont'>
                <div className="img-container">
                    <img className='img' src={image_url}></img>
                </div>
                <p style={{fontSize: '1.3rem', maxWidth: '320px', textAlign:'center', color: 'hsl(0, 88%, 49%)'}}>{title.length > 25 ? title.slice(0, 25)+'...' : title}</p>
            <div className='byBtn'>
               <p style={{display:'inline'}}><span style={{color: 'black', fontWeight:'700'}} >By:</span> {publisher}</p> 
               <button className='btn btn-ligh' onClick={() => getRecipe()}>View Recipe</button>
            </div>
          </div> 
        </div>
    );
}

export default Recipe;
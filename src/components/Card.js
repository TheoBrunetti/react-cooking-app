import React from "react";

const Card = ({ meal }) => {
    return (
        <div className="meal-card">
            <h2>{meal.strMeal}</h2>
            <p>Origine : {meal.strArea}</p>
            <img src={meal.strMealThumb} alt={"photo de " + meal.strMeal} />
            <p>{meal.strInstructions}</p>
            <p>Type de plat : {meal.strTags}</p>
            <p>Catégorie : {meal.strCategory}</p>
        </div>
    );
};

export default Card;

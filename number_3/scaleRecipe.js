const round = (num, places) => Number.isInteger(num) ? num : Math.round(num * 10 ** places) / 10 ** places;

const sizeUp = (newServing, recipe) => {
    const ingredients = recipe.ingredients;
    const scale = newServing / recipe.serves;
    const changeQuantitiy = (ingredient) => {
        const copy = { ...ingredient };
        const newQuantity = round(ingredient.quantity * scale, 2);
        copy.quantity = newQuantity;
        return copy
    }
    const newIngredients = ingredients.map(changeQuantitiy);
    return { name: recipe.name, serves: newServing, ingredients: newIngredients };
}


//test = >>>>>
const Spaghetti = {
    name: 'Spaghetti', serves: 3, ingredients: [
        { quantity: 500.5, unit: 'g', name: 'ground beef' },
        { quantity: 500, unit: 'g', name: 'pasta' },
        { quantity: 1, unit: 'pc', name: 'onion' }]
}

console.log('original recipe: ', Spaghetti);
console.log('Increse serving to 6: ', sizeUp(6, Spaghetti));
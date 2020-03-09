var foods = buildFoodsList();

function getFoods(){    
    try {
     return foods;       
    } catch (error) {
        console.log('Error on searching all the foods ' + error)
    }
}

function getFoodsById(id){    
    try {
     //return foods.find(food => id == food.id);     
      return foods.find(function(food){
        return food.id == id;
     });

    } catch (error) {
        console.log('Invalid ID ' + error)
    }

}

function newFood(food){
    try {
     foods.push(food);
     console.log('New food created ');
    } catch (error) {
        console.log('Food not created ' + error);
    }
}

function buildFoodsList(){
    return [
        {'id': 1, 'description': 'pizza'},
        {'id':2, 'description': 'hamburger'},
        {'id':3, 'description': 'soup'}
        ];   
}


module.exports = { getFoods , getFoodsById, newFood }

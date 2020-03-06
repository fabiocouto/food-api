
function getFoods(){
    var foods = [
                {'id': 1, 'description': 'pizza'},
                {'id':2, 'description': 'hamburger'},
                {'id':3, 'description': 'soup'}
                ];

    try {
     return foods;       
    } catch (error) {
        console.log('Error on searching all the foods ' + error)
    }
}

function getFoodsById(id){
    var foods = [
                {'id': 1, 'description': 'pizza'},
                {'id':2, 'description': 'hamburger'},
                {'id':3, 'description': 'soup'}
                ];
    try {
     //return foods.find(food => id == food.id);     
      return foods.find(function(food){
        return food.id == id;
     });

    } catch (error) {
        console.log('Invalid ID ' + error)
    }

}

module.exports = { getFoods , getFoodsById }

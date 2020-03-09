const httpStatus = require('http-status');
const service = require('../src/service/food-service')

const getFoods = async (request, response) => {
    try{        
        var foods = service.getFoods();        
        console.info('METHOD:', request.method, 'PATH:', request.path, 'BODY:', JSON.stringify(request.body));

        return response.json(foods);
    } catch(error){
        return httpStatus.description;
    }
};

const getFoodById = async (request, response) => {
    try{
        const { id } = request.params;        
        var food = service.getFoodsById(id);        
        console.info('METHOD:', request.method, 'PATH:', request.path, 'BODY:', JSON.stringify(request.body));

        return response.json(food);
    } catch(error){
        return httpStatus.description;
    }
};


const newFood = async (request, response) => {
    try{
        const {id, description} = request.body;

        const food = { id, description };
        service.newFood(food);        
        console.info('METHOD:', request.method, 'PATH:', request.path, 'BODY:', JSON.stringify(request.body));
        
        return response.end();
    } catch(error){
        return response.httpStatus;
    }
};

module.exports = { getFoods, getFoodById, newFood } 
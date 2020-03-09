const routes = require('express').Router();

const foodController = require('../../controller/food-controller');
const baseUrl = '/v1';

routes.get(`${baseUrl}/get-foods`, foodController.getFoods);
routes.get(`${baseUrl}/get-foods/:id`, foodController.getFoodById);
routes.post(`${baseUrl}/new-foods`, foodController.newFood);

module.exports = routes;


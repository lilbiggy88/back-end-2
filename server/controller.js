const houses = require('./db.json');
let houseId = 4;


const { appendFile } = require("fs");


const getAllHouses = (req, res) => {
    res.status(200).send(houses);
  }

  const deleteHouse = (req, res) => {
    const { id } = req.params;
    for(let i = 0; i < houses.length; i++){
        if(houses[i].id === +id){
            houses.splice(i, 1);
            return res.status(200).send(houses);
        }
    }
    res.status(400).send(houses);
  }

  const createHouse = (req, res) => {
    const {address, price, imageURL} = req.body;
    houses.push({
        address,
        price,
        imageURL,
        id: houseId,
    });
    houseId++;
    res.status(200).send(houses);
  }

  const updateHouse = (req, res) => {
    const { id } = req.params;
    const { type } = req.body;
    const houseIndex = houses.findIndex((houses) => houses.id === +id);
    if(type ==='plus'){
        houses[houseIndex].price += 10000;
    } else if(type === 'minus' ){
        houses[houseIndex].price -= 10000;
    }
    res.status(200).send(houses);
  }




  module.exports = {
    getAllHouses,
    deleteHouse,
    createHouse,
    updateHouse,
  };
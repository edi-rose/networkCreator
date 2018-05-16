const brain = require('brain.js')
const data = require('./helpers/assembleData')
const getData = require('./helpers/assembleData')

/*This file trains the network which has been turned into a json and saved in network.json
to create your own network uncomment the code at the bottom and chose a team in the
train function, then copy the json that is returned in the console.log*/

var me = new brain.NeuralNetwork([9, 9, 9], {
  hiddenLayers: [1, 9],
  iterations: 100
})

function train(team){
   me.train(getData(team))
}

train('naught')
console.log('hello')
console.log(me.toJSON())

const db = require('../data/db-config')

module.exports = {
    find,
    findById, 
    add, 
    update, 
    remove,
    findSteps,
    addStep
  }

  function find() {
      return db
}

function findById(id) {
}

function add(user) {
}

function update(changes, id) {
}

function remove(id) {
}

module.exports ={
    find,
}

function find (){
    return db("schemes");
} 
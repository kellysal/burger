// Import the ORM to create functions that will interact with the db
var orm = require("../config/orm.js");

// Call the ORM functions
var burger = {
    // Display all burgers in db
    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },
    // The variables cols and vals are arrays
    // Add a new burger to the db
    insertOne: function (cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function (res) {
            cb(res);
        });
    },
    // Change the devoured status to true
    updateOne: function (objColVals, condition, cb) {
        orm.updateOne("burgers", objColVals, condition, function (res) {
            cb(res);
        });
    },
    // Delete a burger from the db
    deleteOne: function (condition, cb) {
        orm.deleteOne("burgers", condition, function (res) {
            cb(res);
        });
    }
};

// Export the database functions for the controller (burgersController.js).
module.exports = burger;

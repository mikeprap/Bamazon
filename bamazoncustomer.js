var mysql = require("mysql");
var inquirer = require("inquirer")


var connection = mysql.createConnection({
    host: "localhost",


    port: 3306,


    user: "root",


    password: "Root",
    database: "bamazon_DB"
});

connection.connect(function (err) {
    connection.query
    if (err){
        console.log(err);
        
    }
    
    loadProducts();
});

function loadProducts(){
    connection.query("SELECT * FROM items", function(err, res){
        if(err)throw err;
    })

    console.log(res);

    start();
    
}


function start() {
    inquirer
        .prompt({
            name: "pickAChoice",
            type: "input",
            message: "Hello pick an id to buy something",
            
        })
        .then(function (answer) {

            if (input === true){
                howMany();
            }



        });
           
}
function howMany(){
    inquirer
    .prompt({
        name: "itemNumber",
        type: "input",
        message: "How many would you like to buy?"
    })
    .then (function(answer){
        connection.query("SELECT")



    })
}
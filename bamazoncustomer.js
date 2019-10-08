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

        console.log("Welcome to bamazon!");
        console.log("----------------------------------------");
        

        console.table(res);
        start();
    })

    

    
    
}


function start() {
    inquirer
        .prompt([
            {
            name: "pickAChoice",
            type: "input",
            message: "Hello pick an id to buy something",
            validate:function(value){
                if(isNaN(value)=== false){
                    return true;
                }
                return false;
            }
        },
            {
                name: "amount",
                type: "input",
                message: "How many items would you like to purchase?",
                validate:function(value){
                    if (isNaN(value)=== false){
                        return true;
                    }
                    return false;
                }
            }
            
        ]).then (function(answer){
            connection.query("SELECT * FROM items WHERE ?", {id: answer.pickAChoice}, function(err, res){
                var stock = res[0].stock_quanity;
                var bought = answer.amount;
                var amountOwed = res[0].price * bought;
    
                if(stock >= bought){
                    console.log("we have " + stock + "in stock!");
                    var itemLeft = stock - bought;
                    connection.query("UPDATE items SET ? WHERE ?", [{stock_quanity: itemLeft}, {id: answer.pickAChoice}],
                    function(err){
                        if (err) throw err;
                        console.log("Purchase complete");
                        console.log("you owe $ " + amountOwed);
                        loadProducts();
                        
                        
                    })
                        
                    }
                    else{
                        console.log("sorry we dont have enough in stock!");
                        loadProducts();
                    
                }
    
    
    
            });
        });
    
    
           


}

DROP DATABASE IF EXISTS bamazon_DB;

CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE items (
    id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(255) NOT NULL,
    department_name VARCHAR(255) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    stock_quanity INT(11) NOT NULL,
    PRIMARY KEY (id)
);



SELECT * FROM items


INSERT INTO items (product_name, department_name, price, stock_quanity)
VALUES ("Corvette", "car", 50000.00, 5);
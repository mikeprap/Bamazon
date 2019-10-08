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

INSERT INTO items (product_name, department_name, price, stock_quanity)
VALUES ("Ice Cream", "food", 5.00, 500);

INSERT INTO items (product_name, department_name, price, stock_quanity)
VALUES ("fifa20", "video game", 60.00, 100);

INSERT INTO items (product_name, department_name, price, stock_quanity)
VALUES ("porche", "car", 80000.00, 5);

INSERT INTO items (product_name, department_name, price, stock_quanity)
VALUES ("Dark Souls 3", "Video game", 30.00, 100);

INSERT INTO items (product_name, department_name, price, stock_quanity)
VALUES ("bike", "sports", 300.00, 10);

INSERT INTO items (product_name, department_name, price, stock_quanity)
VALUES ("Macbook pro", "electronics", 2000.00, 20);

INSERT INTO items (product_name, department_name, price, stock_quanity)
VALUES ("surface pro", "electronics", 1500.00, 20);

INSERT INTO items (product_name, department_name, price, stock_quanity)
VALUES ("cigarettes", "tobaco", 8.00, 1000);

INSERT INTO items (product_name, department_name, price, stock_quanity)
VALUES ("Corvette", "car", 50000.00, 5);
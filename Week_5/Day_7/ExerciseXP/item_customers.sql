-- CREATE TABLE items (
-- 	items_id serial,
-- 	item_description varchar(255),
-- 	item_price integer
-- )

SELECT item_description, item_price
FROM items

SELECT items_id, item_description, item_price
FROM items
WHERE item_price  > 80

SELECT items_id, item_description, item_price
FROM items
WHERE item_price  < 300

INSERT INTO items (item_description, item_price)
VALUES ('Small Desk', 100), ('Large Desk', 300), ('Fan', 80)


-- CREATE TABLE customers(
-- 	customer_id serial,
-- 	customer_firstname varchar(100),
-- 	customer_lastname varchar(100)
-- )

SELECT customer_id, customer_firstname, customer_lastname
FROM customers

INSERT INTO customers (customer_firstname, customer_lastname)
VALUES ('Greg', 'Jones'), ('Sandra', 'Jones'), ('Scott', 'Scott'), ('Trevor', 'Green'), ('Melanie', 'Johnson')


SELECT customer_id, customer_firstname, customer_lastname
FROM customers
WHERE customer_lastname = 'Smith'
-- nothing is presented because i don't have a 'Smith' in the table.

SELECT customer_id, customer_firstname, customer_lastname
FROM customers
WHERE customer_lastname = 'Jones'

SELECT customer_id, customer_firstname, customer_lastname
FROM customers
WHERE customer_firstname != 'Scott'





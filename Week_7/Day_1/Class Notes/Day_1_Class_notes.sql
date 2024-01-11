-- Day 1

-- CREATE TABLE SYNTAX
-- constraints
-- NOT NULL - 
-- UNIQUE
-- PRIMARY KEY
-- FOREIGN KEY

-- CREATE TABLE test4(
-- 	user_id serial PRIMARY KEY,
-- 	username varchar(50) NOT NULL,
-- 	password (1000) NOT NULL,
-- 	email varchar(255) NOT NULL UNIQUE,
-- )


CREATE TABLE products(
	id SERIAL PRIMARY KEY,
	name varchar(50) NOT NULL UNIQUE,
	price integer NOT NULL
)

SELECT id, name, price
FROM products

--INSERT STATMENT
INSERT INTO products (price, name)
VALUES (700, 'iPad'),
-- (800, 'iPhone'),
-- (500, 'iWatch'),
-- (1000, 'iCar')

SELECT price, id FROM products

--column aliases
SELECT price as product_price, name as product_name FROM products


--ORDER BY
select id, name, price
FROM products ORDER BY NAME DESC

--WHERE

SELECT id, name, price
FROM products
-- WHERE ID = 1 OR name = 'iCar'
WHERE LOWER(name) LIKE '%w%'


--UPDATE statement
UPDATE products SET name = 'aaa', price = 111 where id = 6

DELETE FROM products WHERE id = 6 

Select nextval ('product_id_seq');
-- DELETE FROM product

-- TRUNCATE products

-- DROP TABLE test3;

--alter 

ALTER TABLE PRODUCT ADD COLUMN description varchar(1000);
ALTER TABLE products RENAME DESCRIPTION to PRODUCT_DESC;
ALTER TABLE products drop column product_desc

-- Aggregate function
--COUNT
--SUM
--AVG
--MAX/MIN

SELECT COUNT(1) FROM products
select min(price) from products

select name from products where length(name) >= 4;


--JOIN
select * from products


create table description (
id serial primary key,
description varchar(500),
	product_id integer
)

insert into description (description, product_id)
values
('Amazing iPad', 1),
('Great iPhone', 2),
('Best Car', 4),
('Color car', 20),
('Best Key', 5)


select * from products
select * from description

select products.id, 
		products.name,
		products.price,
		description.description
from products
inner join description
on products.id = description.product_id

select products.id, 
		products.name,
		products.price,
		description.description
from products, description
where products.id = description.product_id


--left join / right/ full join
select products.id, 
		products.name,
		products.price,
		description.description,
		description.id
from products
full join description
on products.id = description.product_id
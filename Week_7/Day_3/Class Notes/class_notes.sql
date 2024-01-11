-- drop table product;
drop table products_desc


CREATE TABLE products (
	id serial primary key,
	name varchar(50) not null,
	price integer
)

-- CREATE TABLE products_desc (
-- 	id serial primary key,
-- 	description varchar(500),
-- 	product_id integer
-- )

insert into
products (price, name)
values
(700, 'iPad'), (800, 'iPhone'), (600, 'iWatch'),(700, 'iCar')

select * from products

insert into products_desc (description, product_id)
values ('Great Iphone', 2)

select * from products_desc

select products.id,
		products.name,
		products.price,
		products_desc.description
from products
full join products_desc
on products.id = products_desc.product_id


--foreign key

CREATE TABLE products_desc (
	id serial primary key,
	description varchar(500),
	product_id integer,
	constraint fk_products_id
		foreign Key (product_id)
			references products(id)
)

insert into products_desc (description,product_id)
values ('Fastest car ever', 4)

-- ON DELETE / ON UPDATE
-- NO ACTION / RESTRICT
-- SET NULL


CREATE TABLE products_desc (
	id serial primary key,
	description varchar(500),
	product_id integer, references products(id)
)

ALTER TABLE products_desc
drop constraint products_desc_product_id_fkey,
add constraint fk_product_id_fkey
	foreign key (product_id)
	references product(id)
		on delete set null
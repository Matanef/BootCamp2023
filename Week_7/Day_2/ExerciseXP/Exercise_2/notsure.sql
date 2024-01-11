SELECT customer_id,
	   store_id,
	   first_name,
	   last_name,
	   email,
	   address_id,
	   activebool,
	   create_date,
	   last_update,
	   active
FROM customer

SELECT CONCAT(first_name, ' ', last_name)
AS full_name
FROM customer

SELECT DISTINCT create_date
FROM customer

SELECT customer_id,
	   store_id,
	   first_name,
	   last_name,
	   email,
	   address_id,
	   activebool,
	   create_date,
	   last_update,
	   active
FROM customer
ORDER BY first_name DESC

SELECT film_id, title, description, release_year, rental_rate
FROM film
ORDER BY rental_rate

SELECT address, address2, phone, district
FROM address
WHERE district = 'Texas'

SELECT *
FROM film
WHERE film_id = 15 OR film_id = 150

SELECT film_id, title, description, length, rental_rate
FROM film
WHERE LOWER(title) = lower('AFRICAN EGG')

SELECT film_id, title, description, length, rental_rate
FROM film
WHERE LOWER(title) LIKE LOWER ('LO%')


SELECT film_id, title, description, length, rental_rate
FROM film
ORDER BY rental_rate
LIMIT 10

SELECT film_id, title, description, length, rental_rate
FROM film
ORDER BY rental_rate
OFFSET 10
FETCH NEXT 10 ROWS ONLY

SELECT 
    customer.first_name, 
    customer.last_name, 
	payment.amount,
	payment.payment_date
FROM 
    payment
INNER JOIN 
    customer ON payment.customer_id = customer.customer_id
	

SELECT 
	inventory_id,
	film_id,
	store_id,
	last_update
FROM 
	inventory


SELECT city.city, country.country
FROM city
inner join country
on city.country_id = country.country_id
where country.country = 'Israel'
ORDER BY country.country


select count(1) from film
where film_id not in (
select film_id from inventory)






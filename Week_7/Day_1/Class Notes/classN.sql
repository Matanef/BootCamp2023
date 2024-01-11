SELECT first_name, last_name FROM customer


-- first_name, last_name, address,district, city, country

SELECT * FROM ADDRESS;

SELECT * 
FROM city


SELECT 
    customer.first_name, 
    customer.last_name, 
    address.address, 
    address.district, 
    city.city, 
    country.country
FROM 
    customer
INNER JOIN 
    address ON customer.address_id = address.address_id
Inner JOIN
	city ON address.city_id = city.city_id
INNER JOIN
	country on city.country_id = country.country_id

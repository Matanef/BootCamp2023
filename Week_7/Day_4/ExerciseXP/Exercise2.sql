SELECT * FROM customer_review WHERE review_id = 2;
UPDATE customer_review SET language_id = 4 WHERE review_id = 2;


-- Which foreign keys (references) are defined for the customer table? 
-- How does this affect the way in which we INSERT into the customer table?
SELECT
    conname AS constraint_name,
    conrelid::regclass AS table_name,
    a.attname AS column_name,
    confrelid::regclass AS referenced_table_name,
    af.attname AS referenced_column_name
FROM
    pg_constraint
JOIN
    pg_attribute a ON a.attnum = ANY(conkey) AND a.attrelid = conrelid
JOIN
    pg_attribute af ON af.attnum = ANY(confkey) AND af.attrelid = confrelid
WHERE
    conrelid = 'customer'::regclass;
	

-- the procedure is pretty simple; however since we had a fereign key we
-- need to see that we are not loosing any data that is needed in the conected table.
drop table customer_review

SELECT COUNT(*) AS outstanding_rentals
FROM rental
WHERE return_date IS NULL;


SELECT
    film.title,
    film.rental_rate,
    COUNT(*) AS rental_count
FROM
    film
JOIN
    inventory ON film.film_id = inventory.film_id
JOIN
    rental ON inventory.inventory_id = rental.inventory_id
WHERE
    rental.return_date IS NULL
GROUP BY
    film.title, film.rental_rate
ORDER BY
    film.rental_rate DESC
LIMIT 30;


SELECT DISTINCT film.title
FROM
    film
JOIN
    film_actor ON film.film_id = film_actor.film_id
JOIN
    actor ON film_actor.actor_id = actor.actor_id
WHERE
    film.description ILIKE '%sumo%' -- ILIKE for case-insensitive search
    AND actor.first_name = 'Penelope' AND actor.last_name = 'Monroe';

SELECT title, length, rating
FROM film
WHERE (length || ' minutes')::interval < INTERVAL '1 hour'
    AND rating = 'R'
LIMIT 1;




SELECT
    film.title,
    rental.rental_date,
    payment.amount,
    rental.return_date
FROM
    film
JOIN
    inventory ON film.film_id = inventory.film_id
JOIN
    rental ON inventory.inventory_id = rental.inventory_id
JOIN
    customer ON rental.customer_id = customer.customer_id
JOIN
    payment ON rental.rental_id = payment.rental_id
WHERE
    customer.first_name = 'Matthew' AND customer.last_name = 'Mahan'
    AND payment.amount > 4.00
    AND rental.return_date BETWEEN '2005-07-28' AND '2005-08-01'
LIMIT 1;



SELECT
    film.title,
    film.description,
    payment.amount
FROM
    film
inner JOIN
    inventory ON film.film_id = inventory.film_id
inner JOIN
    rental ON inventory.inventory_id = rental.inventory_id
inner JOIN
    payment ON rental.rental_id = payment.rental_id
inner JOIN
    customer ON rental.customer_id = customer.customer_id
WHERE
 (LOWER(film.title) LIKE '%boat%' OR LOWER(film.description) LIKE '%boat%')
    AND payment.amount > 7.00
LIMIT 1;



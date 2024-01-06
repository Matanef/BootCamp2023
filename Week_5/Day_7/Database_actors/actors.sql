CREATE TABLE actors(
 actor_id SERIAL PRIMARY KEY,
 first_name VARCHAR (50) NOT NULL,
 last_name VARCHAR (100) NOT NULL,
 age DATE NOT NULL,
 number_oscars SMALLINT NOT NULL
)

SELECT actor_id, first_name, last_name, age, number_oscars
FROM actors

-- INSERT INTO actors (first_name, last_name, age, number_oscars)
-- VALUES('Matt','Damon','08/10/1970', 5);

-- INSERT INTO actors (first_name, last_name, age, number_oscars)
-- VALUES('George','Clooney','06/05/1961', 2);

-- INSERT INTO actors (first_name, last_name, age, number_oscars)
-- VALUES('Glenn','Close','1947-03-19', 0);

-- INSERT INTO actors (first_name, last_name, age, number_oscars)
-- VALUES('Cate','Blanchett','1969-05-14', 2);

INSERT INTO actors (first_name, last_name, age, number_oscars)
VALUES('Harvey ','Keitel','1939-05-13', 0),('Tom ','Hanks','1956-07-09', 2), ('Natalie ','Portman','1981-06-9', 1);

SELECT actor_id, first_name, last_name, age, number_oscars
FROM actors
LIMIT 4

SELECT actor_id, first_name, last_name, age, number_oscars
FROM actors 
ORDER BY last_name DESC
LIMIT 4

SELECT actor_id, first_name, last_name, age, number_oscars
FROM actors
WHERE first_name LIKE '%e%'

SELECT actor_id, first_name, last_name, age, number_oscars
FROM actors
WHERE number_oscars > 5

UPDATE actors 
SET age='1970-01-01' 
WHERE first_name='Matt' AND last_name='Damon';

UPDATE actors 
SET age='1970-01-01' 
WHERE first_name='Matt' AND last_name='Damon'
RETURNING 
    actor_id,
    first_name, 
    last_name,
    age;


UPDATE actors 
SET first_name = 'Maty' 
WHERE first_name='Matt' AND last_name='Damon';



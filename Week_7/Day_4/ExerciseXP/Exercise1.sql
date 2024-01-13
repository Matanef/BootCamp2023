SELECT * FROM language

SELECT * FROM film

SELECT
    film.title AS film_title,
    film.description,
    language.name AS language_name
FROM
    film
INNER JOIN
    language ON film.language_id = language.language_id;
	
	
SELECT
    film.title AS film_title,
    film.description,
    language.name AS language_name
FROM
    language
LEFT JOIN
    film ON language.language_id = film.language_id;

DROP TABLE new_film;
DROP TABLE customer_review;

CREATE TABLE new_film (
    id INT PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

SELECT * FROM new_film

INSERT INTO new_film (id, name) VALUES
(1, 'New Film 1'),
(2, 'New Film 2'),
(3, 'New Film 3');


CREATE TABLE customer_review (
    review_id SERIAL PRIMARY KEY,
    film_id INT REFERENCES new_film(id) ON DELETE CASCADE,
    language_id INT REFERENCES language(language_id),
    title VARCHAR(255) NOT NULL,
    score INT CHECK (score >= 1 AND score <= 10) NOT NULL,
    review_text TEXT,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


SELECT * FROM customer_review



INSERT INTO customer_review (film_id, language_id, title, score, review_text)
VALUES
    (1, 1, 'Great Movie!', 9, 'I really enjoyed this movie. The storyline was fantastic.');


INSERT INTO customer_review (film_id, language_id, title, score, review_text)
VALUES
    (2, 2, 'Not Bad', 7, 'The movie was okay. It had some good moments.');


SELECT * FROM customer_review WHERE film_id = 1;
DELETE FROM new_film WHERE id = 1;

-- The DELETE statement deletes the film with the specified id,
-- and because of the ON DELETE CASCADE constraint, 
-- it also deletes the connected reviews in the customer_review table.
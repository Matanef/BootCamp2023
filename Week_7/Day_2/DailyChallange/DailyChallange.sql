CREATE TABLE FirstTab (
     id integer, 
     name VARCHAR(10)
)

INSERT INTO FirstTab VALUES
(5,'Pawan'),
(6,'Sharlee'),
(7,'Krish'),
(NULL,'Avtaar')

SELECT * FROM FirstTab

CREATE TABLE SecondTab (
    id integer 
)


-- I added this value to the table to check.
INSERT INTO SecondTab VALUES
(3)

-- nothing changed.
-- then i updated the id row that i added with 6 to match an id in the FirstTab. 
-- then the result changed to 1 when running the last query
UPDATE SecondTab
SET id = 6
where id =3

SELECT * FROM SecondTab




-- the output will be the number 0 becuse NULL in this case equals to FALSE, meaning that we are selecting the rows
-- that equals to false ie, empty and all rows have values

SELECT COUNT(*) 
FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NULL )


-- the output will be 2 because we are requesting to see rows that doesn't have id column with 5 as value 
-- and we are not evaluating the 'null' id value

SELECT COUNT(*) 
FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id = 5)

-- we are selecting/counting all rows from the first tab where the 'id' is not in the SecondTab table
-- meaning 'null' and 5 and since null is not evaluated or numbered the resolt is 0 altough it is 
-- confusing because we have the 5 but the NULL have priority

SELECT COUNT(*) 
FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab )


-- the result here is 2.
--i did some tests above
SELECT COUNT(*) 
FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NOT NULL )




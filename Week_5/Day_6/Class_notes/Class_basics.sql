-- CREATE TABLE test2 (
-- 	product_id serial,
-- 	product_name varchar(100),
-- 	product_price integer
-- )

-- INSERT INTO test2 (product_price, product_name, product_id)
-- VALUES (333, 'iPhone13', 12), (15500, 'iPad13', 13)

--                                          This is Alias
-- SELECT product_name|| '        ' ||product_price AS name_price
-- FROM test2


SELECT product_name, product_price, product_id
FROM test2
WHERE product_name LIKE '%C%'
-- WHERE product_id between 3 and 8

-- ORDER BY product_id
-- LIMIT 4 OFFSET 3
-- ORDER BY product_price
-- WHERE product_id = 4

-- UPDATE test2
-- SET product_price =555, product_name = 'iPhone15'
-- WHERE product_name = 'iPhone'

DELETE FROM test2
WHERE product_id =16
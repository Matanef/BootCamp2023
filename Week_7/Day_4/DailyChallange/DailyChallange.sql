CREATE TABLE Customer (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL
);

CREATE TABLE CustomerProfile (
    id SERIAL PRIMARY KEY,
    isLoggedIn BOOLEAN DEFAULT false,
    customer_id INT UNIQUE REFERENCES Customer(id)
);

INSERT INTO Customer (first_name, last_name) VALUES
    ('John', 'Doe'),
    ('Jerome', 'Lalu'),
    ('Lea', 'Rive');
	

INSERT INTO CustomerProfile (isLoggedIn, customer_id)
VALUES
    (true, (SELECT id FROM Customer WHERE first_name = 'John' AND last_name = 'Doe')),
    (false, (SELECT id FROM Customer WHERE first_name = 'Jerome' AND last_name = 'Lalu'));
	
	SELECT Customer.first_name
FROM Customer
JOIN CustomerProfile ON Customer.id = CustomerProfile.customer_id
WHERE CustomerProfile.isLoggedIn = true;

SELECT Customer.first_name, COALESCE(CustomerProfile.isLoggedIn, false) AS isLoggedIn
FROM Customer
LEFT JOIN CustomerProfile ON Customer.id = CustomerProfile.customer_id;

SELECT COUNT(*) AS NotLoggedInCustomers
FROM Customer
LEFT JOIN CustomerProfile ON Customer.id = CustomerProfile.customer_id
WHERE CustomerProfile.isLoggedIn IS NULL OR CustomerProfile.isLoggedIn = false;



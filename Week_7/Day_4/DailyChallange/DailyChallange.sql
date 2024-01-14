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


CREATE TABLE Book(
	book_id SERIAL PRIMARY KEY,
	title varchar(150) NOT NULL,
	author varchar(150) NOT NULL
)

INSERT INTO Book (title, author) VALUES
('Alice In Wonderland', 'Lewis Carroll'),
('Harry Potter', 'J.K Rowling'),
('To kill a mockingbird', 'Harper Lee')

SELECT * FROM BOOK

CREATE TABLE Student(
	student_id SERIAL PRIMARY KEY,
	name VARCHAR(255) NOT NULL UNIQUE,
	age INT CHECK (AGE <= 15)
)

INSERT INTO Student (name, age) VALUES
('John', 12),
('Lera', 11),
('Patrick', 10),
('Bob', 14)


CREATE TABLE Library (
	book_fk_id INT,
	student_fk_id INT,
	borrowed_date DATE,
	PRIMARY KEY (book_fk_id, student_fk_id),
    FOREIGN KEY (book_fk_id) REFERENCES Book(book_id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (student_fk_id) REFERENCES Student(student_id) ON DELETE CASCADE ON UPDATE CASCADE
)

INSERT INTO Library (book_fk_id, student_fk_id, borrowed_date) 
VALUES
(
(SELECT book_id FROM Book WHERE title= 'Alice In Wonderland'),
(SELECT student_id FROM Student where name = 'John'),
'2022-02-15')

INSERT INTO Library (book_fk_id, student_fk_id, borrowed_date) 
VALUES
(
(SELECT book_id FROM Book WHERE title= 'To kill a mockingbird'),
(SELECT student_id FROM Student where name = 'Bob'),
'2021-03-03'),

(
(SELECT book_id FROM Book WHERE title= 'Alice In Wonderland'),
(SELECT student_id FROM Student where name = 'Lera'),
'2021-03-03'),

(
(SELECT book_id FROM Book WHERE title= 'Harry Potter'),
(SELECT student_id FROM Student where name = 'Bob'),
'2021-08-12')


SELECT *FROM Library

SELECT Student.name, Book.title 
FROM Library
join Student ON Library.student_fk_id = Student.student_id
join Book ON Library.book_fk_id = Book.book_id;

SELECT AVG(Student.age) AS AVG_age
FROM Library
inner join Student ON Library.student_fk_id = Student.student_id
inner join Book on Library.book_fk_id = Book.book_Id
WHERE Book.title = 'Alice In Wonderland'


DELETE FROM Student WHERE student_id = 2;
SELECT * FROM Library

--When you delete a student from the Student table, 
--the records in the Library junction table that refer to the deleted student
--through foreign keys with the ON DELETE CASCADE option will also be deleted automatically. 
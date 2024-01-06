CREATE TABLE students(
	id serial,
	last_name varchar(100),
	first_name varchar(100),
	birth_date date
)

SELECT id, last_name, first_name, birth_date
from students

INSERT INTO students (first_name, last_name, birth_date)
VALUES ('Lea', 'Benichou', '1987-07-27');
-- had to seperate them in order to uinderstand how the date datatype works

INSERT INTO students (first_name, last_name, birth_date)
VALUES ('Amelia', 'Dux', '1996-04-07'), ('Marc', 'Benichou', '1998-11-02'),
('Yoan', 'Cohen', '2010-12-03'), ('David', 'Grez', '2003-06-14'),
('Omer', 'Simpson', '1980-10-03')


INSERT INTO students (first_name, last_name, birth_date)
VALUES ('Matan', 'Efrati', '1984-08-24')

SELECT last_name, first_name
from students
WHERE id = 2

SELECT last_name, first_name
from students
WHERE last_name = 'Benichou' AND first_name = 'Marc'

SELECT last_name, first_name
from students
WHERE last_name = 'Benichou' OR first_name = 'Marc'

SELECT last_name, first_name
from students
WHERE first_name LIKE '%a%'

SELECT last_name, first_name
from students
WHERE LOWER(first_name) LIKE LOWER('a%')

SELECT last_name, first_name
from students
WHERE LOWER(first_name) LIKE LOWER('%a')

SELECT last_name, first_name
from students
WHERE LOWER(SUBSTR(first_name, LENGTH(first_name)-1, 1)) = 'a'


SELECT last_name, first_name
from students
WHERE id= 1 OR id = 3

SELECT last_name, first_name
from students
WHERE birth_date >= '2000-01-01'



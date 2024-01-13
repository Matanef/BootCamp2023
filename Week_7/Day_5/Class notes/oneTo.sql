--one to one
-- CREATE TABLE users (
-- 	user_id serial PRIMARY KEY,
-- 	email varchar(255) UNIQUE NOT null,
-- 	username varchar(255) NOT null,
-- 	)
	
CREATE users_passwor(
	upass_id serial PRIMARY KEY,
	user_email varchar(255) UNIQUE NOT null references user(email),
	user_password varchar(1000)NOT null
)

insert into users (email,username)
values ('aaa@gmail.com', 'aaa'),
('bbb@gmail.com', 'bbb'),
('ccc@gmail.com', 'ccc')


--one to many

CREATE TABLE users (
	user_id serial PRIMARY KEY,
	email varchar(255) UNIQUE NOT null,
	username varchar(255) NOT null,
	)
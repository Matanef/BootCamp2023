my_age = 39
add = 123879
together = my_age + add
print("my age will be", together)


firstname = "Matan"
lastname = "Efrati"
print(firstname + " " + lastname)
print(f"my first name is: {firstname} \n My last name is: {lastname}")

a=3
b=4
False and False

my_number = 5
my_number = my_number + 1
print(my_number)

my_number = 5 
my_number +=5
print(my_number)

# A menu to ask about the info of a user. i want to ask the email, 
#  password, age, gender, first name and last name. and once the last info is
#   inputted, display the info in a nice way.
# comment above each variable explaining why you used it and what is its type.

# firstname = input("please enter your first name: ")
# lastname = input("please enter your last name: ")
# age = input("plase enter your age: ")
# email = input("please enter your email: ")
# gender = input("please enter your gender: ")
# password = input("please enter a password: ")
# print(f"""by the information you provided: \n 
# your first name is: {firstname.capitalize()}, \n 
# your last name is {lastname.capitalize()} \n
# your age is: {age}\n 
# your email is: {email}\n 
# your gender is: {male} \n
# your password is: {password}""")

print("hello" *3)

number = int(input('Plase enter a number between 1-100: '))
numberthree = 3
numberfive = 5
if number % (numberthree * numberfive) ==0:
    print('FizzBuzz')
elif number % numberthree == 0:
    print('Fizz')
elif number % numberfive == 0:
    print('Buzz')
else:
    print(number)
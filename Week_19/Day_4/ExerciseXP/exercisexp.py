# 🌟 Exercise 1 : Set
# Instructions

#     Create a set called my_fav_numbers with all your favorites numbers.
#     Add two new numbers to the set.
#     Remove the last number.
#     Create a set called friend_fav_numbers with your friend’s favorites numbers.
#     Concatenate my_fav_numbers and friend_fav_numbers to a new variable called our_fav_numbers.




my_fav_numbers = {1,13,666,1984,2001}
my_fav_numbers.add(44)
my_fav_numbers.add(77)
print(my_fav_numbers)


# Showes an error if the specified element is not in the list
# my_fav_numbers.remove(4)
# print(my_fav_numbers)

# my_fav_numbers.discard(4)
# print(my_fav_numbers)


# # since this is a Set the item removed is random
# poppedelement = my_fav_numbers.pop()
# print(poppedelement)
# print(my_fav_numbers)

# friend_fav_numbers = {5,33,888,57,3,47}

# our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)
# print(our_fav_numbers)

# 🌟 Exercise 2: Tuple
# Instructions

#     Given a tuple which value is integers, is it possible to add more integers to the tuple?

#  you can't change a tuple

# 🌟 Exercise 3: List
# Instructions

# Using this list basket = ["Banana", "Apples", "Oranges", "Blueberries"];

#     Remove “Banana” from the list.
#     Remove “Blueberries” from the list.
#     Add “Kiwi” to the end of the list.
#     Add “Apples” to the beginning of the list.
#     Count how many apples are in the basket.
#     Empty the basket.
#     Print(basket)

# basket = ["Banana", "Apples", "Oranges", "Blueberries"]
# basket.remove("Banana")
# print(basket)
# basket.pop()
# print(basket)

# basket.append("Kiwi")
# print(basket)

# basket.insert(0, "Apples")
# print(basket)

# count = 0
# for element in basket:
#     if element=="Apples":
#         count +=1
# print(count)

# for element in basket.copy():
#     if element !="":
#         basket.pop()
# print(basket)


# basket = ["Banana", "Apples", "Oranges", "Blueberries"]
# basket.clear()
# print(basket)




# 🌟 Exercise 4: Floats
# Instructions

#     Recap – What is a float? What is the difference between an integer and a float?
#     Create a list containing the following sequence 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5 (don’t hard-code the sequence).
#     Can you think of another way to generate a sequence of floats?

# float is a number with a decimal point like 3.14

numlist = []

for element in range(3, 11):
    if element<= 10:
        numlist.append(element/2)
print("numlist ==>", numlist)

numlist2 = [x/2 for x in range(3,11)]
print("numlist2 ==>",numlist2)

# 🌟 Exercise 5: For Loop
# Instructions

#     Use a for loop to print all numbers from 1 to 20, inclusive.
#     Using a for loop, that loops from 1 to 20(inclusive), print out every element which has an even index.


for nums in range (1,21):
    print(nums)
print("++++++++++++++++++++++++++++++++++++++++++++++++++")


numbers1 = []
for nums in range(1, 21):
    if nums<=20:
        numbers1.append(nums)
print(numbers1)

print("++++++++++++++++++++++++++++++++++++++++++++++++++")

numbers2 = []
evennumbers= []
for nums in range(0, 20):
    if nums<=20:
        numbers2.append(nums)
    if nums%2 ==0:
        evennumbers.append(nums)
print("++++++++++++++++++++++++++++++++++++++++++++++++++")
print(numbers2)
print("++++++++++++++++++++++++++++++++++++++++++++++++++")
print(evennumbers)

# 🌟 Exercise 6 : While Loop
# Instructions


# name = ""
# while name != "Matan":
#     name = input("Please enter your name: ")
# print("nice name")

# 🌟 Exercise 7: Favorite fruits
# Instructions

#     Ask the user to input their favorite fruit(s) (one or several fruits).
#     Hint : Use the built in input method. Ask the user to separate the fruits with a single space, eg. "apple mango cherry".
#     Store the favorite fruit(s) in a list (convert the string of words into a list of words).
#     Now that we have a list of fruits, ask the user to input a name of any fruit.
#         If the user’s input is in the favorite fruits list, print “You chose one of your favorite fruits! Enjoy!”.
#         If the user’s input is NOT in the list, print, “You chose a new fruit. I hope you enjoy”.


# fruits = []
# while True:
#     fruit = input("Please enter a fruit name (type enough to finish): ")
#     if fruit == "enough":
#         break
#     fruits.append(fruit)

# print(fruits)

# user_fruit = input("Please enter a fruit name: ")
# for favfruit in fruits:
#     x = fruits.index(user_fruit) 
#     print(x) 
#     if favfruit != user_fruit:
#         print("You Chose a new fruit, hope you enjoy")
#     else:
#         print("You chose one of your favorite fruits! Enjoy!")


# if user_fruit in fruits:
#     print("You chose one of your favorite fruits! Enjoy!")
# else:
#     print("You Chose a new fruit, hope you enjoy")


# Exercise 8: Who ordered a pizza ?
# Instructions

#     Write a loop that asks a user to enter a series of pizza toppings, when the user inputs ‘quit’ stop asking for toppings.
#     As they enter each topping, print a message saying you’ll add that topping to their pizza.
#     Upon exiting the loop print all the toppings on the pizza pie and what the total price is (10 + 2.5 for each topping).

# toppings = []
# price = []
# while True:
#     topping = input("Please enter a topping (type enough to quit): ")
#     print(topping)
#     if topping == "quit":
#         break
#     toppings.append(topping)
# print(toppings)
# for item in toppings:
#     price =+ 2.5*len(toppings)

# print(f"this will be 10 for pizza plus {price} for the toppings")


# Exercise 9: Cinemax
# Instructions

#     A movie theater charges different ticket prices depending on a person’s age.
#         if a person is under the age of 3, the ticket is free.
#         if they are between 3 and 12, the ticket is $10.
#         if they are over the age of 12, the ticket is $15.

#     Ask a family the age of each person who wants a ticket.

#     Store the total cost of all the family’s tickets and print it out.

#     A group of teenagers are coming to your movie theater and want to watch a movie that is restricted for people between the ages of 16 and 21.
#     Given a list of names, write a program that asks teenager for their age, if they are not permitted to watch the movie, remove them from the list.
#     At the end, print the final list.


# kid = range(0, 4)
# young = range(4,13)
# price =[]



# group = int(input("how many are you going to be? "))
# for member in range(group):
#     age = int(input("Please enter an age of a member of your group: "))
#     print(age)
#     if age in kid:
#         price.append(0)
#     elif age in young:
#         price.append(10)
#     else:
#         price.append(15)

# print(price)
# sum_price = sum(price)
# print(sum_price)


# age_restricted = range(16, 22)
# names = ["Johnny", "Dexter", "Bubbles", "Edd"]
# for member in names[:]:
#     age = int(input(f"{member}, what is yout age, answer honestly... "))
#     if age in agw_restricted:
#         print("You can watch the movie")
#     elif age >22:
#         print("according to the instructions you are to old to  see this movie, sorry")
#         names.remove(member)
#     else:
#         print(f"{member}, you are to young to watch the movie")
#         names.remove(member)
# print(names)


sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]

while "Pastrami sandwich" in sandwich_orders:
    sandwich_orders.remove("Pastrami sandwich")
    # i left this in this level to show each element is being detected and deleted
    print(sandwich_orders)
print("all Pastrami sandwich have been removed from the list")

finished_sandwiches = []
while sandwich_orders:
    sandwich = sandwich_orders.pop()
    print("sandwich that is being ""made"" and is removed from sandwich_orders",sandwich)
    print("remaining sandwiches in sandwich_orders", sandwich_orders)
    finished_sandwiches.append(sandwich)
    print("finished_sandwiches", finished_sandwiches)
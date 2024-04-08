import random

# Exercise 1 : What are you learning ?

# def display_message():
#     sentence = "I'm Learning Python"
#     another_sentence = "Yey"
#     return sentence, another_sentence

# sentence = display_message()
# print(sentence)

# # Exercise 2: What’s your favorite book ?
# book = input("Please enter the name of a book you like: ")
# def favorite_book(title):
#     sentence = f"one of my favorite books is {title}"
#     return sentence

# fav_book = favorite_book(book)
# print(fav_book)

# # Exercise 3 : Some Geography
# city = input("Please enter a City name: ")
# country = input("Please enter in which country the city located: ")

# def describe_city(city, country="Israel"):
#     sentence = f"the city {city} is located in {country}"
#     return sentence

# city_and_country = describe_city(city, country)
# print("Called with 2 arguments", city_and_country)

# city_and_country = describe_city(city)
# print("Caled with one aargument", city_and_country)


# Exercise 4 : Random

# num = int(input("Please enter a number between 1-100: "))
# def generate_num(num):
#     random_number = random.randint(1,4)
#     if num == random_number:
#         print("Success")
#     else:
#         print("the numbers are not the same")
#     return random_number

# random_number = generate_num(num)
# print(random_number)

# Exercise 5 : Let’s create some personalized shirts !

# size = input("Please enter the shirt size in Letters, example: M, L, etc.: ")
# text = input("Please enter a text to apear on the shirt: ")
# def make_shirt(size ='L', text="I love Python"):
#     sentence = f"The size of the shirt is '{size}' and the text is '{text}'"
#     return sentence

# ready_shirt = make_shirt(size, text)
# print(ready_shirt)

# large_shirt = make_shirt(size)
# print("Called with 1 Argument", large_shirt)

# medium_shirt = make_shirt(size="M")
# print("Called with 1 Argument and defined the value inside", medium_shirt)

# new_shirt = make_shirt(size, text)
# print(new_shirt)

# Exercise 6 : Magicians …

magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']

def show_magicians():
    for magician in magician_names:
        # print(magician)
        return(magician_names)

magician_list = show_magicians()
print(magician_list)

def make_great():
    magician_list = show_magicians()
    great_maginians = []
    for magician in magician_list:
        sentence = f"{magician} The Great"
        print(magician)
        great_maginians.append(sentence)
    return(great_maginians)

the_greates = make_great()
print(the_greates)

magician_latest = show_magicians()
print(magician_list)
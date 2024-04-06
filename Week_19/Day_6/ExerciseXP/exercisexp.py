# 🌟 Exercise 1 : Convert lists into dictionaries
# Instructions

#     Convert the two following lists, into dictionaries

# keys = ['Ten', 'Twenty', 'Thirty']
# values = [10, 20, 30]

# result = dict(zip(keys, values))
# print(values)

# 🌟 Exercise 2 : Cinemax
# Instructions

#     A movie theater charges different ticket prices depending on a person’s age.
#         if a person is under the age of 3, the ticket is free.
#         if they are between 3 and 12, the ticket is $10.
#         if they are over the age of 12, the ticket is $15.

#     Given the following object:

#     family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}


#     How much does each family member have to pay ?
#     Print out the family’s total cost for the movies.
#     Bonus: Ask the user to input the names and ages instead of using the provided family variable (Hint: ask the user for names and ages and add them into a family dictionary that is initially empty).

kid = range(0, 4)
young = range(4,13)
price =[]



family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}
for member, age in family.items():
    print(member, age)

    # print(age)
    if age in kid:
        price.append(0)
    elif age in young:
        price.append(10)
    else:
        price.append(15)

print("price", price)
sum_price = sum(price)
print(sum_price)

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

# Exercise 3: Zara

brand = {
    "name": "Zara", 
    "creation_date": 1975,
    "creator_name": "Amancio Ortega Gaona", 
    "type_of_clothes": ["men", "women", "children", "home"], 
    "international_competitors": ["Gap", "H&M", "Benetton"],
    "number_stores": 7000,
    "major_color":
        {
        "France": "blue", 
        "Spain": "red", 
        "US": {
            "pink",
            "green"}
           }
}
print(brand)

brand["number_stores"]= 2
print(brand["number_stores"])
print(f"Zara's Customers are a mixture between {brand["type_of_clothes"][0]}, {brand["type_of_clothes"][1]} and {brand["type_of_clothes"][2]}")

brand["country_creation"] = "Spain"
# print(brand)

for key, value in brand.items():
    if key == "international_competitors":
        brand["international_competitors"].append("Desigual")
print(brand)
print(brand["international_competitors"])

del brand["creation_date"]
print(brand)

last_comp_index= int(len(brand["international_competitors"]))
print(last_comp_index)
last_competitor = brand["international_competitors"][last_comp_index-1]
print(last_competitor)
major_color_us = brand["major_color"]["US"]
print(major_color_us)

key_amount = []
for key, value in brand.items():
    key_amount.append(key)
print(key_amount)
print(len(key_amount))
    # print(key)

for key in brand["major_color"]:
    key_amount.append(key)
    print(key)
print(f"Total amount of Keys including sub dicionaries: {len(key_amount)}")
print(key_amount)

more_on_zara = {
    "creation_date": 1975, 
    "number_stores": 10000
}

for key , value in more_on_zara.items():
    brand[key] = value

print(brand)
print(brand["number_stores"])

# i'm sorry i don't understand the question:
# 14. Print the value of the key number_stores. What just happened ?

# Exercise 4 : Disney characters
users = ["Mickey","Minnie","Donald","Ariel","Pluto"]
index = [0,1,2,3,4]


disney_users_A= {}
for key in users:
    for value in index:
        disney_users_A[key] = value
        index.remove(value)
        break
    
print(disney_users_A)

users2 = ["Mickey","Minnie","Donald","Ariel","Pluto"]
disney_users_A2= {}

for index, user in enumerate(users2, start=0):
    disney_users_A2[user] = index


print(disney_users_A2)

disney_users_B= {}
for index, user in enumerate(users):
    disney_users_B[index] = user

print(disney_users_B)

sortednames=sorted(disney_users_A2.keys())

disney_users_C = {}
for index, name in sorted(enumerate(sortednames)):
    disney_users_C[index] = name

print(sortednames)
print(disney_users_C)

disney_users_A3= {}

for index, user in enumerate(users2, start=0):
    if "i" in user:
        disney_users_A3[user] = index


print(disney_users_A3)

disney_users_A4= {}

for index, user in enumerate(users, start=0):
    # print(user[0], user)
    if user[0].lower() == "m" or user[0].lower() == "p":
        # print(user[0], index)
        disney_users_A4[user] = index


print(disney_users_A4)
# print(users2)
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
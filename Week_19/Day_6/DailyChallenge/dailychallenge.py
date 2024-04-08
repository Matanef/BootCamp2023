
#  Challenge 1

# word = input("Please enter a word: ")

# word_dictionary = {}

# for index, letter in enumerate(word):
#     print(index, letter)
#     if letter in word_dictionary:
#         word_dictionary[letter].append(index)
#     else:
#         word_dictionary[letter] = [index]

# print(word_dictionary)

# word_dictionary2 = {letter: [index for index, char in enumerate(word) if char == letter] for letter in set(word)}

# print(word_dictionary2)

# Challenge 2

items_purchase = {
  "Water": "$1",
  "Bread": "$3",
  "TV": "$1,000",
  "Fertilizer": "$20"
}

wallet = "$300"
#  printing pairs (keys and vale) from the dictionary items_purchase
print("items_purchase.items", items_purchase.items())

# new dictionary to store the same information but without the dollar sign in order to be able to do math
affordeble_items = {}
# new wallet to remove the dollar sign
new_wallet = int(wallet.replace("$" , ""))

# loop to store the information 
for product, price in items_purchase.items():
    # iterating over the information in items_purchase
    print("product, price", product, price)
    # print(product[0])
    # putting acondition that checks if the first character in the string equals to $
    if price[0] == "$":
        # storing the new string which is the number without the dollar sign or the , in 1,000
        new_price = int(price.replace("$" , "").replace(",",""))
        # another condition if the new price is lower the the amount in wallet
        if new_price <= new_wallet:
            # if so store the information as product for key and int(new_price as value)
            affordeble_items[product] = int(new_price)
# printing the information in the new dictionary 
print(affordeble_items)

# sum of the items in affordeble_items
total_price = sum(affordeble_items.values())
#  printing the sum
print("Total price of affordable items:", total_price)

# sorting the dictionary in Alphabetical order using sort and storing it in a new variable
sortedproducts=sorted(affordeble_items.keys())

print("Alphabetical Order ==>", sortedproducts)

# creating a variable to store a list in Alphabetical order
affordeble_items_keys = list(affordeble_items.keys())
# printing before sorting
print("affordeble_items_keys", affordeble_items_keys)
# sorting using sort
affordeble_items_keys.sort()
# printing before sorting
print("affordeble_items_keys", affordeble_items_keys)
# using distionary compreension to create a new dictionary from the keys of affordable_items
sorted_affordeble_items = {i:affordeble_items[i] for i in affordeble_items_keys}
# printing the new dictionary
print(sorted_affordeble_items)

items_purchase = {
  "Apple": "$4",
  "Honey": "$3",
  "Fan": "$14",
  "Bananas": "$4",
  "Pan": "$100",
  "Spoon": "$2"
}

wallet = "$100" 

print(items_purchase.items())

affordeble_items = {}
new_wallet = int(wallet.replace("$" , ""))

for product, price in items_purchase.items():
    print(product, price)
    # print(product[0])
    if price[0] == "$":
        new_price = int(price.replace("$" , "").replace(",",""))

        total_price = sum(affordeble_items.values()) + new_price
        if total_price<new_wallet:
            affordeble_items[product] = int(new_price)
        else:
            new_price > new_wallet
            continue
print(affordeble_items)

print("Total price of affordable items:", total_price)


sortedproducts=sorted(affordeble_items.keys())
print("Alphabetical Order ==>", sortedproducts)

# list in Alphabetical order
affordeble_items_keys = list(affordeble_items.keys())
affordeble_items_keys.sort()
sorted_affordeble_items = {i:affordeble_items[i] for i in affordeble_items_keys}

print(sorted_affordeble_items)


items_purchase = {
  "Phone": "$999",
  "Speakers": "$300",
  "Laptop": "$5,000",
  "PC": "$1200"
}

wallet = "$1" 

print(items_purchase.items())

affordeble_items = {}
new_wallet = int(wallet.replace("$" , ""))

for product, price in items_purchase.items():
    print(product, price)
    # print(product[0])
    if price[0] == "$":
        new_price = int(price.replace("$" , "").replace(",",""))

        total_price = sum(affordeble_items.values()) + new_price
        if total_price<new_wallet:
            affordeble_items[product] = int(new_price)
        else:
            new_price > new_wallet
            continue
print(affordeble_items)

print("Total price of affordable items:", total_price)


sortedproducts=sorted(affordeble_items.keys())
print("Alphabetical Order ==>", sortedproducts)

# list in Alphabetical order
affordeble_items_keys = list(affordeble_items.keys())
affordeble_items_keys.sort()
sorted_affordeble_items = {i:affordeble_items[i] for i in affordeble_items_keys}

print(sorted_affordeble_items)

new_dict= dict()
for num in range(1,11):
    new_dict[num] = num*num
print(new_dict)

# {key:value for var in iterable}

new_dict_comp = {num:num*num for num in range(1,11)}
print(new_dict_comp)

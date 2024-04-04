#  mutable = change the values in the list
# 

dict1 = {"num1":1, "num2":2}
print(dict1["num1"])

print(dict1)
# add
dict1["num3"] = 3
print(dict1)
# remove
del dict1["num1"]
print(dict1)

# change
dict1["num3"] = 5
print(dict1)
# check those out

dict2={"num4":4, "num5":5}
dict2.update(dict1)
print(dict2)

dict3 = {}

a_dict = {'color': 'blue', 'fruit': 'apple', 'pet': 'dog'}

# matan = {"name": "Matan", "age": 39, "living":"Givataim"}


print(a_dict.items())
# output : 
# dict_items([('color', 'blue'), ('fruit', 'apple'), ('pet', 'dog')])

# The items() method returns a view object that displays 
# a list of dictionary's (key, value) tuple pairs.
for key, value in a_dict.items():
    print(key, '->', value)



sample_dict = { 
   "class":{ 
      "student":{ 
         "name":"Mike",
         "marks":{ 
            "physics":70,
            "history":80
         }
      }
   }
}
physics = sample_dict["class"]["student"]["marks"]["physics"]
history = sample_dict["class"]["student"]["marks"]["history"]
name = sample_dict["class"]["student"]["name"]
print(sample_dict)
print(name)
print(history)
print(physics)

sample_dict = {
  "name": "Kelly",
  "age":25,
  "salary": 8000,
  "city": "New york"

}
keys_to_remove = ["name", "salary"]

for key in keys_to_remove:
    del sample_dict[key]
print(sample_dict)



student_grades = {
    "Alice": [88, 92, 100],
    "Bob": [75, 78, 80],
    "Charlie": [92, 90, 85],
    "Dana": [83, 88, 92],
    "Eli": [78, 80, 72]
}

student_averages = {}
student_letter_grades = {}
# for sudent in sample_dict:
#     print()

    
for name, grades in student_grades.items():
    avg_grades = sum(grades)/len(grades)
    student_averages[name] = avg_grades

    if avg_grades >= 90:
        letter_grade = "A"
    elif avg_grades >= 80:
        letter_grade = "B"
    elif avg_grades >= 70:
        letter_grade = "C"
    elif avg_grades >= 60:
        letter_grade = "D"
    else:
        letter_grade = "F"

    student_letter_grades[name] = letter_grade

print("student_averages", student_averages)
print(student_letter_grades)



avg_class = sum(student_averages.values())/len(student_averages)
print("Class Avg: ", avg_class)

for name in student_averages:
    print(f"Name: {name}, Avarage Grade: {student_averages[name]}, Letter: {student_letter_grades[name]}")




sales_data = [
    {"customer_id": 1, "product": "Smartphone", "price": 600, "quantity": 1, "date": "2023-04-03"},
    {"customer_id": 2, "product": "Laptop", "price": 1200, "quantity": 1, "date": "2023-04-04"},
    {"customer_id": 1, "product": "Laptop", "price": 1000, "quantity": 1, "date": "2023-04-05"},
    {"customer_id": 2, "product": "Smartphone", "price": 500, "quantity": 2, "date": "2023-04-06"},
    {"customer_id": 3, "product": "Headphones", "price": 150, "quantity": 4, "date": "2023-04-07"},
    {"customer_id": 3, "product": "Smartphone", "price": 550, "quantity": 1, "date": "2023-04-08"},
    {"customer_id": 1, "product": "Headphones", "price": 100, "quantity": 2, "date": "2023-04-09"},
]

total_sales= {}

for sale in sales_data:
    product = sale["product"]
    priceforsingle = sale["price"]
    quantity= sale["quantity"]
    customer= sale["customer_id"]
    print("sale", sale)
    print(total_sales)
    # print("quantity_sold", quantity)
    # print("priceforsingle", priceforsingle)
    total_revenue = priceforsingle * quantity

    if product in total_sales:
        total_sales[product] +=total_revenue
    else:
        total_sales[product] = total_revenue
    



for product, revenue in total_sales.items():
    print(f"Total sales for {product}: ${revenue}")


customer_total_spent = {}
for sale in sales_data:
    customer_id = sale["customer_id"]

    total = sale["price"] * sale["quantity"]
    if customer_id in customer_total_spent:
        customer_total_spent[customer_id] += total
    else:
        customer_total_spent[customer_id] = total
print(sale)
print(customer_total_spent)
    
for customer, amount in customer_total_spent.items():
    print(f"customer id: {customer}, spent in total: {amount}$")


for sale in sales_data:
    sale["total_price"] = sale["price"]*sale["quantity"]
print(sales_data[0])


more_500 = []

more_500 = [sale for sale in sales_data if sale["total_price"] >500]
more_500_sorted = sorted(more_500, key=lambda x: x["price"] * x["quantity"], reverse=True)
for transaction in more_500:
    print("transaction:", transaction)


# customer_loyalty_count = {}
# for sale in sales_data:
#     if customer_id in customer_loyalty_count:


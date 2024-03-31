hw = "Hello World "
print(hw*4)

result = (99**3)*8
print(result)


# # false
# 5 < 3

# 3 == 3

# # false
# 3 == "3"

# # error
# "3" > 3

# # false
# "Hello" == "hello"



computer_brand = "Asus"
sentence = f"I have a {computer_brand} computer"
print(sentence)

name = 'Matan'
age = 39
shoe_size = 47
info = f"my name is {name}, my age is {age} and my shoe size is {shoe_size}"
print(info)

a = 22
b = 12
if a > b:
    print("Hello World")
else :
    print("a is not bigger then b")


number = int(input("Please enter a number: "))
if (number %2) ==0:
    print(f"the number {number} is an Even number")
else:
    print(f"The number {number} is an Odd number")

name = input("Please enter your name: ")
print(name)
if name.capitalize() == "Matan":
    print(f"holy shit {name}, we have the same name")
else: 
    print("Cool")


personheight = int(input("Please enter your height in Cm: "))
if personheight > 145:
    print(f"nice, your height is {personheight} and you can be on the ride ")
else :
    print("Sorry, you need to be higher then 145cm")
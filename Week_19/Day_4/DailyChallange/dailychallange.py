new_list= []

number = int(input("Please enter a number: "))
length = int(input("Please enter a length: "))


for i in range(0 ,length):
    new_number = number*(1+i)
    new_list.append(new_number)
print(new_list)
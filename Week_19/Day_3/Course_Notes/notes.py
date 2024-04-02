a= [1,2,3]
a[0]=3
print(a)

# b=(1,2,3)
# b[1] = 4

my_hobbies = ["Eat","sleep", "Code"]
print(my_hobbies[0])
print(my_hobbies[2])
print(my_hobbies[-2])

print(my_hobbies[0][0])


nums = [1,2,3]
list1 = my_hobbies+ nums
print(list1)
['Food', 'Code', 1, 2, 3]
my_words = ["cucumber", "banana","apple"]
sorted(my_words)
['apple', 'banana', 'cucumber']
my_words.sort()
print(my_words)
['apple', 'banana', 'cucumber']
my_words = ["cucumber", "banana","apple"]
sorted(my_words)
['apple', 'banana', 'cucumber']
print(my_words)
['cucumber', 'banana', 'apple']
my_words.sort()
print(my_words)
['apple', 'banana', 'cucumber']
my_words.index("banana")
1
nums = [1,2,3,4,1]
nums.index(1)
0


list1 = [5, 10, 15, 20, 25, 50, 20]

# print(list1.index(20))
list1[list1.index(20)] = 200
print(list1)


nums = [1,2,3]
a,b,c = nums
print(b)

# Unpacking tuples:
a_tuple = (10, 20, 30, 40)

a,b,c,d = a_tuple
print(a)
print(b)
print(c)
print(d)


# Sets
# don't hold duplicates

my_set =  set()
my_set.add(1)
my_set.add(5)
my_set.add(4)
print(my_set)

fruits = ['apple', 'banana', 'kiwi', 'pear']

for fruit in fruits:
    print(fruit)

cities = ["Tel Aviv", "San Francisco", "Paris", "Barcelona"]
for city in cities:
    print("I once went to", city)

x= range(7)
for num in x:
    print(num)
print("________")
# print(x)
    
for num in range(2,8):
    print(num)
print("________")

numbers = range(4, 19)

for number in numbers:
  print(number)

print("________")
x=[2,34,5,5,3,2,1,4,5,7]
y=sorted(x)

for num in range(0,10,2):
    print(x[num])

print("________")
x=[2,34,-5,5,3,2,1,4,5,-7]
y=x[9: :-1]

for num in y:
    print(num)


max = -1
for num in x:
    if num>max:
        max=num
print(max)

# min_value = min(x)
# max_value = max(x)
# print(min_value)
# print(max_value)

max= x[0]
min = x[0]
for num in x:
    if num>max:
        max=num
    if num<min:
        min= num
print(f"max:{max},\nmin:{min}")

# print("________")

# num=int(input("Enter a number: "))
# for i in range(1, 11):
#     print(f"{num[i]}")

# password = ''
# while password != 'hello-world-123':
#   password = input('What is the top secret password? ')

# print('You guessed the right password!')

counter = 0
while True:
    counter+=1
    if counter%2 ==0:
        continue
    if counter > 99:
        break
    print(counter)








# while True: 
#     city = input("Please enter the name of a city you have visited (enter 'quit'  when you are finished): ")
#     if city == 'quit':
#         break
#     else:
#         print("I'd love to go to", city)

# print("Goodbye !")



# # Question: Write a program that takes a list of strings and finds all the palindromes in the list.
# # A palindrome is a word that reads the same backward as forward. Print each palindrome found in the list.
# # Answer without using list comprehensions:

strings = ["level", "world", "madam", "python", "racecar", "hello", "civic"]


for word in strings:
    # print(word)
    # print(word[0])
    is_pali = True
    for i in range(len(word)):
        if word[i] != word[len(word) -i -1]:
            # print(word)
            is_pali = False
    if is_pali:
        print(word)

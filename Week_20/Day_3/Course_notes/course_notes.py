add = lambda x,y: x+y
print(add(5,3))

numbers = [1,2,3,4,5]
even_numbers = filter(lambda x: x%2==0, numbers)

print(even_numbers)

points = [(1,2),(3,1),(5,-4),(-2,7)]
sorted_points = sorted(points, key = lambda x: x[1])
print(sorted_points)


# try:
#     # number = int("hello")
#     divisio = 10/0
# except (ValueError, ZeroDivisionError) as e:
#     print(f"An error occoured: {e}")

try:
    number = int("123")
except ValueError:
    print("conversion failed")
else:
    print(f"Conversion successful: {number}")

try:
    file = open("non_existent_file.txt", "r")
except FileNotFoundError:
    print(" The file was not found.")
finally:
    print("This block is executed no metter what")



# try:
#     value: int("not a number")
# except ValueError:
#     print('A ValueError ovvoured')
#     raise TypeError('This is Actually a TypeError now')


# Args and Kwargs
# Args allow you to put an undefined number of arguments in the function calling:

def check_multi_argument(*args):
    return sum(args)

print(check_multi_argument(10,14,64,256))

# Kwargs

def check_arguments_keywordedarguments (required_arg, *args, **kwargs):
    print(required_arg)
    if args:
        print(args)
    if kwargs:
        print(kwargs)

check_arguments_keywordedarguments("required argument")
check_arguments_keywordedarguments("required argument", 1, 2, 'hey')
check_arguments_keywordedarguments("required argument", 1, 2, 'hey', name="Sarah", age=24)

def check_arguments_keywordedarguments(*args,**kwargs):
    print('*args', args)
    print('**kwargs', kwargs)

check_arguments_keywordedarguments(10,20,30,name='John',surname='Doe')
# >>
# *args (10, 20, 30)
# **kwargs {'name': 'John', 'surname': 'Doe'}

# check_arguments_keywordedarguments(10,20,30,name='John',surname='Doe', 2)
# >> SyntaxError: positional argument follows keyword argument


people = ["Rick", "Morty", "Beth", "Jerry", "Snowball"]
def say_hello(people):
    short_names = filter(lambda name: len(name)<= 4,people)
    greeting = map(lambda name: f"hello {name}!", short_names)
    list_short = list(greeting)
    return (list_short)


print(say_hello(people))




list_numbers = [2,3,1,2,"four",42,1,5,3,"imanumber"]
sum = []
validflag = True
while not validflag:
    list_numbers = [2,3,1,2,"four",42,1,5,3,"imanumber"]
try:
    for number in list_numbers:
        if int(number):
            sum = sum(number)
except:
    if number != int():
        pass

print(sum)

def safe_cast_int(x):
    try:
        return int(x)
    except ValueError:
        return 0


dict1 = {'a':100, 'b':200}
dict2 = {'a':200, 'c':300}
dict4 = {'a': 578, 'c':366}

def merge_dictionaries(*args):
    res = {}
    for dictionary in args:
        for key, value in dictionary.items():
            if key in res:
                res[key] += value
            else:
                res[key] = value
    return(res)

dict3 = merge_dictionaries(dict1,dict2,dict4)
print(dict3)



books = [
    {"title": "Book A", "author": "Author X", "year_published": 2001},
    {"title": "Book B", "author": "Author Y", "year_published": 1999},
    {"title": "Book C", "author": "Author Z", "year_published": 1999}
]


sorted_books = sorted(books, key= lambda x: (x['year_published'], x["title"]))
print(sorted_books)

# points = [(1,2),(3,1),(5,-4),(-2,7)]
# sorted_points = sorted(points, key = lambda x: x[1])
# print(sorted_points)
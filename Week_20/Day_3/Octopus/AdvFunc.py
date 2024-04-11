# *args

def check_arguments(*args):
    info = args
    print(f"These are the arguments {info}")
    print(type(info))
check_arguments(1, 2, 'hey')
# >> These are the arguments (1, 2, 'hey')
list11 = []
def multply(*args):
    numbers = list(args)
    result = 1
    for num in numbers:
        result *= num 
    return result

print(multply(10, 56, 35))


#  *kwargs

# def  check_keywordedarguments(**kwargs):
#     info = kwargs
#     print(type(info))

# check_keywordedarguments(name="Sarah", age=24)

# def keywordedarguments(**kwargs):
#     info = kwargs
#     for key, value in info.items():
#         # print(f"key: {key}, value: {value}")
#         print(key, ":", value)

# keywordedarguments(name="Sarah", age=24)

products=[]
amount=[]
def kekeywordedarguments2(**kwargs):
    for key, value in kwargs.items():
        # print(key, value)
        if isinstance(value, str) and value.isalpha():
            products.append(value)
            print(f'This is the product list{products}')
        elif isinstance(value, int):
            amount.append(value)
            print(f'This is the amount list{amount}')





print(kekeywordedarguments2(fruit='apple', ordered= 2))
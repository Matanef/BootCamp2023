def say_hello():
    """A function that says hello"""
    print("Hello!") 

say_hello()

def say_hello(username):
    print(f"Hello {username}")

def say_hello(username):
        print("Hello "+username)

say_hello("Rick") # "Rick" is an argument
# output "Hello Rick"

say_hello("Morty") # "Morty" is an argument
# output "Hello Morty"


# def say_hello(username, language):
#     if language == "EN":
#         print("Hello "+username)
#     elif language == "FR":
#         print("Bonjour "+username)
#     else:
#         print("This language is not supported: " + language)

# say_hello("Rick", "FR")

def get_formatted_name(first_name, last_name):
    """Return a full name, neatly formatted.
    
    Using .title to capitalize the words"""
    full_name = first_name + ' ' + last_name
    return full_name.title()

musician = get_formatted_name('jimi', 'hendrix') 
print(musician)



def divide_by_three(number):
  return number / 3

first_number = 12
first_number_computed = divide_by_three(first_number)
print(first_number_computed)
# >> 4.0

second_number = 27
second_number_computed = divide_by_three(second_number)
print(second_number_computed)
# >> 9.0

# num1 = int(input("Please enter a number: "))
# num2 = int(input("Please enter anoter number: "))

# def calculation(num1, num2):
#     new_dict = {
#     'add':num1+num2,
#     'sub':num1-num2,
#     'divid': num1/num2,
#     'multi': num1*num2,
#     'modulo': num1% num2,
#     }
#     return new_dict

# information = calculation(num1, num2)
# multi_results = information['modulo']
# print(multi_results)

def greet_users(users):             # users should be a list
    for user in users:              # Because it's a list, we can loop through it
        print("Hello " + user.title() + " !")       # For each user, print "hello" and then his name

usernames = ["steve", "stan", "debbie"]
greet_users(usernames)



# def main():
#     matan = "Matan"
#     say_hello(matan)

# if __name__ == "__main__":
#     main()

# def say_hello(username, language="EN"):
#     if language == "EN":
#         print("Hello "+username)
#     elif language == "FR":
#         print("Bonjour "+username)
#     else:
#         print("This language is not supported: " + language)

# say_hello("Rick")
# # OR
# say_hello(username="Rick")

# var1 = int(input('please Enter a nuber: '))
# var2 = int(input('please Enter another nuber: '))

# def calculation(var1, var2):
#     dict = {
#     'add' : var1+var2,
#     'sub' : var1-var2,
#     'multi' : var1*var2,
#     'devis' : var1 // var2
    
#     }

#     return dict

# dict = calculation(var1, var2)
# print (dict)
# print (sub)
# print(multi)
# print(devis)

# amount = int(input("Please enter an amount: "))

# def convert_currency(amount, code):
    
#     rates = {
#         'COP': amount*3771.79,
#         'DKK': amount*6.88,
#         'HUF': amount*360.08
#     }
#     if code in rates:
#         converted_amount = amount * rates[code]
#         return(converted_amount)
#     else:
#         print("Currency not in dictionary")
# rates = convert_currency(int(input("Please enter an amount: ")), input("Please enter a Currency Code: "))
# print(rates)

# sentence = "Hello my name Is Matan"
# def count_words(input_string):
#     words = sentence.split()

#     for word in words:
#         if word[0].isupper:
#             new_word = word.lower()
#         return new_word
    
# count_words(input("please enter a string"))



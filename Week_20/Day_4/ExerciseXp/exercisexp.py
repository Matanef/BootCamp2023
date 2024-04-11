import random
import datetime

# Exercise 1 : Temperature Advice

# def get_random_temp(season):
#     seasons = ["Winter", "Spring", "Summer", "Autumn"]
#     current_season = ""
#     rand_nmber = random.randrange(-10, 40)
#     if rand_nmber >= -10 and rand_nmber <16:
#         current_season = seasons[0]
#     elif rand_nmber>16 and rand_nmber<=23:
#         current_season =seasons[1]
#     elif rand_nmber >=24 and rand_nmber<=32:
#         current_season = seasons[2]
#     elif rand_nmber >32 and rand_nmber<=40:
#         current_season = seasons[3]
#     return 

# rand_num = get_random_temp()
# print(rand_num)

# rand_season = get_random_temp()
# print(rand_season)

# def main():
#     user_season = input("Please enter a season").lower()
#     rand_temp = get_random_temp(user_season)
#     if rand_temp <=0:
#         return(f"The temperature right now is {rand_temp} degrees Celsius, Brrr, that’s freezing! Wear some extra layers today")
#     elif rand_temp >0 and rand_temp<=16:
#         return(f"The temperature right now is {rand_temp} degrees Celsius, Quite chilly! Don’t forget your coat")
#     elif rand_temp>16 and rand_temp<=23:
#         return(f"The temperature right now is {rand_temp} degrees Celsius, geting hotter")
#     elif rand_temp >=24 and rand_temp<=32:
#         return(f"The temperature right now is {rand_temp} degrees Celsius, wear sunscreen")
#     elif rand_temp >32 and rand_temp<=40:
#         return(f"The temperature right now is {rand_temp} degrees Celsius, Stay home, turn on air conditioning and take a shower.")
#     # return(f"The temperature right now is {rand_temp} degrees Celsius")
#     return(rand_temp)

# main_temp = main()
# print(main_temp)





# def get_random_temp(season):
#     temps = {
#         'Winter': (-10, 16),
#         'Spring': (0, 20),
#         'Summer': (16, 32),
#         'Autumn': (0, 23)
#     }
#     temp_range = temps.get(season)
#     if temp_range:
#         rand_temp = random.randrange(temp_range[0], temp_range[1])
#         return(rand_temp)

#     else:
#         return("This is not a valid season, please try again")

    

# # season_data = get_random_temp("Summer")
# # print(season_data)

# def main():
#     user_season = input("Please enter a season").capitalize()
#     rand_temp = get_random_temp(user_season)
#     if isinstance(rand_temp, int):
#         if rand_temp <=0:
#             return(f"The temperature right now is {rand_temp} degrees Celsius, Brrr, that’s freezing! Wear some extra layers today")
#         elif rand_temp >0 and rand_temp<=16:
#             return(f"The temperature right now is {rand_temp} degrees Celsius, Quite chilly! Don’t forget your coat")
#         elif rand_temp>16 and rand_temp<=23:
#             return(f"The temperature right now is {rand_temp} degrees Celsius, geting hotter")
#         elif rand_temp >=24 and rand_temp<=32:
#             return(f"The temperature right now is {rand_temp} degrees Celsius, wear sunscreen")
#         elif rand_temp >32 and rand_temp<=40:
#             return(f"The temperature right now is {rand_temp} degrees Celsius, Stay home, turn on air conditioning and take a shower.")
#         # return(f"The temperature right now is {rand_temp} degrees Celsius")
#     else:
#         print(rand_temp)


# main_temp = main()
# print(main_temp)

# Exercise 2 : Star Wars Quiz:

# data = [
#     {
#         "question": "What is Baby Yoda's real name?",
#         "answer": "Grogu"
#     },
#     {
#         "question": "Where did Obi-Wan take Luke after his birth?",
#         "answer": "Tatooine"
#     },
#     {
#         "question": "What year did the first Star Wars movie come out?",
#         "answer": "1977"
#     },
#     {
#         "question": "Who built C-3PO?",
#         "answer": "Anakin Skywalker"
#     },
#     {
#         "question": "Anakin Skywalker grew up to be who?",
#         "answer": "Darth Vader"
#     },
#     {
#         "question": "What species is Chewbacca?",
#         "answer": "Wookiee"
#     }
# ]
# points = []
# wrong_answers = []

# def ask_question():
#     for question in data:
#         user_answer = input(f"{question['question']}:")
#         if user_answer.capitalize() == question["answer"]:
#             points.append(1)
#             print ("You answered correctly")
#             # print(answer)
#             # print(points)
#         else:
#             wrong_answers.append(question)
#             print("You answered wrong")
            

# def count_and_notify():
#     count_right = int(len(points))
#     count_wrong = int(len(wrong_answers))
#     print (f"Total Score:\n Correct Answers: {count_right}, Wrong Answers: {count_wrong} ")
#     if count_wrong>= 3:
#         user_answer = input("Would you like to play again? Y/N: ")
#         if user_answer.lower() != 'y' and user_answer.lower() !='n':
#             input('Please enter only Y or N: ')
#         elif user_answer.lower() == 'y' or user_answer == 'Y':
#             points.clear()
#             wrong_answers.clear()
#             run_quiz()
#         else:
#             print('Thanks for playing')



# def run_quiz():
#      ask_question()
#      print(count_and_notify())

# c=run_quiz()
# print(c)

# print(points)
# x = ask_question()    
# print(x)

# y = count_and_notify()
# print(y)


def get_age(year, month, day):
    # using datetime to import time information
    current_date = datetime.datetime.now()
    # using datetime to sset the current year
    current_year = current_date.year
    print(current_year)
    current_month = current_date.month
    print(current_month)
    # age = current year - input
    age = current_year - year
    # if the birth month is after the current month if so that means the person didn't had birthday this year 
    if month > current_month or (month == current_month and day >current_date.day):
        age -= 1
    return age

# Hard coding the time but can be done with inouts from the user
birth_year = 1984
birth_month = 8
birth_day = 24
# age = get_age(birth_year, birth_month, birth_day)
# print(age)



def can_retire(gender, date_of_birth):
    print(date_of_birth)
    age = get_age(birth_year, birth_month, birth_day)
    if gender == 'm':
        retire_age_m = 67 - age
        if retire_age_m > 0:
            print(f'You have {retire_age_m} years until you can retire')
        else:
            print('You are old enough to retire')
    elif gender == 'f':
        retire_age_f = 62 - age
        if retire_age_f > 0:
            print(f'You have {retire_age_f} years until you can retire')
        else:
            print('You are old enough to retire')

    else:
        print('Please select "m" or "f"')



gender_user = 'm'
date_of_birth_user = f"{birth_day}/{birth_month}/{birth_year}"
check = can_retire(gender_user, date_of_birth_user)




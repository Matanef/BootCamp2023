import random

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

data = [
    {
        "question": "What is Baby Yoda's real name?",
        "answer": "Grogu"
    },
    {
        "question": "Where did Obi-Wan take Luke after his birth?",
        "answer": "Tatooine"
    },
    {
        "question": "What year did the first Star Wars movie come out?",
        "answer": "1977"
    },
    {
        "question": "Who built C-3PO?",
        "answer": "Anakin Skywalker"
    },
    {
        "question": "Anakin Skywalker grew up to be who?",
        "answer": "Darth Vader"
    },
    {
        "question": "What species is Chewbacca?",
        "answer": "Wookiee"
    }
]
points = []
wrong_answers = []

def ask_question():
    for questions in data:
        print(len(questions))
        while questions < len(questions):
            for key in questions.keys():
                    while key == "question":
                        user_answer = input(f"{key.capitalize()}: {questions[key]} ")
                        if user_answer.capitalize() == questions["answer"]:
                            points.append(1)
                            print ("You answered correctly")
                            # print(answer)
                            # print(points)
                        else:
                            wrong_answers.append(1)
                            print("wrong_answers", wrong_answers)
                        
                    
    return points, wrong_answers
            

def count_and_notify():
    count_right = len(points)
    count_wrong = len(wrong_answers)
    return (f"Total Score:\n Correct Answers: {count_right}, Wrong Answers: {count_wrong} ")

# print(points)
# x = ask_question()    
# print(x)

# y = count_and_notify()
# print(y)
import random

# # Tic Tac Toe

# def display_board():
#     numbers = [1,2,3,4,5,6,7,8,9]
#     board = [[1,2,3],[4,5,6],[7,8,9]]
#     rows = 3
#     collumns = 3
#     for row in range(rows):
#         print('\n+---+---+---+')
#         print("|", end="")
#         for col in range(collumns):
#             print("",board[row][col], end=" |" )
#     print('\n+---+---+---+')  

# # print_board = display_board()
# # print(print_board)

# def player_input(player):
#     row = int(input("Please select a line to place your tile"))
#     column = int(input("Please select a column to place your tile"))
#     return [row,column]
        
# # def check_win(board):
# #     for row in board:
# #         if row[0]


# def play():
#     board = display_board()
#     player_input(1)
#     return board

# play()

def enter_a_word():
    words = ["apple", "banana", "orange", "grape", "pineapple", "strawberry", "watermelon"]
    return random.choice(words)


def diaplay_word(word, guessed_letters):
    display = ""
    for letter in word:
        if letter in guessed_letters:
            display += letter 
        else:
            display += "_ "
    return display

def hangman():
    print("Hangman")
    word = enter_a_word()
    guessed_letters = []
    guess_attempts = []
    attempts = 4

    while attempts > 0:
        print("Attempts left: ", attempts)
        print(diaplay_word(word, guessed_letters))
        print("word:", word)

        guess = input("guess a letter").lower()

        if len(guess) != 1 or not guess.isalpha():
            print("Please enter a single letter")
            continue

        if guess in guessed_letters:
            print("letter already exist")
            continue

        guessed_letters.append(guess)
        print("guessed_letters", guessed_letters)

        if guess not in word:
            attempts -= 1
            print("Letter not in the word")
            if attempts == 0:
                print("Oops, you ran out of tries")
                print(f"The word was: {word}")
                break

        else:
            print("You picked correctly")

        if all(letter in guessed_letters for letter in word):
            print("Congratulations! you guessed the word", word)
            break

    play_again = input("Would you like to  try again? y/n")
    if play_again == "y":
        hangman()
    elif play_again == "n":
        print("Thank you for playing hangman, Sleep tight")
    else:
        input("Please type only y/Y or n/N")
            

hangman()


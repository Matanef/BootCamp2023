from game import Game

def get_user_menu_choice():
    while True:
        print('Menu:')
        print('1. Play a new game')
        print('2. Show scores')
        print('3. Quit')
        user_choise = input("Please select onr of the options: ")
        if user_choise in ['1', '2', '3']:
            return user_choise
        else:
            print('invalid input, Please select from the list')

def print_results(results):
    print("Saved Results:")
    for key ,value in results.items():
        print(f'{key}: {value}')


def main():
    results = {'Win': 0, 'Loss': 0, 'Draw': 0}
    while True:
        user_choice = get_user_menu_choice()
        if user_choice == '1':
            game=Game()
            result = game.play()
            print("result from rps.py", result)
            if result is not None:
                results[result] += 1
        elif user_choice == '2':
            print_results(results)
        else:
            print_results(results)
            print("Thank you for playing, Bye")
            break

# get_user_menu_choice()

main()
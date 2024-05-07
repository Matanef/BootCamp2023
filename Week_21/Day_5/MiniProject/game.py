import random

class Game:
    
    def get_user_item(self):
        variants = ['rock', 'paper', 'scissors']
        for item in variants:
            print (item)
        while True:
            user_choise = input("Please Enter choise (Rock/Paper/Scissors): ").lower()
            if user_choise in variants:
                return user_choise
            else:
                print('Please enter only "rock", "paper" or "scissors".')
        
    def get_computer_item(self):
        comp_choice = random.choice(['rock', 'paper', 'scissors'])
        return comp_choice
    
    def get_game_result(self, user_item, computer_item):
        self.user_item = user_item
        self.computer_item = computer_item
        if self.user_item == self.computer_item:
            print(f"We have a Draw. \n You chose {self.user_item} and the computer chose {self.computer_item}")
        elif (self.user_item == 'rock' and self.computer_item == 'scissors') or \
            (self.user_item == 'paper' and self.computer_item == 'rock') or\
            (self.user_item == 'scissors' and self.computer_item == 'paper'):
            return 'Win'
        else:
            return 'Loss'

    def play(self):
        user_item = self.get_user_item()
        comp_item = self.get_computer_item()
        result = self.get_game_result(user_item, comp_item)
        print(f"You selected {user_item} and the computer selected {comp_item}")
        print("line 37 result =" ,result)
        if result == 'Win':
            print(f'You Win\n You chose "{user_item}" and the computer chose "{comp_item}"')
        elif result == 'Loss':
            print(f'You Lost\n You chose "{user_item}" and the computer chose "{comp_item}"')
        else:
            print(f'This is a Draw\n You chose "{user_item}" and the computer chose "{comp_item}"')
        return result


game = Game()
# item = game.get_user_item()
# print(item)
# comp_item = game.get_computer_item()
# print(comp_item)
# compare = game.get_game_result(item, comp_item)
# print(compare)

# play = game.play()
# print(play)

# game.play()
# class Dog():
    # Initializer / Instance Attributes
#     def __init__(self, name_of_the_dog, amount_of_legs):
#         print("A new dog has been initialized !")
#         print("His name is", name_of_the_dog)
#         self.name = name_of_the_dog
#         self.amount_of_legs = amount_of_legs
#     def __str__(self):
#         return (f"Name: {self.name}, amount of legs: {self.amount_of_legs}")
#     def names(self, other_dog):
#         print(self.name+ ' ' + other_dog.name)
#     def add(a,b):
#         print(a+b)

# shelter_dog = Dog('Rex', 3)
# other_shelter_dog = Dog("Jimmy", 4)

# print("shlter_dog: ", shelter_dog)
# print("shlter_dog.names: ", shelter_dog.names(other_shelter_dog))

# print(Dog.add(1,2))

# shelter_dog.name = "Spot"
# print(shelter_dog.name)


# class Computer():

#     def description(self, name):
#         """
#         This is a totally useless function
#         """
#         print("I am a computer, my name is", name)
#         #Analyse the line below
#         print(self)

# mac_computer = Computer()
# mac_computer.brand = "Apple"
# print(mac_computer.brand)

# dell_computer = Computer()

# Computer.description(dell_computer, "Mark")
# # IS THE SAME AS:
# dell_computer.description("Mark")

# class BankAccount():
#     def __init__(self, owner, balance):
#         print("This is your Bank Sccount")
#         self.name = owner
#         self.money = balance
#     def __str__(self):
#         return (f"Name: {self.name}, Money: {self.money}")
#     def deposit(self, amount):
#         self.money += amount
#         print(f"Amount Diposit: {amount} \nCurrent funds: {self.money}")
#     def withdraw(self, amount):
#         if amount > 0 and amount <= self.money:
#             self.money-= amount
#             print(f"Amount Withdrawn: {amount} \nCurrent funds: {self.money}")
#         elif amount>self.money:
#             answer = input("Invalid amount, Insufficioent Funds\nWould you like to proceed with the funds available or cancel Withdraw:\n 1 to proceed 2 for cancle ")
#             if answer == '1':
#                 self.money = 0
#                 print(f"amount withdrawn. \n Funds in Account: {self.money}")
#             elif answer == '2':
#                 print(f"Withdrawn Canceld. \n Funds in Account: {self.money}")



# owner = BankAccount('Alice', 1000)
# print(owner)

# print(owner.deposit(500))
# print(owner)

# print(owner.withdraw(2000))
# print(owner)

class Book():
    def __init__(self, title, author, isbn):
        self.title = title
        self.author = author
        self.isbn = isbn
        self.available = True
    def issue_book(self):
        if self.available:
            self.available == False
            ("Please remember to return the book on time")
        else:
            print("Book already issued")

    def return_book(self):
        self.available == True
        print("Thank you for returning the book, hope you rewind it")
        print("Book is now Available")
    def __str__(self):
            availability = "Available"
            return (f"Title: {self.title}, Author: {self.author}, ISBN: {self.isbn}, Avilability: {self.available}")
        
# book1 = Book("Python Programming", "John Smith", "12344")
# print(book1)

# book1.issue_book()
# print(book1)

# book1.return_book()
# print(book1)

class Library():
    def __init__(self):
        self.books = []

    def add_book (self,book):
        self.books.append(book)
    
    def find_books_by_title(self, title):
        return [book for book in self.books if book.title == title]

    def find_book_by_author(self, author):
        return [book for book in self.books if book.author == author]

    def list_available_books(self):
        print("Available books:")
        for book in self.books:
            if book.available:
                print(book)
    
    def list_all_books(self):
        print("All books in the library")
        for book in self.books:
            print(book)

library = Library()
book1 = Book("Lord of the Rings", "J. R. R. Tolkien", "12344")


library.add_book(book1)


library.list_all_books()

book1.issue_book()
library.list_available_books()

book1.return_book()
library.list_available_books()
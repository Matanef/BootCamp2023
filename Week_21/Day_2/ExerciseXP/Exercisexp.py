# Exercise 1: Cats


class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age
    def __str__(self):
        return(f"The cat name is: {self.name} and it's age is {self.age}")

cat_one = Cat('Mittens', 7)
cat_two = Cat('Shmulik', 12)
cat_three = Cat('Mostach', 2)
# print(cat_one)
# print(cat_two)
# print(cat_three)



cats = [cat_one, cat_two, cat_three]
# cats.append(cat_one)
# cats.append(cat_two)
# cats.append(cat_three)
# print(cats)

def find_old(cats):
    oldest = None
    max_age = float('-inf')

    for cat in cats:
        if cat.age > max_age:
            max_age = cat.age
            oldest = cat
    return (oldest)


print(find_old(cats))


# Exercise 2 : Dogs

class Dog():
    def __init__(self, name, height):
        self.name = name
        self.height = height
    def __str__(self):
        return(f"Name: {self.name}, Height: {self.height}")
    def bark(self):
        print(f"{self.name} goes Woof")
    def jump(self):
        jump_height = self.height*2
        print(f"{self.name} jumps {jump_height} high")
        

davids_dog = Dog('Lanou', 54)
print(davids_dog)
print(davids_dog.bark())
print(davids_dog.jump())

sarahs_dog = Dog('Teacup', 20)
print(sarahs_dog)
print(sarahs_dog.bark())
print(sarahs_dog.jump())

dogs = [davids_dog, sarahs_dog]

larger = None
max_height = float('-inf')

for dog in dogs:
    if dog.height > max_height:
        max_height= dog.height
        larger = dog
print(f"this is the bigger dog:", larger)



# Exercise 3 : Who’s the song producer?

class Song():
    def __init__(self, lyrics):
        self.lyrics = lyrics
        print(lyrics)
    def sing_me_a_song(self):
        for line in self.lyrics:
            print(line)

            
            

stairway= Song(["There’s a lady who's sure","all that glitters is gold", "and she’s buying a stairway to heaven"])
# print(stairway)
print(stairway.sing_me_a_song())

# Exercise 4 : Afternoon at the Zoo


class Zoo():
    def __init__(self, zoo_name):
        self.animals = []
        self.name = zoo_name
    def __str__(self):
        return (self.name)
    def add_animal(self, new_animal):
        self.new_animal = new_animal
        if new_animal not in self.animals:
            self.animals.append(new_animal)
        return self.animals
    def get_animals(self):
        for animal in self.animals:
            print(animal)
    def sell_animal(self, animal_sold):
        self.animal_sold = animal_sold
        if animal_sold in self.animals:
            self.animals.remove(animal_sold)
            print(f"the animal that was sold is: {animal_sold}\n the current zoo: {self.animals}")
    def sort_animals(self):
        sorted_animals = {}
        for animal in self.animals:
            first_letter = animal[0].lower()
            if first_letter in sorted_animals:
                sorted_animals[first_letter].append(animal)
            else:
                sorted_animals[first_letter]= [animal]
        return sorted_animals


    
zoo1 =  Zoo("Shmulik")
print(zoo1.add_animal("Iguana"))
print(zoo1.add_animal("Elephant"))
print(zoo1.get_animals())
print(zoo1.sell_animal("Elephant"))
print(zoo1.sort_animals())

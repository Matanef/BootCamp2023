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

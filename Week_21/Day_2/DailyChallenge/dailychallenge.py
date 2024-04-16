class Farm():
    # instantiating animal name
    def __init__(self, animal_name):
        self.animals = {}
        self.name = animal_name
    def __str__(self):
        return (f"{self.name}'s Farm")
    
    # set default starting point for count
    def add_animal(self, new_animal, count=1):
        if new_animal in self.animals:
            self.animals[new_animal] += count
        else:
            self.animals[new_animal] = count
    
    def count(self):
        for animal, number in self.animals.items():
            print(f"{animal}: {number}")

    def get_animal_types(self):
        sorted_animal = sorted(self.animals)
        print(sorted_animal)
    
    def get_short_info(self):
        animal_names = []
        for animal, number in self.animals.items():
            if number >1:
                animal = animal +'s'
            animal_names.append(animal)
            # this is to add the "and" before the last animal
            # if animal_names length is bigger then 1:
            if len(animal_names) >1 :
                # creating a new list to add all animals except for the last one [:-1]
                animal_list = ", ".join(animal_names[:-1])
                # adding a string and including the last animal in the list [-1]
                animal_list += f" and {animal_names[-1]}"
                # creating the sring
        print(f"{self.name}'s farm has {animal_list}")



    
macdonald = Farm("McDonald")
print(macdonald)
macdonald.add_animal('cow',5)
macdonald.add_animal('sheep')
macdonald.add_animal('sheep')
macdonald.add_animal('goat', 12)
macdonald.count()
macdonald.get_animal_types()
macdonald.get_short_info()
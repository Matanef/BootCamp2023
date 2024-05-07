# class Shape:
#   sides = 4 #first property
#   name = "Square" #second property
#   def description(a): #method defined
#     return ("A square with 4 sides")

# s1 = Shape() #creating an object of Shape
# print ("Name of shape is:",(s1.name))
# print ("Number of sides are:",(s1.sides))
# print (s1.description())

# class Circle:
#     color = "red"

# class NewCircle(Circle):
#     color = "blue"

# nc = NewCircle
# print(nc.color)
# # >> What will be the output ?

# class Circle:
#     def __init__(self, diameter):
#       self.diameter = diameter

#     def grow(self, factor=2):
#         """grows the circle's diameter by factor"""
#         self.diameter = self.diameter * factor

# class NewCircle(Circle):
#     def grow(self, factor=2):
#         """grows the area by factor..."""
#         self.diameter = (self.diameter * factor * 2)

# nc = NewCircle(1)
# print(nc.diameter)

# nc.grow()

# print(nc.diameter)
# # >> What will be the output

# class Door():
#     def __init__(self):
#       self.is_opened = False

#     def open_door(self):
#       if not self.is_opened:
#         print("The Door is now open.")
#         self.is_opened = True
#       else:
#          print("The door is already opened.")

#     def close_door(self):
#         if self.is_opened:
#             self.is_opened = False
#             print("Door closed")
#         else:
#            print("The door is now closed")

# class BlockedDoor(Door):
#     def open_door(self):
#         raise ("A blocked door cannot be opened.")
    
#     def close_door(self):
#         raise ("A blocked door cannot be closed.")

# # Example usage:
# door = Door()
# door.open_door()
# door.close_door()

# blocked_door = BlockedDoor()
# blocked_door.open_door()  # This will raise a ValueError
# blocked_door.close_door()  # This will raise a ValueError

# class BlockedDoor()


class Animal():
    def __init__(self, name, age):
      self.name = name
      self.age = age
      self.health = 100
      self.hunger = 0
      self.happiness = 50

    def speak(self, sound):
        self.sound = sound
        print(f"{self.name} does {self.sound}...")
    def eat(self, food):
        if self._hunger>10:
            self._hunger -= 10
            self._happiness += 5
        self.food = food
        print(f"{self.name} eats {self.food}")

animal = Animal("roffi", 7)
print(animal.speak("Woof"))
print(animal.eat("Beef"))
      
   

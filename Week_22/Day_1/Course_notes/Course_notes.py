class dog:
    def __init__(self, breed, color) -> None:
        self.breed = breed
        self.color = color

    def __str__(self) -> str:
        return f"{self.breed} {self.color}"
    
    def bark(self):
        print ("whoof")



dog1 = dog("Chewawa", "Black")
dog2 = dog("german sheperd", "brown")

print(dog2.color + dog1.breed)



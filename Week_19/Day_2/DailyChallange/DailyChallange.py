from random import shuffle

# string = input("please enter a string of 10 chars")
# if len(string) != 10:
#     print("the lengh of the string is not 10") 
# else:
#     print("perfect string")

string = input("please enter a string of 10 chars: ")
if len(string) < 10:
    print("string too short")
elif len(string) > 10:
    print("string too long")
else:
    print("perfect string")

print(f"position: {string[len(string)-len(string)]}, position: {string[len(string)-1]}")

for i in range(len(string)):
    print(string[i])

newsentece = list(string)
shufflelist = [[i]for i in range(len(newsentece))]
shuffle(shufflelist)
print(shufflelist)
# jumbled = shuffle(newsentece)
# print(jumbled)
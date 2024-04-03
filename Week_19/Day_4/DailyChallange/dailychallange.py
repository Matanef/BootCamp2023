# new_list= []

# number = int(input("Please enter a number: "))
# length = int(input("Please enter a length: "))


# for i in range(0 ,length):
#     new_number = number*(1+i)
#     new_list.append(new_number)
# print(new_list)



word = input("Please enter a word with duplicate letters: ")
print("original word", word)
new_word_list = [word[0]]
for i in range(1, len(word)):
    print(i)
    if word[i] != word[i-1]:
        new_word_list.append(word[i])
    else:
        new_word_list.pop()
print("New word without consecutive duplicate letters:", new_word_list)
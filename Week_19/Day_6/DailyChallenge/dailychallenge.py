word = input("Please enter a word: ")

word_dictionary = {}

for index, letter in enumerate(word):
    print(index, letter)
    if letter in word_dictionary:
        word_dictionary[letter].append(index)
    else:
        word_dictionary[letter] = [index]

print(word_dictionary)

word_dictionary2 = {letter: [index for index, char in enumerate(word) if char == letter] for letter in set(word)}

print(word_dictionary2)
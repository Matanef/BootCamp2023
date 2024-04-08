import numpy as np

def extract_words(matrix_string):
    matrix = np.array([list(row) for row in matrix_string.strip().split('\n')])
    words =[]
    current_word = ''

    for row in matrix:
        for char in row:
            if char != ' ':
                current_word += char
            else:
                if current_word:
                    words.append(current_word)
                    current_word = ''
    if current_word:
        words.append(current_word)

    return words

matrix_string = """
7ii
Tsx
h%?
i #
sM 
$a 
#t%
^r!
"""

words = extract_words(matrix_string)
print(words)
import numpy as np

def extract_words(matrix_string):
    matrix = np.array([list(row) for row in matrix_string.strip().split('\n')])
    words =[]
    current_word = ''

    for row in matrix:
        for char in row:
            if char.isalpha():
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



# def extract_words2(matrix_string):
#     words = []
#     lines = matrix_string.strip().split('\n')
#     line_length = max(len(line) for line in lines)
#     for col_index in range(line_length):
#         print(col_index)
#         for char in line:
#             if char.isalpha():
#                 words.append(char)
#                 assembled = "".join(words)
#     return assembled


# list_char = extract_words2(matrix_string)
# print(list_char)


def extract_words_by_column(matrix_string):
    words = []
    lines = matrix_string.strip().split('\n')
    max_length = max(len(line) for line in lines)
    for col_index in range(max_length):
        for line in lines:
            if col_index < len(line) and line[col_index].isalpha():
                words.append(line[col_index])
                assembled = "".join(words)
    return assembled

list_char = extract_words_by_column(matrix_string)
print(list_char)
lst = [1, 2, 3, 4, "a", "b", "c", 38.5, "56.7"]
print(lst)
print(type(lst))
print(type(lst[-1])) 

l1 = [1, 2, 3, 4, 5, 6]
l1.append(3)
l1.append([7, 8, 9])
l1.extend([6, 7, 8])
print(l1)

l1=[1, 2, 3, 4, 5, 6]
l1.insert(2, 6)
print(l1)

l2 = [1, 2, 3, 4, 5, "a", "a", "b", 1, 2, 4]
s = l2.count(4)
print(s)

a = ["b", "g", "a", "d", "f", "c", "h", "e"]
x = sorted(a)
print("a after sorted function")
print(a)
print(x)

b = [1, 2, 5, 8, 3]
b.sort()
print(b)


lst = [1, 2, 3, 4, 5, 6, 7]
print(lst[0:4])
print(lst[::])
print(lst[::-1])

lst = [1, 2, 3, 4, 5, 6, 7]
print(lst.pop())
print(lst)
lst.remove(4)
print(lst) 
lst.clear()
print(lst)


def say_hello():
    """A function that says hello"""
    print("Hello!") 

say_hello()
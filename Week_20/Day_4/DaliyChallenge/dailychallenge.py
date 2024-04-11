def division_try(number):
    try:
        division = number/0
        print(division)
    except (ValueError, ZeroDivisionError) as e:
        print(f"An error occoured: {e}")

check = division_try(5)
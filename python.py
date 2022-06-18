import random
b = random.randint(1, 10)
a = input(": ")
if int(a) == int(b):
    print("You win")
else:
    print("You lose")
    j = 10
    while 100 < j:
        a = input(": ")
        if int(a) == int(b):
            print("You win")
    else:
        print("You lose")
        j = 10

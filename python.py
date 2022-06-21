import random
from random import randint
import os

ran=random.randint(1,100)
op1=input("Add a number: ")
totAdd=int(op1)+int(ran)
op2=input("Subtract a number: ")
if int(op2)>int(op1):
    print("add a number that is more than the number yousubtract from!")
    op2=input("Subtract a number: ")
else:
    totalSub=int(totAdd)-int(op2)
    print("The total is: ",totalSub)
    ans=input("guess the number")
    if int(ans)==totalSub:
        print("your answer is correct")
    else:
        print("error")
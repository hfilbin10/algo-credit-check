def credit_check(lst):
    credit_num=[*lst]
    for n in range(len(credit_num)):
        if (n+1)%2 != 0:
            credit_num[n]=int(credit_num[n])*2
            if credit_num[n] > 9:
                credit_num[n]=[*str(credit_num[n])]
                credit_num[n]=int(credit_num[n][0])+int(credit_num[n][1])
        else:
            credit_num[n]= int(credit_num[n])
    credit_num= sum(credit_num)
    if credit_num % 10 == 0:
        return "The number is valid!"
    return "The number is invalid!"

# Your Luhn Algorithm Here
# Expected Output:
# If it is valid, print "The number is valid!"
# If it is invalid, print "The number is invalid!"


def beeramid(bonus, price):
    if(bonus <= 0):
        return 0
    cans = bonus//price
    rest = cans
    row = 1
    lvl = 0
    while(1):
        rest = rest - row**2
        row += 1
        lvl += 1
        if(rest < 0):
            break
    return lvl-1


print(beeramid(1500, 2))

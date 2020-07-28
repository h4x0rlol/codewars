def dig_pow(n, p):
    res = 0
    numbers = list(map(int, str(n)))
    for number in numbers:
        res += number**p
        p = p+1
    k = res//n
    if(res % n == 0):
        return k
    return -1


print(dig_pow(212, 6))

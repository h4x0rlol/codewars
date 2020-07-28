def total(arr):
    sum = 0
    for i in range(0, len(arr)):
        if(isPrime(i)):
            sum += arr[i]
    return sum


def isPrime(n):
    if n <= 1:
        return False
    if n <= 3:
        return True
    if (n % 2 == 0 or n % 3 == 0):
        return False

    i = 5
    while(i * i <= n):
        if (n % i == 0 or n % (i + 2) == 0):
            return False
        i = i + 6
    return True


print(total([1, 2, 3, 4]))

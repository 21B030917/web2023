def Xor(x, y):
    ans = x ^ y
    return ans

x, y = map(int, input().split())
print(Xor(x, y))
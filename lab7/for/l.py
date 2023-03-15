x = int(input())
ans = 0
i = 0
n = 0
while(x != 0):
    a = x % 10
    ans += a * pow(2, i)
    x = x // 10
    i += 1
print(ans)
from math import sqrt

x = int(input())
a = int(sqrt(x))
ans = 0

for i in range(1, a):
    if x % i == 0:
        ans += 2

if x % a == 0:
    ans += 1

print(ans)
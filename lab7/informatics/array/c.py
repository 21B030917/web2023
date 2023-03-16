x = int(input())
arr = input().split()
ans = 0
for i in range(x):
    if int(arr[i]) > 0:
        ans += 1

print(ans)
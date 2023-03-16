x = int(input())
arr = input().split()
ans = 0
for i in range(x-1):
    if int(arr[i+1]) > int(arr[i]):
        ans += 1

print(ans)
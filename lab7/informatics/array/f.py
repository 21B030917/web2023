x = int(input())
arr = input().split()
ans = 0
for i in range(x-2):
    if (int(arr[i+2]) < int(arr[i+1])) and (int(arr[i]) < int(arr[i+1])) :
        ans += 1

print(ans)
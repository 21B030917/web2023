x = int(input())
arr = input().split()
for i in range(x):
    if int(arr[i])%2 == 0:
        print(arr[i], end=' ')
x = int(input())
arr = input().split()

for i in range(x-1):
    if (int(arr[i+1]) > 0 and int(arr[i])>0) or (int(arr[i+1]) < 0 and int(arr[i])<0):
        print("YES")
        break

else:
    print("NO")



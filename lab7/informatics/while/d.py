from re import L


x = int(input())
i = 1
while(i<=x):
    if i == x:
        print("YES")
        
        break
    i *= 2
else:
    print("NO")
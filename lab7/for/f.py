x = input()
y = x[::-1]
a = ""
for i in y:
    if i == "0" and len(a) == 0:
        continue
    else:
        a += i
print(a)
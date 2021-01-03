#1053
n = int(input())
print(int(not n))

#1054
a, b = map(int, (input().split()))
print(int(a and b))

#1055
a, b = map(int, (input().split()))
print(int(a or b))

#1056
a, b = map(int, (input().split()))
print(int((a and not b) or (not a and b)))

#1057
a, b = map(int, (input().split()))
print(int((not a and not b) or (a and b)))

#1058
a, b = map(int, (input().split()))
print(int(not a and not b))
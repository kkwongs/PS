#1078
n = int(input())
sum = 0
for i in range(1,n+1):
  if i % 2 ==0:
    sum += i
print(sum)

#1079
c = input().split()
for i in c:
  print(i)
  if i == 'q':
    break;

#1080
n = int(input())
sum = 0
for i in range(1,n):
  sum += i;
  if sum >= n:
    print(i)
    break

#1081
n, m = map(int, input().split())
for i in range(1,n+1):
  for j in range(1,m+1):
    print(i, j, sep=' ')

#1082
x = int(input(), 16)
for i in range(1,16):
  print("%X*%X=%X" % (x,i,x*i)

#1083
n = int(input())
for i in range(1,n+1):
  if i % 3 == 0:
    print('X', end=' ')
  else:
    print(i, end=' ')

#1084(시간초과)
r, g, b = map(int, input().split())
n = 0
for i in range(r):
  for j in range(g):
    for k in range(b):
      print(i, j, k)
      n += 1
print(n)

#1085
h, b, c, s = map(int, input().split())
m = 8*1024*1024
print(round((h*b*c*s)/m, 1), "MB")

#1086
w, h, b = map(int, input().split())
m = 8*1024*1024
print("%.2f MB" % (w*h*b/m))

#1087
n = int(input())
sum = 0
i = 1
while sum < n:
  sum += i
  i += 1
print(sum)

#1088
n = int(input())
for i in range(1, n+1):
  if i % 3 != 0:
    print(i, end=' ')

#1089
a, d, n = map(int, input().split())
for i in range(n-1):
  a += d
print(a)

#1090
a, d, n = map(int, input().split())
for i in range(n-1):
  a *= d
print(a)

#1091
a, m, d, n = map(int, input().split())
for i in range(n-1):
  a = a * m + d
print(a)

#1092
a, b, c = map(int, input().split())
day = 1
while day % a != 0 or day % b != 0 or day % c != 0:
  day += 1
print(day)
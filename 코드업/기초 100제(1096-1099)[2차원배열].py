#1096
n = int(input())
a = [[0]*19 for i in range(19)]
for i in range(n):
  x, y = map(int, input().split())
  a[x-1][y-1] = 1
for i in range(19):
  for j in range(19):
    print(a[i][j], end=' ')
  print()

#1097
a = [[x for x in map(int, input().split())] for _ in range(19)]
n = int(input())

for i in range(n):
  x, y = map(int, input().split())
  for j in range(19):
    if a[x-1][j] == 0:
      a[x-1][j] = 1
    else:
      a[x-1][j] = 0
  for j in range(19):
    if a[j][y-1] == 0:
      a[j][y-1] = 1
    else:
      a[j][y-1] = 0

for i in range(19):
  for j in range(19):
    print(a[i][j], end=' ')
  print()

#1098
h, w = map(int, input().split())
a = [[0]*w for _ in range(h)]
n = int(input())

for _ in range(n):
  l, d, x, y = map(int, input().split())
  if d == 0:
    for i in range(l):
      a[x-1][y+i-1] = 1
  else:
    for i in range(l):
      a[x+i-1][y-1] = 1

for i in range(h):
  for j in range(w):
    print(a[i][j], end=' ')
  print()

#1099
a = [[x for x in map(int, input().split())] for _ in range(10)]
x, y = 1, 1

while 1:
  if a[x][y] == 0 and a[x][y+1] != 1:
    a[x][y] = 9
    y += 1
  elif a[x][y] == 0 and a[x][y+1] == 1:
    a[x][y] = 9
    x += 1
  elif a[x][y] == 2:
    a[x][y] = 9
    break
  else:
    break

for x in range(10):
  for y in range(10):
    print(a[x][y], end=' ')
  print()
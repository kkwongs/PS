#1071
n = map(int, input().split())
for i in n:
  if i == 0:
    break
  print(i)

#1072
n = int(input())
m = map(int, input().split())
for i in m:
  print(i)

#1073
n = map(int, input().split())
for i in n:
  if i == 0:
    break
  print(i)

#1074
n = int(input())
while n >= 1:
  print(n)
  n = n - 1

#1075
n = int(input())
while n > 0:
  n = n - 1
  print(n)

#1076
a = 'a'
c = input()
while a <= c:
  print(a, end=' ')
  a = chr(ord(a) + 1)

#1077
m = 0
n = int(input())
while m <= n:
  print(m)
  m += 1
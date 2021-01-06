# 1065
a, b, c = map(int, input().split())
if a % 2 == 0:
  print(a)
if b % 2 == 0:
  print(b)
if c % 2 == 0:
  print(c)

#1066
a, b, c = map(int, input().split())
if a % 2 == 0:
  print('even')
else:
  print('odd')
if b % 2 == 0:
  print('even')
else:
  print('odd')
if c % 2 == 0:
  print('even')
else:
  print('odd')

#1067
n = int(input())
if n > 0:
  print('plus')
  if n % 2 == 0:
    print('even')
  else:
    print('odd')
else:
  print('minus')
  if n % 2 == 0:
    print('even')
  else:
    print('odd')

#1068
n = int(input())
if n >= 90:
  print('A')
elif n >= 70:
  print('B')
elif n >= 40:
  print('C')
else:
  print('D')

#1069
c = input()
if c == 'A':
  print('best!!!')
elif c == 'B':
  print('good!!')
elif c == 'C':
  print('run!')
elif c == 'D':
  print('slowly~')
else:
  print('what?')

#1070
n = int(input())
if n == 12 or n == 1 or n == 2:
  print('winter')
elif n == 3 or n == 4 or n == 5:
  print('spring')
elif n == 6 or n == 7 or n == 8:
  print('summer')
else:
  print('fall')
#1010
n = int(input())
print(n)

#1011
c = input()
print(c)

#1012
f = float(input())
print("%f" % f)

#1013
a, b = map(int, input().split())
print(a, b)

#1014
a, b = input().split()
print(b, a)

#1015
n = float(input())
print("%.2f" % round(n, 2))

#1017
n = int(input())
print(n, n, n)

#1018
h, m = map(int, input().split(':'))
print(h, m, sep=':')

#1019
y, m, d = map(int, input().split('.'))
print("%04d" % y, "%02d" % m, "%02d" % d, sep='.')

#1020
a, b = input().split('-')
print(a + b)

#1021
c = input()
print(c)

#1022
s = input()
print(s)

#1023
a, b = map(int, input().split('.'))
print(a)
print(b)

#1024
s = input()
for c in s:
  print("'" + c + "'")

#1025
n = input()
print("[", int(n[0]) * 10000, "]", sep='')
print("[", int(n[1]) * 1000, "]", sep='')
print("[", int(n[2]) * 100, "]", sep='')
print("[", int(n[3]) * 10, "]", sep='')
print("[", int(n[4]), "]", sep='')

#1026
h, m, s = map(int, input().split(':'))
print(m)

#1027
y, m, d = map(int, input().split('.'))
print("%02d" % d, "%02d" % m, "%04d" % y, sep = '-')
# https://www.acmicpc.net/problem/4796

n = 1
result = 0

while True:
  l, p, v = map(int, input().split())

  if l == 0 and p == 0 and v == 0:
    break

  if l < v % p:
    result = (v // p) * l + l
  else:
    result = (v // p) * l + (v % p)

  print('Case ', n, ': ', result, sep='')
  n += 1
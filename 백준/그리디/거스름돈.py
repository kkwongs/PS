# https://www.acmicpc.net/problem/5585

n = int(input())
n = 1000 - n
arr = [500, 100, 50, 10, 5, 1]
result = 0

for i in arr:
  if n >= i:
    result += n // i
    n %= i

print(result)
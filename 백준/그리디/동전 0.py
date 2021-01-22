# https://www.acmicpc.net/problem/11047

n, k = map(int, input().split())
count = 0
arr = []
for _ in range(n):
  a = int(input())
  arr.append(a)
arr.reverse()

for i in arr:
  if k // i != 0:
    count += k // i
    k %= i

print(count)
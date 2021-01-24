# https://www.acmicpc.net/problem/2217

n = int(input())
arr = []
w = []

for _ in range(n):
  k = int(input())
  arr.append(k)
arr.sort()

for i in range(n):
  w.append(arr[i] * (n - i))

print(max(w))
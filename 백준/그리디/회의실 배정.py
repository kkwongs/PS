# https://www.acmicpc.net/problem/1931

n = int(input())
arr = []
for _ in range(n):
  s, f = map(int, input().split())
  arr.append([s,f])
arr.sort(key = lambda x : (x[1], x[0]))

result = 1
finish = 0
for i in range(n-1):
  if arr[finish][1] <= arr[i+1][0]:
    result += 1
    finish = i+1

print(result)
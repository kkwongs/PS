# https://www.acmicpc.net/problem/11399

n = int(input())
p = list(map(int,(input().split())))
p.sort()

sum = p[0]
for i in range(1,n):
  sum += p[i]+p[i-1]
  p[i] = p[i]+p[i-1]

print(sum)
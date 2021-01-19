#1093
n = int(input())
a = [0 for i in range(23)]
t = list(map(int, input().split()))
for i in t:
  a[i-1] += 1
for i in range(23):
  print(a[i], end=' ')

#1094
n = int(input())
a = list(map(int, input().split()))
a.reverse()
for i in a:
  print(i,  end=' ')

# 역순 정렬
# n = int(input())
# a = list(map(int, input().split()))
# for i in range(int(len(a)/2)):
#   temp = a[i];
#   a[i] = a[len(a)-1-i]
#   a[len(a)-1-i] = temp;
# for i in a:
#   print(i, end=' ')

#1095
n = int(input())
a = list(map(int, input().split()))
min = a[0]
for i in range(len(a)-1):
  if min > a[i+1]:
    min = a[i+1]
print(min)
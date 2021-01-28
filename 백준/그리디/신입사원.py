# https://www.acmicpc.net/problem/1946

# Python 3 시간 초과
# PyPy3 -> 메모리: 225684KB, 시간: 7200ms
t = int(input())

for _ in range(t):
  n = int(input())
  arr = []
  result = 1
  s = 0
  for _ in range(n):
    score1, score2 = map(int, input().split())
    arr.append([score1, score2])
  arr.sort()

  for i in range(n-1):
    if arr[s][1] > arr[i+1][1]:
      result += 1
      s = i+1

  print(result)

# sort() 함수에 lambda 표현식 사용
# Python 3 시간 초과
# PyPy3 -> 메모리: 226780KB, 시간: 5368ms
t = int(input())

for _ in range(t):
  n = int(input())
  arr = []
  result = 1
  s = 0
  for _ in range(n):
    score1, score2 = map(int, input().split())
    arr.append([score1, score2])
  arr.sort(key = lambda x : (x[0]))

  for i in range(n-1):
    if arr[s][1] > arr[i+1][1]:
      result += 1
      s = i+1

  print(result)

# sys모듈 사용, input() -> sys.stdin.readline()
# Python 3 -> 메모리: 45200KB, 시간: 4236ms
# PyPy3 -> 메모리: 232912KB, 시간: 3384ms
import sys

t = int(input())

for _ in range(t):
  n = int(input())
  arr = []
  result = 1
  s = 0
  for _ in range(n):
    score1, score2 = map(int, sys.stdin.readline().split())
    arr.append([score1, score2])
  arr.sort(key = lambda x : (x[0]))

  for i in range(n-1):
    if arr[s][1] > arr[i+1][1]:
      result += 1
      s = i+1

  print(result)

# 결론
# 1. 처리 속도: Python < PyPy, 메모리 효율: Python > PyPy
# 2. input() 과 sys.stdin.readline()의 차이
#   - input() 내장 함수는 입력 받기 전 prompt를 출력하기 때문에
#     대량의 입력을 받는 경우 입력을 받고 prompt를 띄우는 과정을 반복으로 오류 발생 가능성 존재.
#     또 입력을 받고 추가적으로 strip()함수를 적용시켜 값을 리턴하기 때문에 느림.
#   - sys.stdin.readline() 은 prompt를 인수로 받지도 않고
#     strip()함수도 적용시키지 않기 때문에 input()보다 빠름.
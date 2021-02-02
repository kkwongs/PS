import sys

# 단어 입력
n = int(sys.stdin.readline())
words = []
for _ in range(n):
  alphabet = sys.stdin.readline().rstrip()
  words.append(alphabet)

# 각각의 알파벳에 대한 가중치 추가
weights = [0 for _ in range(26)]
for word in words:
  digit = len(word) - 1
  for alphabet in word:
    weights[ord(alphabet) - 65] += 10 ** digit
    digit -= 1

# 가중치가 높은 순서대로 큰 숫자 매칭
weights.sort(reverse = True)
result = 0
num = 9
for i in range(26):
  result += weights[i] * num
  num -= 1

print(result)
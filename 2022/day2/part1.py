print(sum([4 if block == 'A X' else 8 if block == 'A Y' else 3 if block == 'A Z' else 1 if block == 'B X' else 5 if block == 'B Y' else 9 if block == 'B Z' else 7 if block == 'C X' else 2 if block == 'C Y' else 6 if block == 'C Z' else block for block in open("input.txt").read().split('\n')]))
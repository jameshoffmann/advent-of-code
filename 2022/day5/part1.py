import numpy as np
from collections import deque

def parse(input):
    stacks = np.array([x[1::2][::2] for x in [[*string] for string in open(input).read().splitlines()[0:8]]]).T.tolist()
    for i in range(len(stacks)): 
        stacks[i] = list(filter(lambda x: x != ' ', stacks[i]))
        stacks[i] = deque(stacks[i])
    
    moves = [move.split() for move in open(input).read().splitlines()[10:]]
    for i in range(len(moves)):
        moves[i] = dict(zip(moves[i][::2], (moves[i][1::2])))
        moves[i] = dict((key, int(value)) for key, value in moves[i].items())

    return stacks, moves

def main():
    stacks, moves = parse("input.txt")

    for move in moves:
        for i in range(move["move"]):
            stacks[move["to"] - 1].insert(0, stacks[move["from"] - 1].popleft())

    message = []
    for stack in stacks:
        message.append(stack[0])
    print(''.join(message))
                
if __name__ == "__main__":
    main()
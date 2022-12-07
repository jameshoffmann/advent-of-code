import numpy as np
from collections import deque

def parse(input):
    stacks = np.array([x[1::2][::2] for x in [[*string] for string in open(input).read().splitlines()[0:8]]]).T.tolist()
    for i in range(len(stacks)): 
        stacks[i] = list(filter(lambda x: x != ' ', stacks[i]))
    
    moves = [move.split() for move in open(input).read().splitlines()[10:]]
    for i in range(len(moves)):
        moves[i] = dict(zip(moves[i][::2], (moves[i][1::2])))
        moves[i] = dict((key, int(value)) for key, value in moves[i].items())

    return stacks, moves

def main():
    stacks, moves = parse("input.txt")

    for move in moves:
        stacks[move["to"]-1][:0] = stacks[move["from"]-1][0:move["move"]]
        del stacks[move["from"]-1][:move["move"]]

    message = []
    for stack in stacks:
        if(len(stack)):
            message.append(stack[0])
    print(''.join(message))
                
if __name__ == "__main__":
    main()
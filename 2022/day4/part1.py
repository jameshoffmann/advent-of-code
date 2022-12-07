import re

def parse(input):
    return [list(map(int,i)) for i in [re.split("-|,",x) for x in open(input).read().split("\n")]]

def main():
    tally = 0
    for group in parse("input.txt"):
        if(group[0] <= group[2] and group[1] >= group[3]):
            tally += 1
        elif(group[2] <= group[0] and group[3] >= group[1]):
            tally += 1
    print(tally)

if __name__ == "__main__":
    main()
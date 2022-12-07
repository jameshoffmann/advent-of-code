import re
#960 too high

def parse(input):
    return [list(map(int,i)) for i in [re.split("-|,",x) for x in open(input).read().split("\n")]]

def main():
    tally = 0
    for group in parse("input.txt"):
        if((group[2] - group[1] > 0 and group[3] - group[0] > 0) or (group[2] - group[1] < 0 and group[3] - group[0] < 0)):
            continue
        else:
            tally += 1
    print(tally)

if __name__ == "__main__":
    main()
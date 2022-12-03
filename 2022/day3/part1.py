def parse(input):
    return open(input).read().split("\n")

def main():
    sacks = parse("input.txt")
    sum = 0
    for sack in sacks:
        items = set()
        for i in range(0, len(sack)):
            if i < len(sack)//2:
                items.add(sack[i])
            elif sack[i] in items:
                sum += ord(sack[i]) - 96 if sack[i].islower() else ord(sack[i]) - 38
                break
    print(sum)
                
if __name__ == "__main__":
    main()
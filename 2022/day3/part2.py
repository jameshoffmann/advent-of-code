def parse(input):
    return list(zip(*[iter([set(x) for x in open(input).read().split("\n")])]*3))
    
def main():
    groups = parse("input.txt")
    sum = 0
    for group in groups:
        badge = ''.join(group[0].intersection(group[1].intersection(group[2])))
        sum += ord(badge) - 96 if badge.islower() else ord(badge) - 38
    print(sum)
                
if __name__ == "__main__":
    main()
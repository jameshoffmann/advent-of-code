def parse(input):
    lst = open(input).read().split("\n")
    return list(zip(*[iter(lst)]*3))

def main():
    groups = parse("input.txt")
    sum = 0
    for group in groups:
        badge = ''.join(set(group[0]).intersection(set(group[1]).intersection(set(group[2]))))
        sum += ord(badge) - 96 if badge.islower() else ord(badge) - 38
    print(sum)
                
if __name__ == "__main__":
    main()
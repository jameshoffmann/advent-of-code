N = 14

def parse(input):
    return open(input).read().strip()

def main():
    input = parse("input.txt")
    for i in range (N, len(input)):
        if(len(set(input[i-N:i])) == N):
            print(i)
            break        

if __name__ == "__main__":
    main()
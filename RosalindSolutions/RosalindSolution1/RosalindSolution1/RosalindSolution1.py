#By: CodeBioAndMore (16/05/2020)

#Solution 1: Counting DNA Nucleotides [ID=DNA] http://rosalind.info/problems/dna/

strDNA = 'AGCTTTTCATTCTGACTGCAACGGGCAATATGTCTCTGTGTGGATTAAAAAAAGAGTGTCTGATAGCAGC'

numA = strDNA.count('A')
numC = strDNA.count('C')
numG = strDNA.count('G')
numT = strDNA.count('T')

print("Answer:") 
print("'A' 'C' 'G' 'T'") 
print(str(numA) +" "+ str(numC) +" "+ str(numG) +" "+ str(numT))

#Getting the DNA sequence from a txt file:
file = open('../rosalind_dna.txt', 'r')
stringDNA= file.read()

print("1) Answer:") 
print("'A' 'C' 'G' 'T'") 
print(*map(stringDNA.count, "ACGT")) #The map() function executes a specified function for each item in a iterable. The item is sent to the function as a parameter.

for i in 'ACGT':
    print(stringDNA.count(i))
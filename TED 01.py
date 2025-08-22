alturas = []
generos = []
num_mulheres = 0
media = 0
total = 0
num_homens = 0

for i in range(3):
    alt = float(input('Qual sua altura: '))
    gen = input("Qual seu gênero, digite F para feminino, e M para masculino: ").strip().upper()

    alturas.append(alt)
    generos.append(gen)

    maior = max(alturas)
    menor = min(alturas)

    if gen == 'F':
        num_mulheres += 1


    if gen == 'M':
        num_homens += 1

        if num_homens == 0:
            media = 0
        else:
            total = total + alt
            media = total/num_homens

print(f'A maior altura do grupo é {maior}')
print(f'A menor altura do grupo é {menor}')
print(f'A média de altura das pessoas do gênero masculino {media}')
print(f'O número de pessoas do gênero feminino é {num_mulheres}')

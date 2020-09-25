from csv import reader,writer
from re import search
from os import listdir, system

filenames = listdir(".")
filenames.remove("checkcontents.py")
filenames.remove("renamefield.py")
filenames.sort()

for name in filenames:
    month_year = search(r"(\d+)_(\d+)",name).groups()
    lines = []
    with open(name, newline='') as vra_file:
        print(f"reading {name}")
        vra_csvreader = reader(vra_file, delimiter=';')
        lines = list(vra_csvreader)
        print(f"lines[0][11] is {lines[0][11]}")
        lines[0][11] = 'codigo_justificativa'
        print(f"lines[0][11] is {lines[0][11]}")
    with open(name, mode='w',newline='') as vra_file:
        # print(f"writing {name}")
        vra_csvwriter = writer(vra_file,delimiter=';')
        vra_csvwriter.writerows(lines)
        # print(f"written {name}")

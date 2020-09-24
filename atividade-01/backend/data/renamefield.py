from csv import reader,writer
from re import search
from os import listdir, system

filenames = listdir(".")
filenames.remove("checkcontents.py")

filenames.sort()

for name in filenames:
    month_year = search(r"(\d+)_(\d+)",name).groups()
    lines = []
    with open(name, newline='') as vra_file:
        print(f"reading {name}")
        vra_csvreader = reader(vra_file, delimiter=';')
        lines = list(vra_csvreader)
        lines[0][0] = 'sg_empresa_icao'
        print(f"lines[0][0] is {lines[0][0]}")
    with open(name, mode='w',newline='') as vra_file:
        print(f"writing {name}")
        vra_csvwriter = writer(vra_file,delimiter=';')
        vra_csvwriter.writerows(lines)
        print(f"written {name}")

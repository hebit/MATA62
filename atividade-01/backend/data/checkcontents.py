from csv import reader,writer
from re import search
from os import listdir, system

filenames = listdir(".")
filenames.remove("checkcontents.py")
filenames.remove("renamefield.py")
filenames.sort()

for name in filenames:
    month_year = search(r"(\d+)_(\d+)",name).groups()

    with open(name, newline='') as vra_file:
        vra_csvreader = reader(vra_file, delimiter=';')
        print(next(vra_csvreader)[4])

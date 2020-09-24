from csv import reader
from re import search
from os import listdir, system

filenames = listdir(".")
filenames.remove("checkcontents.py")

filenames.sort()

for name in filenames:
    month_year = search(r"(\d+)_(\d+)",name).groups()
    with open(name, newline='') as vra_file:
        vra_csvreader = reader(vra_file, delimiter=';')
        count = 0
        print(name)
        print(next(vra_csvreader)[0])

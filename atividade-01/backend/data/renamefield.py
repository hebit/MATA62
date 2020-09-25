from csv import reader,writer
from re import search
from os import listdir, system

filenames = listdir(".")
filenames.remove("checkcontents.py")
filenames.remove("renamefield.py")
filenames.sort()

count = 0
for name in filenames:
    month_year = search(r"(\d+)_(\d+)",name).groups()
    lines = []
    with open(name, newline='') as vra_file:
        print(f"reading {name}")
        vra_csvreader = reader(vra_file, delimiter=';')
        lines = list(vra_csvreader)
        for line in lines:
            for cell in line:
                if cell != cell.strip():
                    count+=1
                cell = cell.strip()
                with open(name, mode='w',newline='') as vra_file:
                    # print(f"writing {name}")
                    vra_csvwriter = writer(vra_file,delimiter=';')
                    vra_csvwriter.writerows(lines)
                    # print(f"written {name}")

print(count)

                # pattA = r"^$" # empty string
                #
                # # grupo 1 => mes com 1 digito com horario
                # pattB = r"^\d/\d/201[56789] [012]\d:[0-5]\d$" # 1/9/2017 23:59
                # pattC = r"^[012]\d/\d/201[56789] [012]\d:[0-5]\d$" # 11/9/2017 23:59
                # pattD = r"^3[01]/\d/201[56789] [012]\d:[0-5]\d$" # 30/9/2017 23:59
                #
                # # grupo 2 => mês começando com 0 com horario
                # pattE = r"^\d/0\d/201[56789] [012]\d:[0-5]\d$" # 1/09/2017 23:59
                # pattF = r"^[012]\d/0\d/201[56789] [012]\d:[0-5]\d$" # 11/09/2017 23:59
                # pattG = r"^3[01]/0\d/201[56789] [012]\d:[0-5]\d$" # 30/9/2017 23:59
                #
                # # grupo 3 => mês começando com 1 com horario
                # pattH = r"^\d/1[012]/201[56789] [012]\d:[0-5]\d$" # 1/11/2017 23:59
                # pattI = r"^[012]\d/1[012]/201[56789] [012]\d:[0-5]\d$" # 11/11/2017 23:59
                # pattJ = r"^3[01]/1[012]/201[56789] [012]\d:[0-5]\d$" # 30/11/2017 23:59
                #
                # # grupo 4 => mes com 1 digito sem horario
                # pattK = r"^\d/\d/201[56789]$" # 1/9/2017
                # pattL = r"^[012]\d/\d/201[56789]$" # 11/9/2017
                # pattM = r"^3[01]/\d/201[56789]$" # 30/9/2017
                #
                # # grupo 5 => mês começando com 0 sem horario
                # pattN = r"^\d/0\d/201[56789]$" # 1/09/2017
                # pattO = r"^[012]\d/0\d/201[56789]$" # 11/09/2017
                # pattP = r"^3[01]/0\d/201[56789]$" # 30/9/2017
                #
                # # grupo 6 => mês começando com 1 sem horario
                # pattQ = r"^\d/1[012]/201[56789]$" # 1/11/2017
                # pattR = r"^[012]\d/1[012]/201[56789]$" # 11/11/2017
                # pattS = r"^3[01]/1[012]/201[56789]$" # 30/11/2017
                #
                #
                # OR = "|"

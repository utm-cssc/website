import urllib.request
from bs4 import BeautifulSoup
import csv
from datetime import datetime


def parsedate(date):
    dates = date.split('-');
    start = datetime.strptime(dates[0].strip(), '%B %d, %Y')
    end = start
    if len(dates) > 1:
        end = datetime.strptime(dates[1].strip(), '%B %d, %Y')
    start = start.strftime('%Y-%m-%d')
    end = end.strftime('%Y-%m-%d')
    return [start, end]


def clean_tags(tags1, tags2):
    lst1 = [x.strip() for x in tags1.split(',')]
    lst2 = [x.strip() for x in tags2.split(',')]
    lst = list(set(lst1 + lst2))
    return ','.join(lst)


def relevant_tags(info):
    ans = ""
    dct = {"drop": "Drop Deadlines", "Credit/No Credit": "Cr/NCr", "break": "Breaks", "Break": "Breaks", "LWD": "LWD", "enrolment": "Enrolment", "Form": "Forms and Petitions", "form": "Forms and Petitions", "Petition": "Forms and Petitions", "petition": "Forms and Petitions"}
    for x in dct:
        if x in info:
            ans += "," + dct[x]
    return ans


write_to_csv = {}


def parse_html_to_csv(url, tags):
    fp = urllib.request.urlopen(url)
    mybytes = fp.read()
    summer_academic_html = mybytes.decode("utf8")
    fp.close()
    soup = BeautifulSoup(summer_academic_html, 'html.parser')

    for dateinfo in soup.find_all(class_='date'):
        info = dateinfo.find(class_='info').text
        date = dateinfo.find(class_='title').text
        dict_key = tuple([info, info] + parsedate(date))
        tags2 = tags + relevant_tags(info)
        old_tags = tags2
        if dict_key in write_to_csv:
            old_tags = write_to_csv[dict_key]
        write_to_csv[dict_key] = clean_tags(old_tags, tags)


urls = ["https://student.utm.utoronto.ca/importantDates/importantDates.php?sub_type=Academic&sub_session=Summer&sub_search_term=",
        "https://student.utm.utoronto.ca/importantDates/importantDates.php?sub_type=Financial&sub_session=Summer&sub_search_term=",
        "https://student.utm.utoronto.ca/importantDates/importantDates.php?sub_type=Academic&sub_session=Fall&sub_search_term=",
        "https://student.utm.utoronto.ca/importantDates/importantDates.php?sub_type=Financial&sub_session=Fall&sub_search_term="]
tags = ['Summer,Academic', 'Summer,Financial', 'Fall/Winter,Academic', 'Fall/Winter,Financial']

for i in range(4):
    parse_html_to_csv(urls[i], tags[i])


with open('important_dates.csv', 'w', newline='') as csvfile:

    spamwriter = csv.writer(csvfile, delimiter=',')
    spamwriter.writerow(['Title', 'Description', 'Start Date', 'End Date', 'Tags'])

    for item in write_to_csv:
        spamwriter.writerow(list(item) + [write_to_csv[item]])

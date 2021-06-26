import time
from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
from selenium.common.exceptions import TimeoutException
from selenium.webdriver.support.select import Select

# モジュールのインポート
from bs4 import BeautifulSoup

import chromedriver_binary


userDataDir = "/Users/nakamurasatoru/git/d_genji/genji_curation/src/500_common/Chrome1res"
profileDirectory = "Profile 1"


options = webdriver.ChromeOptions()
options.add_argument('--user-data-dir='+userDataDir)
options.add_argument('--profile-directory='+profileDirectory)
driver = webdriver.Chrome(options=options) #, executable_path=driver_path

page = 0

while page < 102:

    url = 'https://khirin-a.rekihaku.ac.jp/search?kywd=%E9%8C%A6%E7%B5%B5&page={}'.format(page)

    driver.get(url)

    page += 1

    html = driver.page_source.encode('utf-8')
    soup = BeautifulSoup(html, "html")

    name = "data/歴博/" + str(page).zfill(4)+".html"

    with open(name, mode='w') as f:
        f.write(str(soup))

    

'''
driver.find_element_by_link_text("錦絵データベース").click()

Select(driver.find_element_by_name("nitem01")).select_by_value("item06")

driver.find_element_by_name("nterm01_1").send_keys("東京大学史料編纂所")

driver.find_element_by_class_name("btn85").click()

driver.find_element_by_link_text("詳細").click()

flg = True

count = 1

while flg:

    time.sleep(3)

    html = driver.page_source.encode('utf-8')
    soup = BeautifulSoup(html, "html")

    name = "data/東京大学史料編纂所/" + str(count).zfill(4)+".html"

    with open(name, mode='w') as f:
        f.write(str(soup))

    btns = driver.find_elements_by_class_name("btn85")

    if len(btns) == 0:
        flg = False

    driver.find_elements_by_class_name("btn85")[1].click()

    count += 1

time.sleep(20)

'''

time.sleep(20)

#全てのウィンドウを閉じる
driver.quit()
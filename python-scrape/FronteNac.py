import requests
from bs4 import BeautifulSoup


def scrape_frontenac(url):

    page_to_scrape = requests.get(url)
    soup = BeautifulSoup(page_to_scrape.text, 'html.parser')
    grid = soup.find('div', class_='row property-listings grid')

    FronteNac = []
    articles = grid.find_all('article', class_='property-listing') if grid else []

    for article in articles:
        ribbon_green = article.find('div', class_='ribbon ribbon-green')
        if ribbon_green:
            temp_list = []
            h4_tag = article.find('h4')
            if h4_tag:
                a_tag = h4_tag.find('a')
                if a_tag:
                    temp_list.append(a_tag.get_text().strip())

            bedrooms_span = article.find('span', class_='bedrooms')
            if bedrooms_span:
                temp_list.append(bedrooms_span.get_text().strip())

            bathrooms_span = bedrooms_span.find_next_sibling('span') if bedrooms_span else None
            if bathrooms_span and 'bathrooms' in bathrooms_span.get('class', []):
                temp_list.append(bathrooms_span.get_text().strip())

            price_label = article.find('span', class_='property-price label label-primary pull-right')
            if price_label:
                temp_list.append(price_label.get_text().strip())

            FronteNac.append(temp_list)
import requests
from bs4 import BeautifulSoup

def scrape_frontenac(url):
    page_to_scrape = requests.get(url)
    soup = BeautifulSoup(page_to_scrape.text, 'html.parser')
    grid = soup.find('div', class_='row property-listings grid')

    frontenac_properties = []  
    articles = grid.find_all('article', class_='property-listing') if grid else []

    for article in articles:
        ribbon_green = article.find('div', class_='ribbon ribbon-green')
        if ribbon_green:
            property_dict = {}  
            h4_tag = article.find('h4')
            if h4_tag:
                a_tag = h4_tag.find('a')
                if a_tag:
                    property_dict["name"] = a_tag.get_text().strip()

            bedrooms_span = article.find('span', class_='bedrooms')
            if bedrooms_span:
                property_dict["bedrooms"] = bedrooms_span.get_text().strip()

                bathrooms_span = bedrooms_span.find_next_sibling('span') if bedrooms_span else None
                if bathrooms_span:
                    property_dict["bathrooms"] = bathrooms_span.get_text().strip()

            price_label = article.find('span', class_='property-price label label-primary pull-right')
            if price_label:
                property_dict["price"] = price_label.get_text().strip()

            image_img = article.find('img')
            if image_img and image_img.has_attr('src'):
                property_dict["image_url"] = image_img['src']

            frontenac_properties.append(property_dict) 

    return frontenac_properties


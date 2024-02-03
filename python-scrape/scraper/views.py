from django.http import JsonResponse
from .FronteNac import scrape_frontenac  # Import the scraping function

def scrape_view(request):
    # Assuming you have a specific URL to scrape, replace the placeholder below
    url = "https://www.frontenacproperty.com/properties/stud/?sort=availability&order=ASC"
    data = scrape_frontenac(url)
    return JsonResponse(data, safe=False)  # Convert the data to JSON response
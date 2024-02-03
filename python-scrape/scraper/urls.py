from django.http import JsonResponse
from .FronteNac import scrape_frontenac

def json_response(request):
    
    # Assuming your scraping logic is here and it returns a data dictionary
    
    data = scrape_frontenac()
    return JsonResponse(data)
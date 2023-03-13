import requests
import json

def get_vm_price(region, vm_type):
    # Construir la URL para la solicitud al API de Azure Prices
    api_url = "https://prices.azure.com/api/retail/prices?api-version=2023-01-01-preview&meterRegion='primary'"
    query = f"serviceName eq 'Virtual Machines' and armRegionName eq '{region}' and armSkuName eq '{vm_type}'"
    

    # Hacer la solicitud al API de Azure Prices sin autenticación
    response = requests.get(api_url, params={'$filter': query})
    response = response.json()
    
    # Buscar el precio de la VM que no tenga Windows en su product name
    vm_hourly_price = None
    for item in response['Items']:
        if 'Windows' not in item['productName']:
            vm_hourly_price = item['retailPrice']
            break
    
    print(f"Hourly price for {vm_type} in {region}: {vm_hourly_price}")
    vm_monthly_price = round(float(vm_hourly_price) * 730, 2)
    print(f"Monthly price for {vm_type} in {region}: {vm_monthly_price}")
    #Retornar el precio de la VM
    #return vm_price

get_vm_price(region='eastus', vm_type='Standard_B1s')




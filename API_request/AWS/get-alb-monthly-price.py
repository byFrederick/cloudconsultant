import boto3
import json


# Create a Session object that uses the 'default' profile in the ~/.aws/credentials file
session = boto3.Session(profile_name='default', region_name='us-east-1')

def get_alb_monthly_price(region, albType):
    # Get the ALB product code
    pricing_client = session.client('pricing', region_name='us-east-1')
    response = pricing_client.get_products(
        ServiceCode='AWSELB',
        Filters=[
            {'Type': 'TERM_MATCH', 'Field': 'productFamily', 'Value': 'Load Balancer-Application'},
            # {'Type': 'TERM_MATCH', 'Field': 'groupDescription', 'Value': albType},
            {'Type': 'TERM_MATCH', 'Field': 'location', 'Value': region}
        ]
    )

#     product = response['PriceList'][0]
    with open('prices-alb.json', 'w') as outfile:
        json.dump(response, outfile)
#     alb_product = json.loads(product)

#     # Get the monthly price for the ALB
#     hourly_price = None
#     for term in alb_product['terms']['OnDemand'].values():
#         hourly_price_dimensions = term['priceDimensions'].values()
#         hourly_price = list(hourly_price_dimensions)[0]['pricePerUnit']['USD']
#         break

#     print(f"Hourly price for {albType} in {region}: {hourly_price}")
#     monthly_price = round(float(hourly_price) * 730, 2)
#     print(f"Monthly price for {albType} in {region}: {monthly_price}")


get_alb_monthly_price('US East (N. Virginia)', 'Application Load Balancer')
import boto3
import json


# Create a Session object that uses the 'admin' profile in the ~/.aws/credentials file
session = boto3.Session(profile_name='default', region_name='us-east-1')

# Create an EC2 client using the session
ec2_client = session.client('ec2', region_name='us-east-1')

# Call EC2 API methods
response = ec2_client.describe_instances()

# Get the EC2 product code
pricing_client = session.client('pricing', region_name='us-east-1')
response = pricing_client.get_products(
    ServiceCode='AmazonEC2',
    Filters=[
        {'Type': 'TERM_MATCH', 'Field': 'instanceType', 'Value': 't2.micro'},
        {'Type': 'TERM_MATCH', 'Field': 'location', 'Value': 'US East (N. Virginia)'}, 
        {'Type': 'TERM_MATCH', 'Field': 'operatingSystem', 'Value': 'Linux'}
    ]
)

product = response['PriceList'][0]
with open('prices.json', 'w') as outfile:
    json.dump(response, outfile)
ec2_product = json.loads(product)

# Get the hourly price for the instance
hourly_price = None
for term in ec2_product['terms']['OnDemand'].values():
    hourly_price_dimensions = term['priceDimensions'].values()
    hourly_price = list(hourly_price_dimensions)[0]['pricePerUnit']['USD']
    break

print(f"Hourly price for t2.micro in us-east-1: {hourly_price}")
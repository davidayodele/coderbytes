import requests
import boto3
from botocore import UNSIGNED
from botocore.client import Config

#s3 = boto3.connect_s3(anon=True)
s3 = boto3.client('s3', config=Config(signature_version=UNSIGNED))

bucketName = 'coderbytechallengesandbox'
fileprefix = '__cb__'
#s3 = boto3.resource('s3')

#my_bucket = s3.Bucket(bucketName)
obj_list = s3.list_objects(Bucket=bucketName, Prefix=fileprefix)

#for item in obj_list:
#  print item

for content_key in obj_list['Contents']:
  print content_key['Key']
  #if (content_key == 'Key'):
  #  print


#data = s3.get_object(Bucket=bucketName, Key='__cb__file-name-s3-empty.txt')
#contents = data['Body'].read()
#print(contents)

#for item in obj_list:
#  print item

#for content_item in obj_list['Contents']:
#  print content_item

#for content in obj_list['Contents'][0]:
#  print content

  #contents = item.get(1)['Body'].read().decode(encoding="utf8", errors="ignore")
  #for line in contents.splitlines():
  #  print(line)
  #print(item.get()['Body'].read())


    
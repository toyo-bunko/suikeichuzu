import elasticsearch
from elasticsearch import Elasticsearch, RequestsHttpConnection, helpers
import json
import hashlib

indexes = ["main"]

es = Elasticsearch(["http://ldas.jp:9200"])

actions = []

with open("data/es.json") as f:
    data = json.load(f)

for obj in data:
    actions.append(obj)

res = elasticsearch.helpers.streaming_bulk(client=es, actions=actions, chunk_size=1000, max_retries=5,
                                                    initial_backoff=2, max_backoff=600, request_timeout=3600)

for ok, response in res:
    print(ok, response)
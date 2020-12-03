# A NODE.JS EXPRESS Server to implement Microservices

This is an example how to implement a Microservice in Nodejs

This API allows to get Country and Town data

countrydata.js is an exported const from https://restcountries.eu/rest/v2/all

## Creare Docker Image
## Build the image
```
docker build -f Dockerfile -t node-ms .
```
## Run the image
```
docker run -p 3000:3000 --name node-ms -d node-ms
```
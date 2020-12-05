# A NODE.JS EXPRESS Server to implement Microservices

This is an example how to implement a Microservice in Nodejs

This API allows to get Country and Town data

countrydata.js is an exported const from https://restcountries.eu/rest/v2/all
The file stores all countries of the world with their most important data  

For town data a local PostgreSQL database is used.  
This data can be retrieved by using PostgreSQL from Docker in this repo:  
https://github.com/Cookiemovies/postgresql  

For weather data openweathermap.org is used  

## API Calls

The API utilizes several calls to retrieve data:  

localhost:3000/countries            -   Get all countries  
localhost:3000/countryname/:name    -   Get country by name  
localhost:3000/countryid2/:id2      -   Get country by 2 digit country code  

localhost:3000/towns                -   Get all towns (huge)  
localhost:3000/townid/:id           -   Get town by id  
localhost:3000/townname/:name       -   Get town by name  
localhost:3000/towncc/:cc           -   Get town by country code  

localhost:3000/weather/:name        -   Get weather by townname  

localhost:3000/weathercondition/:name  
- Return a website with the Town, Weather Condition and Temperature  

## Build the Docker image

With this command you can build your Dockerimage.  
```
docker build -f Dockerfile -t node-ms .
```
## Run the image

With this command you can run your created Dockerimage.  
```
docker run -p 3000:3000 --name node-ms -d node-ms
```
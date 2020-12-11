# A NODE.JS EXPRESS Server example to implement Microservices

This is an example how to implement different Microservices in Nodejs  

This API allows to get Country, Town, Weather, and Currency data  

## COUNTRY DATA - EXAMPLE FOR LOCAL STORED JSON DATA
countrydata.js is an exported const from https://restcountries.eu/rest/v2/all  
The file stores all countries of the world with their most important data  

## TOWN DATA  1- EXAMPLE FOR LOCAL DATABASE ACCESS
For town data a local PostgreSQL database is used.  
This data can be retrieved by using PostgreSQL from Docker in this repo:  
https://github.com/Cookiemovies/postgresql  

Once the PostgreSQL container is running, this API can access the POSTGRESQL data.  
In order to use this you must rename town-pg.js to town.js (Backup town.js first).  

## TOWN DATA  2- EXAMPLE USING SQL SERVER RUNNING ON AZURE
For town data a SQL Server database on Azure is used.  
Ping me when you want to try, as you need an account on my SQL Server

## WEATHER DATA  
For weather data openweathermap.org API is used.  
In order to work properly the environment variable WEATHERAPIKEY must be set.   
You can retrieve your API key at any time, when you sign in to your openweathermap,org account.    

## CURRENCY DATA  
For currency data cnb.cz is used. Their API returns a txt file with major currencies in comparison to CZK.   
This txt file is then converted to JSON format.

## API Calls

The API utilizes several calls to retrieve data:  

localhost:3000/countries            -   Get all countries  
Example: http://localhost:3000/countries  

localhost:3000/countryname/:name    -   Get country by name  
Example: http://localhost:3000/countryname/Germany  

localhost:3000/countryid2/:id2      -   Get country by 2 digit country code  
Example: http://localhost:3000/countryid2/DE  

localhost:3000/towns                -   Get all towns (huge)  
Example: http://localhost:3000/towns  

localhost:3000/townid/:id           -   Get town by id  
Example: http://localhost:3000/townid/1   

localhost:3000/townname/:name       -   Get town by name  
Example: http://localhost:3000/townname/Munich   

localhost:3000/towncc/:cc           -   Get town by country code  
Example: http://localhost:3000/towncc/DE   

localhost:3000/weather/:name        -   Get weather by townname  
Example: http://localhost:3000/weather/Munich   

localhost:3000/weathercondition/:name  - Return a website with the Town, Weather Condition and Temperature  
Example: http://localhost:3000/weathercondition/Munich   

localhost:3000/currencies              - Returns all listed currencies and the amount in CZK (available in CNB)
Example: http://localhost:3000/currencies   

localhost:3000/currency/:currname  - Returns a specific currency and the amount in CZK
Example: http://localhost:3000/currency/EUR   

## Build the Docker image

With this command you can build your Dockerimage.  
```
docker build -f Dockerfile -t node-ms .
```
## Run the image

With this command you can run your created Dockerimage.  
Don´t forget either to set the environment variables like WEATHERAPIKEY, SQLPASS and PORT on your host or pass it with -e on the run conmand.  
```
docker run -e WEATHERAPIKEY -e SQLPASS -e PORT -p 3000:3000 --name node-ms -d node-ms
```

## Stop and remove the image

```
docker container stop node-ms
docker container rm node-ms

```

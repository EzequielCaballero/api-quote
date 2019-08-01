# REST API - *Today's quote* 
***
Hosted in **Netlify** and using **Express** + **Netlify-lambda** functions + **serverless-http**, this API will return as response a different author-quote per day. Which quote you are going to get by default is defined by the current day (n° 1 to 31) of the month.

## [**HOME PAGE**](https://eac-api-quote.netlify.com/)

**Total quotes:** **31** (one per day) - language available: English / Spanish

***
## SAMPLE | *Get today's quote*
*Request*
```
https://eac-api-quote.netlify.com/.netlify/functions/api/quote
```

*Response*
```
"quote": {
            "en": {
                "author": "Jean-Paul Sartre",
                "text": "We are our choices"
            },
            "es": {
                "author": "Jean-Paul Sartre",
                "text": "Somos nuestras elecciones"
            }
        }
```

***
## **GET** | *Options available*

Considering the following url https://eac-api-quote.netlify.com/**.netlify/functions/api**/*CHANGE-THIS-VALUE*

1) Get today's quote (en/es)
   ```
   Request: .../quote
   ```
2) Get today's quote only in English or Spanish language
   ```
   Request: .../quote/en 
            .../quote/es
   ```
3) Get all the quotes
   ```
   Request: .../quotes
   ```
4) Get a random quote
   ```
   Request: .../quotes/random
   ```
5) Get a random quote only in English or Spanish language
   ```
   Request: .../quotes/random/en
            .../quotes/random/es
   ```

***
## [**Useful tutorial**](https://www.youtube.com/watch?v=hQAu0YEIF0g)
Provides a quick 5' minutes explanation on how to deploy an express.js app on Netlify using the option *Netlify functions*.

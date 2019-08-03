# REST API - _Today's quote_

---

Hosted by **Netlify** and using **Express** + **Netlify-lambda** functions + **serverless-http**, this API will return as response a different author-quote per day. Which quote you are going to get by default is defined by the current day (n° 1 to 31) of the month (ART time zone).

## [**HOME PAGE**](https://eac-api-quote.netlify.com/)

**Total quotes:** **31** (one per day) - available languages: English / Spanish

---

## SAMPLE | _Get today's quote_

_Request_

```
https://eac-api-quote.netlify.com/.netlify/functions/api/quote
```

_Response_

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

---

## **GET** | _Available options_

Considering the following url https://eac-api-quote.netlify.com/ **.netlify/functions/api**/_value-to-be-change_

1. Get today's quote (en/es)
   ```
   Request: api/quote
   ```
2. Get today's quote only in English or Spanish language
   ```
   Request: api/quote/en
            api/quote/es
   ```
3. Get all the quotes
   ```
   Request: api/quotes
   ```
4. Get a random quote
   ```
   Request: api/quotes/random
   ```
5. Get a random quote only in English or Spanish language
   ```
   Request: api/quotes/random/en
            api/quotes/random/es
   ```

---

## [**Useful tutorial**](https://www.youtube.com/watch?v=hQAu0YEIF0g)

Provides a quick 5' minutes explanation on how to deploy an express.js app on Netlify using the option _Netlify functions_.

# REST API - Today's quote

**(WIP)**

Using **Express** + **Netlify-lambda** functions + **serverless-http**, this API will return as response a different author-quote per day.
Which quote you are going to get is defined by the current day (n°).

**URL:** ---

Quote's catalog: 31 in total (one per day) - available in english or spanish.

*Response sample*
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

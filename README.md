# Kino

This side implements infinite scrolling, please scroll until layout changes no more, only then the contents are finished.

## Meaning

Kino means cinema in many european languages, including German.

## How to run

Install the dependencies first

```bash
npm i
```

Then, run the dev server

```bash
npm run dev
```

Open the website [here](http://localhost:3000)

## What is not implemented and why

- Date filter: The API provided can't filter dates beyond basic ones such as '2020' or '08', other movie list API are either frremium/paid services or can't display a list, due to time limitations of the test, this feature is scraped.
- Caching: time limitations, and environment concern (this is usually implemented using Redis, so you might not have that installed on your local).
- Better SEO: time limitations.

---
title: Instrument not found
status: 404
summary: The instrument id in the request is not in the catalog of Binance spot pairs and US stocks and ETFs.
when:
  - The instrument id has the right form, <market>:<symbol>, but no trading instrument has that symbol, e.g. a delisted pair or a typo.
todo:
  - Search the instruments (GET /api/v1/data/instruments?q=...) and take the id from the result.
  - Do not retry the same request, the answer stays the same until the instrument is listed.
fields:
  - name: instrument
    description: The instrument id that was not found, e.g. crypto:BTCUSDX.
---

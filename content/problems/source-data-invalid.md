---
title: Invalid data from the source
status: 502
summary: The market data source sent data for this request that failed validation, so it was not used.
when:
  - Binance or Alpaca returned data that CandleStack cannot read or that breaks the rules of a valid candle, e.g. a malformed response, a price at or below zero or a high below the open.
todo:
  - Try again later. The bad data is not kept, so a request made more than about 10 seconds later fetches it from the source again.
  - If it keeps failing, ask for another period, and report the X-Request-ID header of the response.
fields:
  - name: source
    description: The source that sent the data, binance or alpaca, or null when it is not known.
---

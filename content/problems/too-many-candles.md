---
title: Too many candles
status: 422
summary: The period and timeframe of the request would return more candles than one response may hold.
when:
  - The number of candles expected for the period at this timeframe is above the limit per request, 50000 by default.
todo:
  - Follow suggestion; it names a larger timeframe that fits, or the latest end that keeps the same timeframe.
  - To get the whole period, split it into several requests of at most maximum candles each.
fields:
  - name: requested
    description: How many candles the request would return.
  - name: maximum
    description: The most candles one request may return (the max_candles of the instrument detail).
  - name: suggestion
    description: What to change so the request fits; also at the end of detail.
---

---
title: Data source unavailable
status: 503
summary: The market data source needed for this request cannot be reached right now.
when:
  - Binance or Alpaca is down, answers with an error or does not answer in time.
  - The request budget CandleStack has for the source is spent, or the source is limiting CandleStack's requests.
todo:
  - When the response has a Retry-After header, wait that many seconds and try again.
  - Without it, try again in a minute or so; detail says what failed.
fields:
  - name: source
    description: The source that failed, binance or alpaca.
  - name: Retry-After
    description: Header with the seconds to wait, sent only when waiting helps (the budget is spent or the source limits CandleStack).
---

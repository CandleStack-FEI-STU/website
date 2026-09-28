---
title: Period out of range
status: 422
summary: The requested period reaches outside the candles the instrument has for this timeframe.
when:
  - start is before the first candle of the instrument in this timeframe.
  - end is in the future.
todo:
  - Move start to available_from or later, and end to available_to or earlier; detail says which side failed and the exact value to use.
  - Get the available period in advance from the instrument detail (GET /api/v1/data/instruments/<id>).
fields:
  - name: instrument
    description: The instrument id of the request.
  - name: timeframe
    description: The timeframe of the request, e.g. 1h.
  - name: available_from
    description: Open time of the first candle in epoch seconds, or null when it is not known.
  - name: available_to
    description: The time of the request in epoch seconds; candles are available up to it.
---

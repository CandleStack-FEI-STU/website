---
title: Invalid request
status: 422
summary: One or more parameters of the request are missing or malformed.
when:
  - A required parameter is missing, has the wrong type or is out of its allowed values, e.g. an unknown timeframe or a limit above 100.
  - A time is neither epoch seconds nor an ISO 8601 date or date-time.
  - start is not before end, or the instrument id is not of the form <market>:<symbol>.
todo:
  - Read detail, which names every bad parameter at once, and fix them all before sending the request again.
  - Check the parameters against the API reference at /api/v1/docs.
fields:
  - name: errors
    description: 'One {loc, msg, type} object per bad parameter, e.g. loc ["query", "timeframe"]. Present when the parameters failed validation; a request that is well-formed but contradictory, like start after end, has detail only.'
---

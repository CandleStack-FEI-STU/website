---
title: Internal server error
status: 500
summary: The server failed to handle the request because of an error on the CandleStack side.
when:
  - An unexpected error in the API. The response says nothing about its cause; the details are in the server logs.
todo:
  - Try again later.
  - If it keeps failing, report the X-Request-ID header of the response, so the team can find the error in the logs.
---

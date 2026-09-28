---
title: Method Not Allowed
status: 405
summary: The endpoint exists, but not for this HTTP method.
when:
  - The request uses a method the endpoint does not accept, e.g. POST on an endpoint that only answers GET.
todo:
  - Send the request again with a method from the Allow header; detail names them too.
fields:
  - name: Allow
    description: Header with the methods the endpoint accepts, e.g. GET.
---

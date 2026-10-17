---
title: Cross-origin request
status: 403
summary: A request that changes your account came from somewhere other than the CandleStack app.
when:
  - A state-changing request, like POST /api/v1/auth/sign-out, has an Origin header that is not the app's own origin.
  - There is no Origin header and the browser does not say the request is same-origin.
todo:
  - Open the app at its own address and do the action there.
  - Do not call these routes from another site or from a script on a different origin.
---

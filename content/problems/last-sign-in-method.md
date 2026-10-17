---
title: Last sign-in method
status: 409
summary: The sign-in method is the only one left on the account, and an account must keep at least one.
when:
  - DELETE /api/v1/me/sign-in-methods/{provider} is called for the provider that is the account's only remaining sign-in method.
todo:
  - Connect another sign-in method in Settings > Sign-in first, then remove this one.
  - Keep this method if it is the one you still use to sign in.
---

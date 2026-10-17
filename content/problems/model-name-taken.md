---
title: Model name taken
status: 409
summary: Another of the account's models already has this name.
when:
  - PATCH /api/v1/models/{model_id} renames a model to the name of another model of the account. Names are compared without regard to case.
todo:
  - Pick another name, or rename or delete the other model first.
---

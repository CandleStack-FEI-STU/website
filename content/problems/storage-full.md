---
title: Storage full
status: 409
summary: The uploaded model does not fit into the storage left on the account.
when:
  - POST /api/v1/models is called with a file that would take the account's models over 100 MB.
todo:
  - Delete a model you no longer need in Models, then upload again.
  - GET /api/v1/models shows the storage used and the quota under usage.
fields:
  - name: used_bytes
    description: Bytes the account's uploaded models take now.
  - name: quota_bytes
    description: Bytes the account's uploaded models may take.
---

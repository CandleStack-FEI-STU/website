---
title: Storage full
status: 409
summary: The file does not fit into your storage, 100 MB for all your models together.
when:
  - The models you already have and the new file together would take more than your storage.
todo:
  - Delete models you no longer need, then upload the file again.
fields:
  - name: used_bytes
    description: Bytes your models take now.
  - name: quota_bytes
    description: Bytes your models may take in total.
---

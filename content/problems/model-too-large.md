---
title: Model too large
status: 413
summary: The uploaded model file is larger than one upload may be.
when:
  - POST /api/v1/models is called with a file larger than 50 MB.
todo:
  - Upload a smaller file. Saving the model without the optimizer state often halves its size.
  - The limit per file is file_max_bytes in GET /api/v1/models.
---

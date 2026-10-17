---
title: Unsupported model format
status: 415
summary: The uploaded file is not in a model format CandleStack takes yet.
when:
  - POST /api/v1/models is called with a name that does not end in .keras. Support for other formats is coming soon.
todo:
  - Save the model in the Keras format (model.save("name.keras")) and upload that file.
---

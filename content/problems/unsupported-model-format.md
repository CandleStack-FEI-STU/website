---
title: Unsupported model format
status: 415
summary: The file is not in a format CandleStack takes. For now it takes only Keras models (.keras).
when:
  - The uploaded file is not a .keras file, for example a .h5, SavedModel, .onnx or .pt file.
todo:
  - Save the model in Keras with model.save("model.keras") and upload that file.
---

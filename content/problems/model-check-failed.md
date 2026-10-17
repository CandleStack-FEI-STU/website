---
title: Model check failed
status: 422
summary: The uploaded file did not pass a check, so it was not kept.
when:
  - POST /api/v1/models is called with a file that is not a Keras model, or that has custom code inside, such as a Lambda layer or a layer of your own (check opens).
  - The file holds the layers but no trained weights (check weights).
  - Nothing from the file is run during the checks; it is only read.
todo:
  - Read detail. It says what is wrong.
  - For opens, rebuild the model with standard Keras layers only. Your own regularizers, losses and metrics are fine, as they only shape training.
  - For weights, save the model after training and upload that file.
fields:
  - name: check
    description: The check that failed, opens or weights.
---

---
title: Model check failed
status: 422
summary: The uploaded file did not pass a check of the model, so it was not kept.
when:
  - The opens check failed. The file is not a real Keras model, it is damaged, it is empty, or it holds custom code such as a Lambda or a custom layer, which CandleStack never runs.
  - The weights check failed. The weights of the model cannot be read, or the model holds no trained weights.
  - The check took too long, stopped before it finished, or too many models were being checked at once.
todo:
  - Read detail, which says what is wrong with the file.
  - Save the model again with model.save("model.keras") and upload that file.
  - Replace custom layers and Lambda layers with built-in Keras layers.
  - If detail says many models are being checked, upload the file again in a few minutes.
fields:
  - name: check
    description: The check that failed, opens or weights.
---

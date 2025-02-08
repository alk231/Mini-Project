import tensorflow as tf
# from tensorflow.keras.models import load_model

try:
    model = tf.keras.models.load_model('model/project_model1.h5', compile=False)
    print("Model loaded successfully.")

    model.save('model/saved_model/')
    print("Model successfully converted to SavedModel format.")

except Exception as e:
    print(f"Error loading or converting the model: {e}")

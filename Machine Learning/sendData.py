import numpy as np
import pickle
import warnings
warnings.filterwarnings('ignore')
from sklearn.tree import DecisionTreeClassifier

def cropRec(lst):
    loadModule = pickle.load(open('CropModels/crDtClassifier.pkl', 'rb'))
    x = loadModule.predict([lst])
    return x

data = [20, 59, 60, 28, 70.3, 7.0, 150.9]
print(cropRec(data))

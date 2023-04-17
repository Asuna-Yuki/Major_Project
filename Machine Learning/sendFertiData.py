import pickle
import warnings
warnings.filterwarnings('ignore')

def fertiRec(lst):
    loadModule = pickle.load(open('Models/FertiModels/knnClassifier.pkl', 'rb'))
    x = loadModule.predict([lst])
    return str(x[0])

data = [26, 52, 30, 37, 15, 30]
print(fertiRec(data))

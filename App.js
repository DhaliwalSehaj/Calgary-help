import './App.css';
import FirebaseFirestore from './FirebaseFirestore/FirebaseFirestore';
import FirebaseImageUpload from './FirebaseImageUpload/FirebaseImageUpload';
//import StoreImageTextFirebase from './StoreImageTextFirebase/StoreImageTextFirebase';

function App() {
  return (
    <div className="App">
      <FirebaseImageUpload />
      <FirebaseFirestore />
    </div>
  );
  
  

}

export default App;
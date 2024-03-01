import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Main from "./page/LandingPage/Main";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { auth } from "./Firebase/firebase";




const App = () => {
  // const [user] = useAuthState(auth);
  return (
    
      <Router>
        <Routes>
          <Route path="/" element={<Main/>} />
           
        </Routes>
      </Router>
    
  );
};

export default App;
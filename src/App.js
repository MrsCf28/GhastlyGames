import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { UserContext } from './context/UserContext';
import './App.css';
import Header from './components/0.Header/Header';
import Home from './components/1.Home/Home';
import SingleReview from './components/2.SingleReview/SingleReview';

function App() {
    const [user, setUser] = useState({ name: 'grumpy19', signedIn: false, avatar_url:"https://vignette.wikia.nocookie.net/mrmen/images/7/78/Mr-Grumpy-3A.PNG/revision/latest?cb=20170707233013"})

    return (
        <UserContext.Provider value={{ user, setUser}}>
        <BrowserRouter>
            <div className={`App_${user.name}`}>
                <Header />
                <Routes>
                    <Route 
                        path="/"
                        element={<Home />}
                    />
                    <Route
                        path="/category/:category/:sortBy/:order"
                        element={<Home />}
                    />
                    <Route
                        path="/reviews/:review_id"
                        element={<SingleReview />}
                    />
                </Routes>
            </div>
        </BrowserRouter>
        </UserContext.Provider>
    );
}

export default App;

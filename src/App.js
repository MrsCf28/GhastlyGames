import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/0.Header/Header';
import Home from './components/1.Home/Home';
import Category from './components/1.Home/Category';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/category/:category"
                        element={<Category />}
                    />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;

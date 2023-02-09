import { Routes, Route } from 'react-router-dom'
import { Checkout } from './Pages/Checkout';
import { Home } from './Pages/Home';

export function Router() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/checkout' element={<Checkout />} />
        </Routes>
    );
}
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomepageContainer from "./pages/homepage/HomepageContainer";
import HotelDetailsPage from "./pages/hotel-page/HotelDetailsPage";
import HotelsByCityContainer from "./pages/hotels-by-city-page/HotelsByCityContainer";

const App = () => {
    
    return(
        <BrowserRouter>
            <Routes >
                <Route path='/' element={<HomepageContainer/>}>
                    <Route path='/:city' element={<HotelsByCityContainer/>}/>
                    <Route path='/hotel/:id' element={<HotelDetailsPage/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
};

export default App
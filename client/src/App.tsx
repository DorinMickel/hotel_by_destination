import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomepageContainer from "./pages/homepage/HomepageContainer";
import HotelDetailsPage from "./pages/hotel-page/HotelDetailsPage";
import HotelsByCityContainer from "./pages/hotels-by-city-page/HotelsByCityContainer";
import { State } from "./redux";
// import { AppContainer } from "./common/styledComponents";

const App = () => {

    const hotelState = useSelector((state: State) => state.hotel)
    console.log(hotelState)
    
    return(
        <BrowserRouter>
            <Routes >
                <Route path='/' element={<HomepageContainer/>}/>
                <Route path='/:city' element={<HotelsByCityContainer/>}/>
                <Route path='/hotel/:id' element={<HotelDetailsPage/>}/>
            </Routes>
        </BrowserRouter>
    )
};

export default App
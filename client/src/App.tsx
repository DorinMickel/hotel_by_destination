import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomepageContainer from "./pages/homepage/HomepageContainer";
import HotelDetailsPage from "./pages/hotel-page/HotelDetailsPage";
import { State } from "./redux";
import { AppContainer } from "./styles/styledComponents";

const App = () => {
    // interface IRoute {
    //     exact: boolean,
    //     path: string
    // }


    // id={hotelState.id}
    //                     hotelName={hotelState.hotelName}
    //                     hotelImg={hotelState.hotelName}
    //                     hotelDescription={hotelState.hotelName}


    const hotelState = useSelector((state: State) => state.hotel)
    console.log(hotelState)
    
    return(
        <AppContainer>
            <BrowserRouter>
                <Routes >
                    <Route path='/' element={<HomepageContainer/>}/>
                    <Route path='/hotel/:id' element={<HotelDetailsPage/>}/>
                </Routes>
            </BrowserRouter>
        </AppContainer>
        
        
    )
};

export default App
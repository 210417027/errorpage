import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage_27";
import SupaMenuPage_27 from "./pages/supabase/MenuSupabasePage_27";
import MenuByCategoryPage_27 from "./pages/supabase/MenuByCategoryPage_27";
import Cartpage_27 from "./pages/order/App_27";
import ChoosePage from "./pages/choose/ChoosePage_27";
import ErrorPage from "./pages/error/ErrorPage";



const App_27 = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/supa_menu_27' element={<SupaMenuPage_27 />} />
        <Route path='/supa_menu_27/:category' element={<MenuByCategoryPage_27 />} />
        <Route path='/supa_cart_27' element={<Cartpage_27 />} />
        <Route path='/choose_page_27' element={<ChoosePage />} />
        <Route path='/ErrorPage' element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App_27;

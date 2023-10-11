import { BrowserRouter, Routes, Route} from "react-router-dom";

// Pages auth
import SignIn from "./pages/auth/SignIn";
import SignOut from "./pages/auth/SignOut";
import ForgetPassword from "./pages/auth/ForgetPassword";
import Error404 from "./pages/Error404";


//Admin Page
import { LayoutAdmin } from "./layouts/LayoutAdmin";
import SedePage from "./pages/admin/Sede";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<SignIn/>}/>
        <Route path="/registro" element={<SignOut/>} />
        <Route path="/olvide-mi-contraseña" element={<ForgetPassword/>} />
          <Route path="/post" element={<LayoutAdmin/>}>
            <Route path="sede" element={<SedePage/>}/>
            </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
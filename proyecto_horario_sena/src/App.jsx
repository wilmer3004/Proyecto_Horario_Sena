import { BrowserRouter, Routes, Route} from "react-router-dom";

// Pages auth
import SignIn from "./pages/auth/SignIn";
import SignOut from "./pages/auth/SignOut";
import ForgetPassword from "./pages/auth/ForgetPassword";
import Error404 from "./pages/Error404";


//Admin Page
import { LayoutAdmin } from "./layouts/LayoutAdmin";
import { SedePage } from "./pages/admin/sede/SedePage";
import { InstructorPage } from "./pages/admin/instructor/instructorPage";
import { TematicaPage } from "./pages/admin/tematica/tematicaPage";
import { FichaPage } from "./pages/admin/ficha/FichaPage";
import { TrimestrePage } from "./pages/admin/trimestre/trimestrePage";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<SignIn/>}/>
        <Route path="/registro" element={<SignOut/>} />
        <Route path="/olvide-mi-contraseña" element={<ForgetPassword/>} />
          <Route path="/" element={<LayoutAdmin/>}>
            <Route path="sede" element={<SedePage/>}/>
            <Route path="instructores" element={<InstructorPage/>}/>
            <Route path="tematicas" element={<TematicaPage/>}/>
            <Route path="fichas" element={<FichaPage/>}/>
            <Route path="trimestres" element={<TrimestrePage/>}/>
          </Route >
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
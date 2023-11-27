import { BrowserRouter, Routes, Route} from "react-router-dom";

// Pages auth
import SignIn from "./pages/auth/SignIn";
import ForgetPassword from "./pages/auth/ForgetPassword";
import Error404 from "./pages/Error404";


//Admin Page
import { LayoutAdmin } from "./layouts/LayoutAdmin";
import { SedePage } from "./pages/admin/sede/SedePage";
import { InstructorPage } from "./pages/admin/instructor/instructorPage";
import { TematicaPage } from "./pages/admin/tematica/tematicaPage";
import { FichaPage } from "./pages/admin/ficha/FichaPage";
import { TrimestrePage } from "./pages/admin/trimestre/trimestrePage";
import { HomePage } from "./pages/admin/home/home";
import { HorarioPage } from "./pages/admin/horario/horario";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn/>}/>
        <Route path="/olvide-mi-contraseña" element={<ForgetPassword/>} />
          <Route path="/index" element={<LayoutAdmin/>}>
            <Route path="home" element={<HomePage/>}/>
            <Route path="sede" element={<SedePage/>}/>
            <Route path="instructores" element={<InstructorPage/>}/>
            <Route path="tematicas" element={<TematicaPage/>}/>
            <Route path="fichas" element={<FichaPage/>}/>
            <Route path="trimestres" element={<TrimestrePage/>}/>
            <Route path="horario" element={<HorarioPage/>}/>
          </Route >
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
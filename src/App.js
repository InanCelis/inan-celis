
import { HashRouter, Route, Routes } from "react-router-dom";
import { Fragment } from "react";
import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/Project';
import ProjectView from "./pages/ProjectView";
import NotFound from "./pages/NotFound";
function App() {
  return (
      <HashRouter>
        <Fragment>
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route exact path='/' element={<Home/>}/>
            <Route>
              <Route exact path='/project' element={<Project/>}/>
              <Route exact path='/project/:id' element={<ProjectView/>}/>
            </Route>
            <Route exact path='/about' element={<About/>}/>
          </Routes>
        </Fragment>
      </HashRouter>
   
  );

}

export default App;

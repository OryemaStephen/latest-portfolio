import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Uses from "./pages/Uses";
import Now from "./pages/Now";
import NotFound from "./pages/NotFound";

const App = () => (
  <Routes>
    <Route element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="services" element={<Services />} />
      <Route path="projects" element={<Projects />} />
      <Route path="projects/:slug" element={<ProjectDetail />} />
      <Route path="uses" element={<Uses />} />
      <Route path="now" element={<Now />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
);

export default App;

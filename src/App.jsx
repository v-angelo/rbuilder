import { Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Home from "./pages/Home";
import ResumeSteps from "./pages/ResumeSteps";
import ViewResume from "./pages/ViewResume";
import UserForm from "./pages/UserForm";
import Downloads from "./pages/Downloads";
import PageNotFound from "./pages/PageNotFound";
import Footer from "./components/Footer";

function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/steps' element={<ResumeSteps />} />
        <Route path='/form' element={<UserForm />} />
        <Route path='/resume/:id/view' element={<ViewResume />} />
        <Route path='/downloads' element={<Downloads />} />
        <Route path='/*' element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );

}

export default App;

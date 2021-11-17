import { Routes, Route } from 'react-router-dom';
import Landing from './screens/Landing/Landing'
import Aboutme from './screens/About me/Aboutme'
import Work from './screens/Work/Work'
import Freelance from './screens/Freelance/Freelance'
import Navbar from './components/Navbar/NavbarElements';
import Colab from './screens/Colab/Colab';
import Nightly from './screens/Nightly/Nightly';
import Docks from './screens/Docks/Docks';
import SampleRewind from './screens/SampleRewind/SampleRewind';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/aboutme" element={<Aboutme />} />
          <Route path="/work" element={<Work />} />
          <Route path="/freelance" element={<Freelance />} />
          <Route path="/colab" element={<Colab />}></Route>
          <Route path="/nightly" element={<Nightly />}></Route>
          <Route path="/thedocks" element={<Docks />}></Route>
          <Route path="/samplerewind" element={<SampleRewind />}></Route>
      </Routes>
    </div>
  );
}

export default App;

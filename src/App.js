import './App.css'
import Footer from './common-components/Footer';
import Header from './common-components/Header';
import Pages from "./pages/Pages";

function App() {
  return (
    <div className="App">
      <Header />
      <Pages />
      <Footer />
    </div>
  );
}

export default App;

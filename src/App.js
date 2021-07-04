import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import Homescreen from './screens/Homescreen';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Productscreen from './screens/Productscreen';
//Adding react rounter to reactify links
function App() {
  return (
    <Router>
      <Header />
      <main>
        <Container>
          <Route path='/' component={Homescreen} exact/>
          <Route path='/product/:id' component={Productscreen}/>
        </Container>
        
      </main>
      <Footer />
      </Router>
  );
}

export default App;

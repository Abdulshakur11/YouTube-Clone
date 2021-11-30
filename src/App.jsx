import { Route, Switch } from 'react-router';
import './App.scss';
import Arror from './Components/Arror/arror';

// Components
import Header from './Components/Header/Header';

// Pges
import Channel from './pages/Channel/Channel';
import Home from './pages/Home/Home';
import Video from './pages/Video/Video';


function App() {
  return (
    <>
      <Header />
      <div className="home">

        <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/channel" component={Channel} />
            <Route path="/video/:id" component={Video} />
            <Route><Arror/></Route>
        </Switch>
      </div>
    </>
  );
}

export default App;

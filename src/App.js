import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import PokemonAxios from './components/PokemonAxios';

function App() {
    return (
        <>
            <Router>
                <Switch>
                    <Route path="/">
                        <PokemonAxios />
                    </Route>
                </Switch>
            </Router>
        </>
    );
}

export default App;
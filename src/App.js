import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import LandingPage from './LandingPage';
import DirectionsPage from './DirectionsPage';
import PicturesPage from './PicturesPage';

function App() {
    return (
        <Router>
            <div className="theme-dark">
                <Header />
                <Switch>
                    <Route path="/" exact component={LandingPage} />
                    <Route path="/HomePage" exact component={HomePage} />
                    <Route path="/AboutPage" exact component={AboutPage} />
                    <Route
                        path="/DirectionsPage"
                        exact
                        component={DirectionsPage}
                    />
                    <Route
                        path="/PicturesPage"
                        exact
                        component={PicturesPage}
                    />
                    <Route
                        path="/Facebook"
                        component={() => {
                            window.location.href =
                                'https://www.facebook.com/bensonautobodynglass';
                            return null;
                        }}
                    />
                    {/* <Route path="/Profile" component={Profile} /> */}
                    {/* <Cart initialItems={initialItems} /> */}
                </Switch>
            </div>
        </Router>
    );
}

export default App;

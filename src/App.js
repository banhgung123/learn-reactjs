import { useEffect } from 'react';
import { Redirect, Switch, NavLink, Link, Route } from 'react-router-dom';
import TodoFeature from './features/Todo';
import AlbumFeature from './features/Album';
import NotFound from './components/NotFound';
import productApi from './api/productApi';

function App() {
    useEffect(() => {
        const fetchProducts = async () => {
            const params = {
                _limit: 10,
            };
            const productList = await productApi.getAll();
            console.log(productList);
        };

        fetchProducts();
    }, []);

    return (
        <div className="App">
            Header
            {/* <p>
        <Link to="/todos">Todos</Link>
      </p>
      <p>
        <Link to="/albums">Albums</Link>
      </p> */}
            <p>
                <NavLink to="/todos" activeClassName="active-menu">
                    Todos
                </NavLink>
            </p>
            <p>
                <NavLink to="/albums" activeClassName="active-menu">
                    Albums
                </NavLink>
            </p>
            <Switch>
                <Redirect from="/home" to="/" exact />
                <Redirect from="/post-list/:postId" to="/posts/:postId" exact />

                <Route path="/" component={TodoFeature} exact />
                <Route path="/todos" component={TodoFeature} />
                <Route path="/albums" component={AlbumFeature} />

                <Route component={NotFound} />
            </Switch>
            Footer
        </div>
    );
}

export default App;

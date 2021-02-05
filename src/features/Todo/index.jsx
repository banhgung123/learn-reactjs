import { Switch, Route, useRouteMatch, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import ListPage from "./pages/ListPage";
import DetailPage from "./pages/DetailPage";
import NotFound from "./../../components/NotFound";

TodoFeature.propTypes = {};

function TodoFeature(props) {
  const match = useRouteMatch();

  return (
    <div>
      TODO SHARED UI
      <Switch>
        <Route path={match.path} component={ListPage} exact />
        <Route path={`${match.path}/:todoId`} component={DetailPage} exact />

        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default TodoFeature;

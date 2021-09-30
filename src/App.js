import { BrowserRouter, Route, Switch } from "react-router-dom";
import SinglePost from "./components/SinglePost";
import Post from "./components/Post";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Post} path="/" exact />
        <Route component={SinglePost} path="/:slug" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

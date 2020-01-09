import * as React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from 'react-router-dom'

// import { Header, ArticlesList, ArticleForm, Aside } from './components'
import { PAGES_PATHS } from 'commons/constants'

export class App extends React.Component {
  constructor(props: {}) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">articlesList /</Link>
              </li>
              <li>
                <Link to={PAGES_PATHS.articlesList}>articlesList</Link>
              </li>
              <li>
                <Link to={PAGES_PATHS.article}>article</Link>
              </li>
              <li>
                <Link to={PAGES_PATHS.articleAdd}>articleAdd</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path={PAGES_PATHS.articlesList}>
              <Redirect to="/" />
            </Route>
            <Route path={PAGES_PATHS.article}>
              <Users />
            </Route>
            <Route path={PAGES_PATHS.articleAdd}>
              <About />
            </Route>
            <Route path="*">
              <Redirect to="/" />
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }
}

function Home() {
  return <h2>articlesList</h2>
}

function Users() {
  return <h2>article</h2>
}

function About() {
  return <h2>articleAdd</h2>
}

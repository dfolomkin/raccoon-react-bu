import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import { Link } from 'react-router-dom'

import { Header, ArticlesList, ArticleForm, Aside } from 'components'
import { urls } from 'commons/constants'

import './app.less'

export class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="container">
        <Header />
        <div className="main">
          <Switch>
            {/* <Redirect exact from="/" to={urls.articlesList} /> */}
            <Route exact path="/" render={() => <ArticlesList />} />
            <Route path={urls.articlesList} render={() => <ArticlesList />} />
            <Route
              path={`${urls.articleForm}/:id`}
              render={() => <ArticleForm />}
            />
            {/* <Redirect to={urls.articlesList} /> */}
          </Switch>
          <Aside />
          <Link to="/">sfsldkjflksdfl;ksdmf</Link>
          <Link to="/article/10">sfsldkjflksdfl;ksdmf</Link>
        </div>
      </div>
    )
  }
}

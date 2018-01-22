import React from 'react'
import { Switch, Route, Redirect, Link } from 'react-router-dom'

import { Header, ArticlesList, ArticleForm, Aside } from 'components'
import { urls } from 'utils'

import './app.less'

export class App extends React.PureComponent {
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
            <Redirect exact from="/" to={urls.articlesList} />
            <Route path={urls.articlesList} render={() => <ArticlesList />} />
            <Route
              path={`${urls.articleForm}/:id`}
              render={() => <ArticleForm />}
            />
            <Redirect to={urls.articlesList} />
          </Switch>
          <Aside />
          <Link to="/">sfsldkjflksdfl;ksdmf</Link>
          <Link to="/article/10">sfsldkjflksdfl;ksdmf</Link>
          {this.props.children}
        </div>
      </div>
    )
  }
}

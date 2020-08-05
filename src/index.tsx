import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Home } from './pages/home'
import { About } from './pages/about'
// import { Deals } from './pages/deals'
// import { Donate } from './pages/donate'
import { Metrics } from './pages/metrics'
// import { Settings } from './pages/settings'
import { SignIn } from './pages/sign-in'
import { SignUp } from './pages/sign-up'
import { Subscribe } from './pages/subscribe'

import { Footer } from './components/footer'
import { Header } from './components/header'

import { GlobalContextProvider } from './state/state'

import './styles/reset.css'
import './styles/styles.css'
import './styles/typography.css'
import './styles/dark-mode.css'

import * as serviceWorker from './serviceWorker'

function App() {
  return (
    <BrowserRouter>
      <GlobalContextProvider>
        <div className="container page-wrapper">
          <Header />

          <Switch>
            <Route path="/" exact={true} component={Home} />
            <Route path="/about" component={About} />
            {/* <Route path="/deals" component={Deals} /> */}
            {/* <Route path="/donate" component={Donate} /> */}
            <Route path="/metrics" component={Metrics} />
            {/* <Route path="/settings" component={Settings} /> */}
            <Route path="/sign-in" component={SignIn} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/subscribe" component={Subscribe} />
          </Switch>

          <Footer />
        </div>
      </GlobalContextProvider>
    </BrowserRouter>
  )
}

const rootElement = document.getElementById('root')
render(<App />, rootElement)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()

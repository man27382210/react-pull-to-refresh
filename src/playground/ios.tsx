import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { WithPullToRefreshHoc } from '../WithPullToRefreshHoc'
const magicSec = 2000
const App = WithPullToRefreshHoc(() => 
  <div style={{ height: 1000 }}>
    test
    <br />
    <a href='./index.html'>{"<="}</a>
  </div>
)
const refresh = () => {
  return new Promise((resolve) => {
    setTimeout(resolve, magicSec)
  })
}
ReactDOM.render(<App spinnerStyle='IOS' refresh={refresh} />, document.getElementById('app'))

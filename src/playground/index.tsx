import * as React from 'react'
import * as ReactDOM from 'react-dom'
import '../styles/ios.module.scss'
import { WithPullToRefreshHoc } from '../WithPullToRefreshHoc'
const magic = 2000
const App = WithPullToRefreshHoc(() => <div style={{ height: 1000 }}>test</div>)
const refresh = () => {
  return new Promise((resolve) => {
    setTimeout(resolve, magic)
  })
}
ReactDOM.render(<App spinnerStyle='IOS' refresh={refresh} />, document.getElementById('app'))

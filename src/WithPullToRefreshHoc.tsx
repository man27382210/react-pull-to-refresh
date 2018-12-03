import * as React from 'react'
import { RefreshIconComponent, RefreshSpinnerComponent, IOSSpinnerComponent } from './SvgIcon'
import pullToRefresh from './pullToRefresh'
import animation from './styles/animates_default'
import iosAnimation from './styles/animates_ios'

const THRESHOLD = 150

type T = object

interface WithPullToRefreshProps {
  spinnerStyle?: 'MATERIAL' | 'IOS'
  customClass?: string
  scrollable?: React.ReactNode
  threshold?: number
  refresh?: () => Promise<T>
}

const WithPullToRefreshHoc = <P extends object>(Component: React.ComponentType<P>) => {
  return class WithPullToRefresh extends React.Component<P & WithPullToRefreshProps> {
    public static defaultProps: Partial<WithPullToRefreshProps> = {
      spinnerStyle: 'MATERIAL',
    }
    public containerRef: React.RefObject<HTMLDivElement> = React.createRef()
    public controlRef: React.RefObject<HTMLDivElement> = React.createRef()
    public mainRef: React.RefObject<HTMLDivElement> = React.createRef()

    public componentDidMount() {
      const {
        spinnerStyle,
        scrollable,
        threshold,
        refresh,
      } = this.props

      const opts = {
        container: this.containerRef.current,
        elControl: this.controlRef.current,
        elMain: this.mainRef.current,
        threshold: threshold
          ? threshold
          : THRESHOLD,
        animates: spinnerStyle === 'MATERIAL'
          ? animation
          : iosAnimation,
        refresh: refresh
          ? refresh
          : () => Promise.resolve()
      }
      pullToRefresh({ scrollable, ...opts })
    }

    public render() {
      const { customClass, spinnerStyle } = this.props
      let controlClassName = ''
      let renderSpinner = null
      if (spinnerStyle === 'MATERIAL') {
        controlClassName = 'pull-to-refresh__control'
        renderSpinner = () => (
          <>
            <RefreshIconComponent />
            <RefreshSpinnerComponent />
          </>
        )
      } else {
        controlClassName = 'pull-to-refresh__spinner'
        renderSpinner = () => <IOSSpinnerComponent/>
      }
      return (
        <div className={`pull-to-refresh ${customClass ? customClass : ''}`} ref={this.containerRef}>
          <div className={controlClassName} ref={this.controlRef}>
            {renderSpinner()}
          </div>
          <main ref={this.mainRef}>
            <Component {...this.props} />
          </main>
        </div>
      )
    }
  }
}
export { WithPullToRefreshHoc }

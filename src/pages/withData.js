import React, {Component} from 'react'
import isEqual from 'lodash/isEqual'
import isFunction from 'lodash/isFunction'

const withData = PassedComponent => {
  return class extends Component {
    state = {data: null, error: null}

    componentDidMount() {
      this.loadData(this.props.match)
    }

    componentWillReceiveProps({match}) {
      if (!isEqual(match, this.props.match)) {
        this.loadData(match)
      }
    }

    loadData(match) {
      this.setState({data: null, error: null})

      if (!isFunction(PassedComponent.getInitialProps)) return

      setTimeout(async () => {
        try {
          const data = await PassedComponent.getInitialProps(match)
          this.setState({data})
        } catch (error) {
          this.setState({error})
        }
      }, 0)
    }

    get isLoading() {
      return !this.isErrored && !this.state.data
    }

    get isErrored() {
      return !!this.state.error
    }

    get isLoaded() {
      return !this.isLoading && !this.isErrored
    }

    get loadingState() {
      return <span>Loading...</span>
    }

    get errorState() {
      return (
        <div>
          <h3>Error loading data</h3>
          <code>{this.state.error.message}</code>
        </div>
      )
    }

    get loadedState() {
      return <PassedComponent {...this.state.data} />
    }

    render() {
      return (
        <div>
          {this.isLoading && this.loadingState}
          {this.isErrored && this.errorState}
          {this.isLoaded && this.loadedState}
        </div>
      )
    }
  }
}

export default withData

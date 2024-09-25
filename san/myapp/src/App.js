import React,{Component} from 'react'
import PropTypes from 'prop-types'

class App extends Component{
  render() {
    return (
      <div>
        number--{this.props.propNumber}<br/>
        numbervalid --{this.props.propNumber?"True":"False"}
      </div>
    )
  }
  }


App.propTypes = {
  propNumber :PropTypes.number
}

App.defaultProps = {
  propNumber :"str"

}
export default App;
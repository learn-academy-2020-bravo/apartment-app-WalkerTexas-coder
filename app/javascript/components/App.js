import React from "react"
import PropTypes from "prop-types"
import Header from './Header.js'
import ApartmentList from './ApartmentList.js'
class App extends React.Component {
  render () {
    const {
      logged_in,
      sign_in_route,
      sign_out_route
    } = this.props

    return (
      <>
        <Header />




        {logged_in &&
          <div>
            <a href={sign_out_route}>Sign Out</a>
            <ApartmentList/>
          </div>
        }


        
        {!logged_in &&
          <div>
            <a href={sign_in_route}>Sign In</a>
          </div>
        }

      </>
    );
  }
}

export default App

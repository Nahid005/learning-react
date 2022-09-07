import React from 'react'

class PropsClass extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render() {

         /**
         * props destructuring 
         */

        const {title} = this.props
        
        return(
            <div> <h1> {title} </h1> </div>
        )
    }
}

export default PropsClass;
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateColor, getPokemon } from './reducer'

class SmileComponent extends Component {

    render() {
        return (
            <div>
                <h3>Smile everyone</h3>
                <div>{JSON.stringify(this.props)}</div>
                <button onClick={() => this.props.updateColor('red')}>Change to red</button>
                <button onClick={this.props.getPokemon}>GetPokemon</button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { //going to be merged with this.props
        data: 7,
        words: "These are words, yo"
    }
}

export default connect(mapStateToProps, { //is going to merged onto this.props as a prototype
    updateColor,
    getPokemon
})(SmileComponent);
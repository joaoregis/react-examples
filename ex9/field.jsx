import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeValue } from './fieldActions'

class Field extends Component {
    render() {
        return (
            <div>
                <label>
                    {this.props.value}<br/>
                </label>
                <input onChange={this.props.changeValue} value={this.props.value} />
            </div>
        )
    }
}

const mapStateToProps = state => ({ value: state.field.value })
const mapDispatchToProps = dispatch =>  (bindActionCreators({ changeValue }, dispatch))

// Decorator
export default connect(mapStateToProps, mapDispatchToProps)(Field)
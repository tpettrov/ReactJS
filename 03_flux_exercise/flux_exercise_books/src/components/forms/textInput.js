import React, {Component} from 'react'

class TextInput extends Component {
  render () {
    return (
      <div className='myClass'>
        <label htmlFor={this.props.name}>
          {this.props.label}
        </label>
        <input onChange={this.props.whenChanged} type='text' className='common-input-class'
          placeholder={this.props.placeholder} id={this.props.id}
          name={this.props.name} defaultValue={this.props.value} value={this.props.value} />
        <span className='error'>{this.props.error}</span>
      </div>
    )
  }
}

export default TextInput
import React, { Component } from 'react'
import { connect } from 'react-redux'

export class SongList extends Component {
  render() {
    console.log(this.props)
    return <div>SongList</div>
  }
}

// after passing this to connect(), we actually get all the states
// in the form of props, for eg line #6
const mapStateToProps = (state) => {
  return { songs: state.songs }
}

const mapDispatchToProps = {}

export default connect(mapStateToProps)(SongList)

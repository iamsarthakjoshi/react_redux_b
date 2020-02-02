import React, { Component } from 'react'
import { connect } from 'react-redux'

export class SongList extends Component {
  renderList() {
    return this.props.songs.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button className="ui button primary">Select</button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      )
    })
  }

  render() {
    console.log(this.props)
    return <div className="ui divided list">{this.renderList()}</div>
  }
}

// after passing this to connect(), we actually get all the states
// in the form of props, for eg line #6
const mapStateToProps = (state) => {
  return { songs: state.songs }
}

const mapDispatchToProps = {}

export default connect(mapStateToProps)(SongList)

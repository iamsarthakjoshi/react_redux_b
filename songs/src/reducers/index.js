import { combineReducers } from 'redux'

const songsReducer = () => {
  return [
    { title: 'Maryo Ni Maryo', duration: '4:04' },
    { title: 'Rang Haru', duration: '4:09' },
    { title: 'Resham', duration: '3:45' },
    { title: 'Resham Firiri', duration: '5:45' }
  ]
}

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload
  }

  return selectedSong
}

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
})

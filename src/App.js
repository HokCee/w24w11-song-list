import './App.css'
import Container from './Container'

const App = () => {
  const songs = [
    "비틀비틀 짝짜꿍",
    "시퍼런 봄",
    "Desert Eagle",
  ]

  return (
    <div>
      <Header/>
      <Playlist 
        title="프로그래밍 하면서 듣고 싶은 노래"
        listSong={songs}/>
    </div>
  )
}

const Header = () => {
  return (
      <h1>React 프로그래밍</h1>
  )
}

const Playlist = props => {
  return (
      <div className="playlist">
        <div className="playlist">{props.title}</div>
        {
          props.listSong.map((song, index) =>
            <Container key={index} title={song} index={index}/>)
        }
      </div>
  )
}

export default App

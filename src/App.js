import './App.css'
import Container from './Container'

const App = () => {
  const songs = [
    {
      id: 1,
      title: "비틀비틀 짝짜꿍",
      singer: "한로로",
      rating: 5,
      lyrics: `빙글빙글 돌아가는 세상 속에서
우린 좀처럼 중심을 잡을 수 없고
어지러운 생각들에 잡힌 이유
매일 바삐 돌아가는 지구 탓일 거야
나는 한강 위 음악처럼 자유롭고
싶지만 네모난 칸에 갇혀있다는 걸
지금 어딜 가야 하는지 알면서도
가끔 모른 척하고 싶은 날들이 있지`,
    },
    {
      id: 2,
      title: "시퍼런 봄",
      singer: "쏜애플",
      rating: 3,
      lyrics: null,
    },
    {
      id: 3,
      title: "Desert Eagle",
      singer: "실리카겔",
      rating: 3,
      lyrics: null,
    },
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
          props.listSong.map(song =>
            <Container key={song.id} song={song}/>
          )
        }
      </div>
  )
}

export default App

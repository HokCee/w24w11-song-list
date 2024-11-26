import './App.css'

const App = () => {
  return (
    <div>
      <Header/>
      <Playlist/>
      <Container title="비틀비틀 짝짜꿍" index="1"/>
      <Container title="시퍼런 봄" index="2"/>
      <Container title="Desert Eagle" index="3"/>
    </div>
  )
}

const Header = () => {
  return (
      <h1>React 프로그래밍</h1>
  )
}

const Playlist = () => {
  return (
      <div className="playlist">프로그래밍하면서 듣고 싶은 노래</div>
  )
}

const Container = (props) => {
  return (
    <div className="container">
      <a href={`https://www.youtube.com/results?search_query=${props.title}`}>
        <img 
          src={`https://picsum.photos/600/150?random=${props.index}`} 
          alt={`랜덤 이미지 ${props.index}`}/>
        <div className="song-title">{props.title}</div>
      </a>
    </div>
  )
}

export default App

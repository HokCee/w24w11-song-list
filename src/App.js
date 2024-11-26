import './App.css'

function App() {
  return (
    <div>
      <Header/>
      <Playlist/>
      <Container/>
    </div>
  )
}

function Header() {
  return (
      <h1>React 프로그래밍</h1>
  )
}

function Playlist() {
  return (
      <div className="playlist">프로그래밍하면서 듣고 싶은 노래</div>
  )
}

function Container() {
  return (
    <div className="container">
      <a href="https://www.youtube.com/results?search_query=사랑에 연습이 있었다면">
        <img src="https://picsum.photos/600/150?random=1" alt="랜덤 이미지 1"/>
        <div className="song-title">사랑에 연습이 있었다면</div>
      </a>
    </div>
  )
}

export default App

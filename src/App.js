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
가끔 모른 척하고 싶은 날들이 있지
어른이지만 어른스럽다는 말은
아직 어색해요 (우우, 우우, 우우우)
비틀거리다 깨지는 두려움은
언젠간 설렘으로 바뀔 거란 걸 난 알아
이마 위 상처는 청춘의 징표
우리는 서로의 좋은 반창고
상처투성이의 손을 맞잡고
다시 비틀비틀 짝짜꿍, 비틀비틀 짝짜꿍
눈을 떠도 보이지 않는 길이 무섭대도
시간은 우릴 기다려 주지 않지
자신 없는 너의 걸음에 힘이 돼주고픈
내 마음을 넌 이미 알고 있는지
사랑스러운 눈가에 맺힌 눈물
부끄러워 마요 (우우, 우우, 우우우)
얼룩진 베개 위로 가득한 한숨
언젠가 예쁜 꽃을 피울 거란 걸 난 알아
이마 위 상처는 청춘의 징표
우리는 서로의 좋은 반창고
상처투성이의 손을 맞잡고
다시 비틀비틀 짝짜꿍, 비틀비틀 짝짜꿍
비틀비틀, 빙글빙글
비틀비틀, 빙글빙글
비틀비틀, 빙글빙글
또다시 비틀비틀 짝짜꿍, 비틀비틀 짝짜꿍
웃음을 잊지 않도록
우리를 잊지 않도록
우리를 잃지 않도록
다시 비틀비틀 짝짜꿍, 비틀비틀 짝짜꿍`,
    },
    {
      id: 2,
      title: "시퍼런 봄",
      singer: "쏜애플",
      rating: 3,
      lyrics: `아무것도 하기 싫어
우리는 그늘을 찾았네
태양에 댄 적도 없이
반쯤 타다가 말았네
밤에 잠드는 남들은
돌고 도는 네 개의 계절
우리는 끝이 없는
기나긴 하나의 계절
지글지글 끓는 땅 위에
이름도 모를 꽃들이
피어나네
식어버린 말을 지껄일 바엔
아무 말도 하지 말아요
어쨌거나 달아나진 말아요
오늘 하루를 살아남아요
우리가 길을 헤매이는
시퍼런 봄의 날들은
아직 한가운데
멈추지 말고
몸부림치며 기어가
쏟아지는 파란 하늘과
아득하게 멀어지는 길
너무 멀리까지 왔나
돌아갈 순 없을까
망설이던 찰나에
이글이글 타는 땅 위에
새까만 점이 되었네
아찔해져
시든 꿈을 뜯어먹지 말아요
머뭇거리지도 말아요
어쨌거나 달아나진 말아요
오늘 하루를 살아남아요
우리가 길을 헤매이는
시퍼런 봄의 날들은
아직 한가운데
멈추지 말고
몸부림치며 기어가
쏟아지는 파란 하늘과
아득하게 멀어지는 길
우리는 이 몸에 흐르는
새빨간 피의 온도로만
말하고 싶어
차가운 혀로
날 비웃지는 말아줘
이를 물고 참은 하루와
끊어질 듯 이어지는 길
우리가 길을 헤매이는
시퍼런 봄의 날들은
아직 한가운데
멈추지 말고
몸부림치며 기어가
쏟아지는 파란 하늘과
아득하게 멀어지는 길`,
    },
    {
      id: 3,
      title: "Desert Eagle",
      singer: "실리카겔",
      rating: 3,
      lyrics: `대지에 씨를 뿌리고 밤이 오면
낙타와 길을 헤매고
말하지 못한 비밀과 잠에 들면
사막에 빛이 내려와
섬광 섬광
북극에서 떠오른 섬광
오 음악 없는 나라로
죽은 분들의 세계로
We love for the end desert
We march for the end desert
Evolving to be safe you and I
Dive into the time desert
기계와 친구가 되는 공장에서
신비한 힘을 느끼고
이 사막에서 꼭 살아남자
마지막 행복을 위해
섬광 섬광
북극에서 떠오른 섬광
오 벼락 치는 나라로
유아독존의 세계로
We love for the end desert
We march for the end desert
Evolving to be safe you and I
Dive into the time desert`,
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

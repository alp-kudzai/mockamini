// import logo from './logo.svg';
import './App.css';

function Dropdown(props){
  let {button, items, links} = props
  return (
    <div className='dropdown'>
      <button className='btn btn-primary dropdown-toggle' type='button'>
        {button}
      </button>
      <div className='dropdown-menu'>
        {items.map((item, index) => {
          return (
            <a className='dropdown-item' key={index} href={links[index]}>{item}</a>
          )
        })}
      </div>
    </div>
  )
}

function NavBar (){
  return (
    <header className="App-header">
      <div className='top-nav'>
        <h2 className="Site-title">
          <span>AMINI Football Management</span>
        </h2>
        <h3 className="Site-subtitle">
          <span>Place Fancy Slogan Here</span>
        </h3>
        <SocialMedia />
      </div>
      <div className='bottom-nav'>
        <Dropdown button='Company' items={['Mission', 'Vision', 'Contact']} links={['#', '#', '#']} />
        <Dropdown button='Services' items={['Training', 'Coaching', 'Tournament']} links={['#', '#', '#']} />
        <Dropdown button='Resources' items={['News', 'Videos', 'Photos']} links={['#', '#', '#']} />
        <Dropdown button='Partners and Affiliated Clubs' items={['Stuff', 'Team', 'Sauce']} links={['#', '#', '#']} />
      </div>
    </header>
  )
}

function SocialMedia(){
  return (
    <div className="Social-media-icons">
      <a href='#' className="Social-media-link">
        <i className='bi bi-twitter sm-icon'></i>
      </a>
      <a href='#' className="Social-media-link">
        <i className='bi bi-facebook sm-icon'></i>
      </a>
      <a href='#' className="Social-media-link">
        <i className='bi bi-instagram sm-icon'></i>
      </a>
      <a href='#' className="Social-media-link">
        <i className='bi bi-linkedin'></i>
      </a>
    </div>
  )
}

function VideoList(){
  return (
    <div className='Video-sec'>
      <div className='player-container'>
        {/* <iframe className='player' src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe> */}
        Video goes here
      </div>
    </div>
  )
}

function Descrip(){
  return(
    <div className='Descrip-sec'>
      <div className='Descrip-container'>
        <div className='mission-descrip'>
          <h2 className='Descrip-title'>Mission Statement</h2>
          <p className='Descrip-text'>
            Text goes here
          </p>
        </div>
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className='App-body'>
        <VideoList />
        <Descrip />
      </div>
    </div>
  );
}

export default App;

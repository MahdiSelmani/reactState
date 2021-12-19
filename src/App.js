import './App.css';
import React from 'react';

class App extends React.Component {
  constructor() {
    super()
    this.state = { Person: { fullName: 'Mahdi Selmani', bio: 'Lorum epsum', imgSrc: 'https://meetanentrepreneur.lu/wp-content/uploads/2019/08/profil-linkedin.jpg', profession: 'Web developer' }, shows: true, time: 0 }
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ time: this.state.time + 1 })
        ;
    }, 1000);
  }

  toggle = () => this.setState({ shows: !this.state.shows })

  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '20px', justifyContent: 'space-between' }}>

        <button style={{ width: '200px', height: '40px', borderRadius: '20px', backgroundColor: '#4267E0', color: 'white', fontFamily: 'cursive', fontWeight:'900', letterSpacing:'2px', fontSize:'18px'}} onClick={() => this.toggle()}>{this.state.shows ? 'HIDE' : 'SHOW'}</button>
        <div >
          {this.state.shows ?
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <span style={{ display: 'flex' }}><h1 style={{ color: '#4267E0' }}>Full name :</h1>   <h1 style={{ color: '#51525A' }}>{this.state.Person.fullName}</h1></span>
              <span style={{ display: 'flex' }}><h1 style={{ color: '#4267E0' }}>Bio :</h1>   <h1 style={{ color: '#51525A' }}>{this.state.Person.bio}</h1></span>
              <img style={{ borderRadius: '20px', width: '300px', height: '300px' }} src={this.state.Person.imgSrc} alt="..." />
              <span style={{ display: 'flex' }}><h1 style={{ color: '#4267E0' }}>Profession:</h1>   <h1 style={{ color: '#51525A' }}>{this.state.Person.profession}</h1></span>
            </div> : <h1 style={{ color: '#4267E0' }}>Click Show to view the Profile</h1>}
        </div>
        <h5 style={{ alignContent: 'flex-end' }}>{this.state.time <= 1 ? `${this.state.time} Second since last mount` : this.state.time < 60 ? `${this.state.time} Seconds since last mount` : this.state.time < 120 ? `${parseInt(this.state.time / 60)} Minute since last mount` : this.state.time < 3600 ? `${parseInt(this.state.time / 60)} Minutes since last mount` : this.state.time < 7200 ? `${parseInt(this.state.time / 3600)} Hour since last mount` : `${parseInt(this.state.time / 3600)} Hours since last mount`} </h5>

      </div>
    )
  }
}

export default App;






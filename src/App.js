import React from 'react';

const pLeft={
  imgLogo:{
    marginRight: '1%',
    marginButtom: '1%',
    width: '25px',
  },
  imgApp:{
    width:'89%'
  },
  colorText:{
    color:'#616161'
  }
}

export default class App extends React.Component {
  render(){
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light fixed-top navbar-shrink" id="mainNav">
          <div className="container">
            <img style={pLeft.imgLogo} src={require('./img/Fontime_v2.png')}/>
            <a className="navbar-brand js-scroll-trigger" href="#page-top">Fontime</a>
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              Menu
              <i className="fas fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#download">Download</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#features">Features</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <header className="masthead">
          <div className="container h-100">
            <div className="row h-100">
              <div className="col-lg-7 my-auto">
                <div className="header-content mx-auto">
                  <h1 className="mb-5">Fontime te brinda una mayor facilidad y comodidad para reservar tu pedido de comida dentro de la universidad.</h1>
                  <a href="#download" className="btn btn-outline btn-xl js-scroll-trigger">INICIA YA, GRATIS!</a>
                </div>
              </div>
              <div className="col-lg-5 my-auto">
                <div className="device-container">
                  <div className="device-mockup iphone6_plus portrait white">
                    <div className="device">
                      <div className="screen">
                        <img style={pLeft.imgApp} src={require('./img/Home.png')}/>
                      </div>
                      <div className="button">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <section className="download bg-primary text-center" id="download">
          <div className="container">
            <div className="row">
              <div className="col-md-8 mx-auto">
                <h2 className="section-heading">Descubre lo que Fontime hace por ti!</h2>
                <p>Nuestra aplicación está disponible para cualquier dispositivo movil!<br></br>Descargala YA!</p>
                <div className="badges">
                  <a className="badge-link" href="#"><img src={require('./img/app-store-badge.svg')}/>&nbsp</a>
                  <a className="badge-link" href="#"><img src={require('./img/google-play-badge.svg')}/></a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="features" id="features">
          <div className="container">
            <div className="section-heading text-center">
              <h2>Unlimited Features, Unlimited Fun</h2>
              <p className="text-muted">Mira lo facil que puedes reservar con Fontime!</p>
              <br></br>
            </div>
            <div className="row">
              <div className="col-lg-4 my-auto">
                <div className="device-container">
                  <div className="device-mockup iphone6_plus portrait white">
                    <div className="device">
                      <div className="screen">
                        <img src="img/demo-screen-1.jpg" className="img-fluid" alt=""></img>
                      </div>
                      <div className="button">

                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-8 my-auto">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="feature-item">
                        <i className="icon-screen-smartphone text-primary"></i>
                        <h3>Device Mockups</h3>
                        <p className="text-muted">Ready to use HTML/CSS device mockups, no Photoshop required!</p>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="feature-item">
                        <i className="icon-camera text-primary"></i>
                        <h3>Flexible Use</h3>
                        <p className="text-muted">Put an image, video, animation, or anything else in the screen!</p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="feature-item">
                        <i className="icon-present text-primary"></i>
                        <h3>Free to Use</h3>
                        <p className="text-muted">As always, this theme is free to download and use for any purpose!</p>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="feature-item">
                        <i className="icon-lock-open text-primary"></i>
                        <h3>Open Source</h3>
                        <p className="text-muted">Since this theme is MIT licensed, you can use it commercially!</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="cta">
          <div className="cta-content">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h2>¿Tienes hambre? <br></br>No hagas cola</h2>
                <a href="#contact" className="btn btn-outline btn-xl js-scroll-trigger">RESERVA YA!</a>
              </div>
            </div>
          </div>
          </div>
          <div className="overlay"></div>
        </section>

        <section className="contact bg-primary" id="contact">
          <div className="container">
            <h2>Siguenos en nuestras redes sociales</h2>
            <br></br>
            <h2>Nosotros <i className="fas fa-heart"></i> nuevos amigos!</h2>
            <ul className="list-inline list-social">
              <li className="list-inline-item social-twitter">
                <a href="https://bit.ly/2SvL2nE">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li className="list-inline-item social-facebook">
                <a href="https://bit.ly/2Wg0Vzu">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
            </ul>
          </div>
        </section>

        <footer>
          <div className="container">
            &copy; Fontime 2019. All Rights Reserved.
          </div>
        </footer>
      </div>
    );
  }
}

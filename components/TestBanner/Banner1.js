import React from 'react';
// import BannerContent from '../datas/bannerContent.json';

class Banner extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     bannerContent: '',
  //     count: 0,
  //   };

  //   this.componentDidMount = () => {
  //     this.setState({
  //       bannerContent: BannerContent[BannerContent.length - 1].content,
  //     });
  //     const timer = setInterval(() => {
  //       this.innerFetchData();
  //     }, 3000);
  //   };

  //   this.innerFetchData = () => {
  //     if (this.state.count < BannerContent.length) {
  //       this.setState({
  //         bannerContent: BannerContent[this.state.count].content,
  //       });
  //       this.state.count = this.state.count + 1;
  //     } else {
  //       this.setState({
  //         bannerContent: BannerContent[0].content,
  //       });
  //       this.state.count = 1;
  //     }
  //   };
  //   // clearInterval(timer);
  // }
  render() {
    return (
      <div
        className="main-banner app-home"
        style={{
          height: '100vh',
          background: 'rgb(0,0,0)',
          background:
            'linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 0%, rgba(64,71,73,1) 100%)',
          // background:
          //   'url(/images/dubai_city_lights_river_night_59138_1746x1029.jpg)',
        }}
      >
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <div className="hero-content">
                    <h1 className="fadeInUp">THE SMART EXPERIENCE</h1>
                    {/* <h1 className="fadeInUp">{this.state.bannerContent}</h1> */}
                    <p>
                      Experience the perfect harmony between versatility, safety
                      and affordability.
                    </p>

                    {/* <form>
                                            <input type="email" placeholder="Enter your email...." className="form-control" />
                                           
                                        </form> */}
                    {/* <button type="submit" className="btn btn-primary">
                      Book Online
                    </button> */}
                  </div>
                </div>

                <div className="col-lg-6 col-md-12">
                  <div>
                    {/* <img src="/images/app-imgnew1.png" alt="image" />
                    <img src="/images/app-imgnew2.png" alt="image" /> */}
                    <img
                      src="/images/BMW-7-Series-PNG-Free-File-Download.png"
                      alt="image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="creative-shape">
                    <img src='/images/bg3.png' alt="bg" />
                </div> */}
        {/* <div className="bg-gray shape-1"></div>
        <div className="shape1">
          <img src="/images/shape1.png" alt="img" />
        </div>
        <div className="shape2">
          <img src="/images/shape2.png" alt="img" />
        </div>
        <div className="shape3">
          <img src="/images/shape3.png" alt="img" />
        </div>
        <div className="shape4 rotateme">
          <img src="/images/shape4.png" alt="img" />
        </div>
        <div className="shape6">
          <img src="/images/shape6.png" alt="img" />
        </div>
        <div className="shape8 rotateme">
          <img src="/images/shape8.svg" alt="shape" />
        </div>
        <div className="shape9">
          <img src="/images/shape9.svg" alt="shape" />
        </div> */}
      </div>
    );
  }
}

export default Banner;

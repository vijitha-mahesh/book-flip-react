import React from 'react'
import HTMLFlipBook from "react-pageflip";
import './app.css'
import FrontCover from './FronPage';
import BackCover from './BackPage';
import SinglePage from './SinglePage'
// import FirstPage from './Page-01.jpg'
const PageOne = window.location.origin + "/Page-01.jpeg"
const PageTwo = window.location.origin + "/Page-02.png"
const PageThree = window.location.origin + "/Page-03.jpeg"
const PageFour = window.location.origin + "/Page-04.jpeg"
const Phone = window.location.origin + "/Phone.png"
const private_sale = window.location.origin + "/private_sale.png"
const telegram = window.location.origin + "/telegram.png"



class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 0,
      totalPage: 0,
    };
  }

  nextButtonClick = () => {
    this.flipBook.getPageFlip().flipNext();
  };

  prevButtonClick = () => {
    this.flipBook.getPageFlip().flipPrev();
  };

  onPage = (e) => {
    this.setState({
      page: e.data,
    });
  };

  componentDidMount() {
    this.setState({
      totalPage: this.flipBook.getPageFlip().getPageCount(),
    });
  }

  render() {
    return (
      <div className="body">
        <HTMLFlipBook
          width={380}
          height={520}
          size="fixed"
          minWidth={315}
          maxWidth={1000}
          minHeight={400}
          maxHeight={1533}
          maxShadowOpacity={0.5}
          showCover={true}
          mobileScrollSupport={true}
          onFlip={this.onPage}
          onChangeOrientation={this.onChangeOrientation}
          onChangeState={this.onChangeState}
          className="book"
          ref={(el) => (this.flipBook = el)}
        >

          <FrontCover></FrontCover>

          {/* Page 01 */}
          <SinglePage 
              number={1} 
              background={PageOne}
              ></SinglePage>

          {/* Page 02 */}
          <SinglePage number={2}   background={PageTwo}></SinglePage>

          {/* Page 03 */}
          <SinglePage number={3} background={PageThree}></SinglePage>

          {/* Page 04 */}
          
          <SinglePage number={4} background={PageFour} ></SinglePage>

          {/* Page 05 */}
          <SinglePage number={5}></SinglePage>

          {/* Page 06 */}
          <SinglePage number={6}></SinglePage>
         
          {/* Page 07 */}
          <SinglePage number={7}></SinglePage>
          
          {/* Page 08 */}
          <SinglePage number={8}></SinglePage>

          <BackCover ></BackCover>

        </HTMLFlipBook>

        {/* BUTTONS */}
        <div className="container">
            <button type="button" onClick={this.prevButtonClick} className="btn">
              Previous page
            </button>
            <p>
              <span>{this.state.page}</span> &nbsp;  of &nbsp;
              <span>{this.state.totalPage}</span>
            </p>
            <button type="button" onClick={this.nextButtonClick} className="btn">
                Next page
            </button>
        </div>
        <div className="sales" style={{backgroundImage:`url(${Phone})`, backgroundSize:"cover", backgroundPosition:"center"}}>
        <a href="https://bscscan.com/address/0x0d3e59dbe17bc98a8599493f23dd89b37e21f4c5#code" className="contractId">
              <p>Official Contract:</p>
              <p>0x0d3e59dbe17bc98a8599493f23dd89b37e21f4c5</p>
        </a>
            <a href="https://gleam.io/Ko5Q2/evernote-private-sale" className="sale_link">
              <img src={private_sale} alt="" />
              <p>PRIVATE SALE</p>
            </a>
            <a href="https://t.me/DogeNoteOfficial" className="sale_link">
              <img src={telegram} alt="" />
              <p>TELEGRAM</p>
            </a>
        </div>

      </div>
    );
  }
}

export default App;

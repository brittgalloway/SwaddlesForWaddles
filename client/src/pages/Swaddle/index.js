import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import UserTextInput from "../../components/UserTextInput";
import { ShowPenguin, ShowSweater } from "../../components/ButtonIcon";
import { ResetBtn, SaveBtn } from "../../components/ButtonSubmit";
import Navbar from "../../components/Navbar";
import imageTypes from "../../components/Carousel/images.json";
import ImageDisplay from "../../components/Carousel";
// import Composite from "../../components/Composite";
import API from "../../utils/API";
import { stat } from "fs";
import "./style.css";

// function ImageDisplay({ imgURL, dataName, type, clicked }) {
//   return (
//     <div className="col-md-4">
//       <img
//         src={imgURL}
//         data-name={dataName}
//         data-type={type}
//         onClick={handleClick}
//       />
//       <p>{clicked.toString()}</p>
//     </div>
//   );
// }

class Swaddle extends Component {
  state = {
    imageTypes
  };

  handleClick = event => {
    const imgURL = event.target.getAttribute("src");
    console.log(imgURL);
    const imgTYPE = event.target.getAttribute("alt");
    console.log(imgTYPE);
    // if (!clickedImage.clicked) {

    //   // if (
    //   //   clickedImage.clicked === true &&
    //   //   clickedImage.dataType === "penguin"
    //   // ) {
    //   //   //post img src ({imgURL}) into Composite component? or  as imgPenguin
    //   //   API.swaddle().then(clickedImage => clickedImage.json());
    //   // }
    //   // if (clickedImage.dataType === "sweater") {
    //   //   //post img src ({imgURL}) into Composite compent as sweaterRaw
    //   // }
    // }
    // console.log(clickedImage);
  };

  // function Swaddle() {
  // handleCarouselChange = carousel => {
  //   this.state.images.type === "penguin";
  // };
  // const [state, setState] = useState({
  //   imgPenguin:
  //     // this will be our default penguin image
  //     process.env.PUBLIC_URL + "/assets/images/penguins/penguinTest1.jpg",
  //   sweaterOverlay:
  //     // for production, initial state is just an empty string
  //     process.env.PUBLIC_URL + "/assets/images/sweaters/redSweaterTest.png",
  //   textOverlay: "Your Text Goes Here"
  //   // NEED TO ADD - xPosition, yPosition, width, rotation (if we figure that out)
  // });
  // useEffect(() => {
  //   API.swaddle({
  //     penguin: state.imgPenguin,
  //     sweater: state.sweaterOverlay,
  //     textOverlay: UserTextInput
  //   }).then(data => {
  //     // TO DO set state with the data or pass down the processed image as a prop
  //   });
  // }, []); // on change
  render() {
    return (
      <>
        <Container fluid>
          <Row>
            <Col size="md-3">
              <Navbar />
            </Col>

            <Col size="md-9">
              <Row>
                <Col size="md-12">
                  <p>Swaddles for Waddles</p>
                  {this.state.imageTypes.penguins.map((image, index) => (
                    <ImageDisplay
                      key={index}
                      imgURL={image.imgURL}
                      dateName={image.dataName}
                      dataType={image.type}
                      clicked={image.clicked}
                      handleClick={this.handleClick}
                    />
                  ))}
                  {this.state.imageTypes.sweaters.map((image, index) => (
                    <ImageDisplay
                      key={index}
                      imgURL={image.imgURL}
                      dateName={image.dataName}
                      dataType={image.type}
                      clicked={image.clicked}
                      handleClick={this.handleClick}
                    />
                  ))}
                </Col>
              </Row>
              <Row>
                <Col size="md-6">
                  <Row>
                    <Col size="md-2">
                      <ShowPenguin />
                    </Col>
                    <Col size="md-2">
                      <ShowSweater />
                    </Col>
                    <Row>
                      <Col size="md-12">
                        <UserTextInput />
                      </Col>
                    </Row>
                  </Row>
                </Col>
                <Col size="md-6">
                  <section>
                    <div className="card">
                      <img
                        className="card-img-top"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/penguins/penguinTest1.jpg"
                        }
                        alt="Card image cap"
                      />
                    </div>
                  </section>
                </Col>
              </Row>

              <Row>
                <Col size="md-4 offset-md-2">
                  <SaveBtn />
                </Col>
                <Col size="md-4 ">
                  <ResetBtn />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
export default Swaddle;

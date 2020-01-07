import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import UserTextInput from "../../components/UserTextInput";
import { ShowPenguin, ShowSweater } from "../../components/ButtonIcon";
import { ResetBtn, SaveBtn } from "../../components/ButtonSubmit";
import imageTypes from "../../components/Carousel/images.json";
import ImageDisplay from "../../components/Carousel";
import API from "../../utils/API";
import { stat } from "fs";
import "./style.css";

// const clickedPenguinURL = "";
// const clickedSweaterURL = "";

class Swaddle extends Component {
  state = {
    imageTypes,
    clickedPenguinURL: "",
    clickedSweaterURL: ""
    // userSelectedObject: { penguin: "", sweater: "", UserTextInput: "" }
  };

  // handleClick = event => {
  //   const imgURL = event.target.getAttribute("src");
  //   // console.log("i am a url", imgURL);
  //   // TO DO rewrite this so it drills down one of the arrays
  //   const clickedImage = this.state.imageTypes.find(
  //     img => img.imgURL == imgURL
  //   );

  //   if (!clickedImage.clicked) {
  //     clickedImage.clicked = true;
  //   }
  //   // TO DO all other images in the array penguins or sweaters will be false
  //   console.log(clickedImage);
  // };

  handleClick = event => {
    const clickedImageURL = event.target.getAttribute("src");
    const clickedImageType = event.target.getAttribute("dataType");
    console.log(clickedImageURL, clickedImageType);

    if (clickedImageType == "penguin") {
      const clickedPenguinURL = clickedImageURL;
      console.log("clickedPenguinURL is " + clickedPenguinURL);
      this.setState(
        {
          clickedPenguinURL: clickedPenguinURL
        },
        () => {
          if (this.state.clickedPenguinURL && this.state.clickedSweaterURL) {
            API.jimpImages({
              imgPenguin: this.state.clickedPenguinURL,
              imgSweater: this.state.clickedSweaterURL
            });
          }
        }
      );
      // AND all others in the array of penguins is clicked:false
    }
    // if (clickedImageType == imageTypes.sweaters.type) {
    if (clickedImageType == "sweater") {
      const clickedSweaterURL = clickedImageURL;
      console.log("clickedSweaterURL is " + clickedSweaterURL);
      this.setState({
        clickedSweaterURL: clickedSweaterURL
      });
      // AND all others in the array of sweaters is clicked:false
    }
  };

  // // EXAMPLE FROM wk20act11
  // handleInputChange = event => {
  //   const { name, value } = event.target;
  //   this.setState({
  //     [name]: value
  //   });
  // };
  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   if (this.state.title && this.state.author) {
  //     API.saveBook({
  //       title: this.state.title,
  //       author: this.state.author,
  //       synopsis: this.state.synopsis
  //     })
  //       .then(res => this.loadBooks())
  //       .catch(err => console.log(err));
  //   }
  // };

  // // TO DO POST clickedSweaterURL and clickedPenguinURL
  // sendImagesToJimp = (clickedPenguinURL, clickedSweaterURL) => {
  //   API.jimpImages({
  //     clickedPenguinURL,
  //     clickedSweaterURL
  //   })
  //     .then()
  //     .catch(err => console.log(err));
  // };

  // WTF was this? see below
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
            <Col size="md-12">
              <p>Swaddles for Waddles</p>
              {this.state.imageTypes.penguins.map(image => (
                <ImageDisplay
                  key={image.index}
                  imgURL={image.imgURL}
                  dataName={image.dataName}
                  dataType={image.type}
                  clicked={image.clicked}
                  handleClick={this.handleClick}
                />
              ))}
              {this.state.imageTypes.sweaters.map(image => (
                <ImageDisplay
                  key={image.index}
                  imgURL={image.imgURL}
                  dataName={image.dataName}
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
        </Container>
      </>
    );
  }
}

export default Swaddle;

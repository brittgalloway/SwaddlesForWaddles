import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import UserTextInput from "../../components/UserTextInput";
import { ResetBtn, SaveBtn, AddTextBtn } from "../../components/ButtonSubmit";
import Navbar from "../../components/Navbar";
import imageTypes from "../../components/Carousel/images.json";
import ImageDisplay from "../../components/Carousel";
import API from "../../utils/API";
import { stat } from "fs";
import "./style.css";

class Swaddle extends Component {
  state = {
    imageTypes,
    clickedPenguinURL: "",
    clickedSweaterURL: "",
    userText: ""
    // userSelectedObject: { penguin: "", sweater: "", UserTextInput: "" }
  };

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
          console.log("callback executed");
          if (this.state.clickedPenguinURL && this.state.clickedSweaterURL) {
            console.log("we're tyring hard");
            API.jimpImages({
              imgPenguin: this.state.clickedPenguinURL,
              imgSweater: this.state.clickedSweaterURL
            }).then(data => console.log("here it is", data));
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
      // To Do: give setState success callback
    }
  };
  handleInputChange = event => {
    const value = event.target.value;
    this.setState({
      value: value
    });
  };
  // handleText = event => {
  //   const inputValue = event.target.value;
  //   event.preventDefault();

  //   API.jimpImages({
  //     userText: this.inputValue
  //   }).then(data => console.log("It the Text", data));
  // };

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
          {/* header stuff can be a jumbotron or whatever is on brand */}
          <Row>Header Stuf</Row>
          <Row>
            <Col size="md-2">
               <p>Penguins</p>            
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
            </Col>
            <Col size="md-7">
              <section className="text-center">
                <div className="card ">
                  <img
                    className="card-img-top "
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/penguins/penguinTest1.jpg"
                    }
                    alt="Card image cap"
                  />
                </div>
                 <UserTextInput />
              </section>
            </Col>
            <Col size="md-2">
               <p>Sweaters</p>         
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
            <Col size="md-1">
                         
              <Navbar />
                         
            </Col>
          </Row>
          <div className="row">
                          
            <div className="text-center">
                              
              <SaveBtn />
               {/* sends image to Gallery  */}
                           
              <ResetBtn />
               {/* resets to default penguin/clear space */}
            </div>
                                       
          </div>
        </Container>
      </>
    );
  }
}
export default Swaddle;

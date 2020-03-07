import React, { Component } from "react";
import { Col } from "../../components/Grid";
import UserTextInput from "../../components/UserTextInput";
import { DownloadBtn, AddTextBtn } from "../../components/ButtonSubmit";
import Navbar from "../../components/Navbar";
import imageTypes from "../../components/Carousel/images.json";
import ImageDisplay from "../../components/Carousel";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import API from "../../utils/API";
import "./swaddle.scss";

const styles = theme => ({
  root: {
    display: "flex"
  },

  content: {
    flexGrow: 1,

    padding: theme.spacing(0)
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },

  heroContent: {
    padding: theme.spacing(3, 0, 6)
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
});

class Swaddle extends Component {
  state = {
    imageTypes,
    clickedPenguinURL: "/assets/images/penguins/penguin001.jpg",
    clickedSweaterURL: "",
    userTextGrabbed: "",
    userName: ""
  };
  componentDidMount() {
    const userName = localStorage.getItem("email");
    const name_local = localStorage.getItem("firstName");

    this.setState({ userName, name_local });
  }
  // Selecting penguin and sweater
  handleClick = event => {
    const clickedImageURL = event.target.getAttribute("src");
    const clickedImageType = event.target.getAttribute("datatype");
    console.log(clickedImageURL, clickedImageType);

    // if penguin
    if (clickedImageType == "penguin") {
      const clickedPenguinURL = clickedImageURL;
      this.setState(
        {
          clickedPenguinURL: clickedPenguinURL
        },
        () => {
          if (this.state.clickedPenguinURL && this.state.clickedSweaterURL) {
            API.jimpImages({
              imgPenguin: this.state.clickedPenguinURL,
              imgSweater: this.state.clickedSweaterURL
            }).then(data => this.setState({ process: data.data.base64 }));
          }
        }
      );
    }
    // if sweater
    if (clickedImageType == "sweater") {
      const clickedSweaterURL = clickedImageURL;
      this.setState(
        {
          clickedSweaterURL: clickedSweaterURL
        },
        () => {
          if (this.state.clickedPenguinURL && this.state.clickedSweaterURL) {
            API.jimpImages({
              imgPenguin: this.state.clickedPenguinURL,
              imgSweater: this.state.clickedSweaterURL
            }).then(data => this.setState({ process: data.data.base64 }));
          }
        }
      );
    }
  };

  handleInputChange = event => {
    const value = event.target.value;
    this.setState({
      value: value
    });
  };

  // Grabbing Text - able to grab keystrokes
  handleText = event => {
    const userTextGrabbed = event.target.value;
    this.setState({ userTextGrabbed: userTextGrabbed });
  };

  handleTextAddClick = event => {
    event.preventDefault();
    if (
      this.state.clickedPenguinURL &&
      this.state.clickedSweaterURL &&
      this.state.userTextGrabbed
    ) {
      API.jimpImages({
        imgPenguin: this.state.clickedPenguinURL,
        imgSweater: this.state.clickedSweaterURL,
        userText: this.state.userTextGrabbed
      }).then(data => {
        this.setState({ process: data.data.base64 });
      });
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <>
        <div className={classes.root}>
          <header>
            <Navbar />
            <h3 className="donationGreet">
              {this.state.name_local ? (
                <h3>Hello {this.state.name_local}!</h3>
              ) : (
                <a href="/Login ">Please Login</a>
              )}
            </h3>
          </header>
          <main className={classes.content}>
            {/* Hero unit */}
            <div className={classes.heroContent}>
              <Container maxWidth="sm">
                <div className="logo">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/icons/swaddles_for_waddles_logo_sm.png"
                    }
                  />
                </div>
                <Typography
                  variant="h2"
                  align="center"
                  color="textSecondary"
                  paragraph
                >
                  Make a Meme
                </Typography>
              </Container>
            </div>
            {/* End hero unit */}
            <Container maxWidth="md">
              {/**Instruction on function */}
              {/* <HowTo> */}
              <ExpansionPanel id="expansion" width="50em">
                <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="How-to-content"
                  id="How-to-header"
                >
                  <Typography variant="h4" align="center">
                    How To Meme
                  </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography variant="h5">
                    It's easy! Click on a penguin and a sweater. Then add your
                    fun message and click "Add Text".
                  </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>
              {/* </HowTo> */}
              <div className="swaddled">
                <Col size="md-2">
                  <div id="penguins">
                    {this.state.imageTypes.penguins.map((image, index) => (
                      <ImageDisplay
                        key={index}
                        imgURL={image.imgURL}
                        dateName={image.dataname}
                        datatype={image.type}
                        clicked={image.clicked}
                        handleClick={this.handleClick}
                      />
                    ))}
                  </div>
                </Col>

                <Col size="md-7">
                  <section className="text-center">
                    <div className="card ">
                      <img
                        id="preview"
                        className="card-img-top "
                        src={this.state.process || this.state.clickedPenguinURL}
                        alt="Meme Preview"
                      />
                    </div>
                    <form>
                      <UserTextInput
                        userTextGrabbed={this.state.userTextGrabbed}
                        handleChange={this.handleText}
                      />
                      <AddTextBtn onClick={this.handleTextAddClick}>
                        Add Text
                      </AddTextBtn>
                    </form>
                    <div className="text-center"></div>
                    <DownloadBtn process={this.state.process} />
                  </section>
                </Col>

                <Col size="md-2">
                  {this.state.imageTypes.sweaters.map((image, index) => (
                    <ImageDisplay
                      key={index}
                      imgURL={image.imgURL}
                      dateName={image.dataname}
                      datatype={image.type}
                      clicked={image.clicked}
                      handleClick={this.handleClick}
                    />
                  ))}
                </Col>
              </div>
            </Container>
          </main>
        </div>
      </>
    );
  }
}

export default withStyles(styles)(Swaddle);

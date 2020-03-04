import React, { Component } from "react";
import { Col } from "../../components/Grid";
import { Input } from "../../components/Form";
import Navbar from "../../components/Navbar";
import { List, ListItem } from "../../components/List";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import API from "../../utils/API";
import "./donate.css";

const styles = theme => ({
  root: {
    display: "flex"
  },

  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3)
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
});
class Donate extends Component {
  state = {
    userName: "",

    donations: [],
    amount: ""
  };
  componentDidMount() {
    const userName = localStorage.getItem("email");
    const name_local = localStorage.getItem("firstName");

    this.setState({ userName, name_local });
    this.loadDonations();
  }

  loadDonations = () => {
    const userId = localStorage.getItem("userId");
    if (userId) {
      API.getDonations(userId)
        .then(res => {
          this.setState({
            donations: res.data,
            amount: ""
          });
        })
        .catch(err => console.log(err));
    }
  };

  handleInputChange = event => {
    const value = event.target.value;
    this.setState(
      {
        amount: value
      },
      () => console.log(this.state)
    );
  };

  handleFormSubmit = event => {
    event.preventDefault();

    const userId = localStorage.getItem("userId");
    API.postDonation({
      amount: this.state.amount,
      UserId: userId
    })
      .then(res => {
        this.loadDonations();
      })
      .catch(err => console.log(err));
  };
  render() {
    const { classes } = this.props;
    return (
      <>
        <div className={classes.root}>
          <CssBaseline />
          <header>
            <Navbar />
          </header>
          <main className={classes.content}>
            {/* Hero unit */}
            <div className={classes.heroContent}>
              <h3 className="donationGreet">
                {this.state.name_local ? (
                  <h3>Hello {this.state.name_local}!</h3>
                ) : (
                  <a href="/Login ">Please Login</a>
                )}
              </h3>
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
                  My Donations
                </Typography>
              </Container>
            </div>

            {/* End hero unit */}
            <Container maxWidth="md" className={classes.content}>
              <Typography>
                The World Wildlife Fund is our favorite organization for saving
                animals. If you would like to help the penguins please pledge to
                donate. Please note - no financial information will be requested
                at this time.
              </Typography>
              <hr />
              <form>
                <Input
                  value={this.state.value}
                  changeHandler={this.handleInputChange}
                  name="Donation"
                  placeholder="$ 0.00"
                />
                <div className="text-center">
                  <Button
                    // disabled={!(this.state.author && this.state.title)}
                    onClick={this.handleFormSubmit}
                  >
                    Pledge
                  </Button>
                </div>
              </form>

              <Col size="md-4">
                <div className="containerForTable">
                  <h3 className="listTitle">YOUR PLEDGES</h3>
                  <List k={this.state.donations} />
                  {this.state.donations.map(donation => (
                    <ListItem
                      transactionDate={donation.transactionDate}
                      amount={donation.amount}
                    />
                  ))}
                  <div>
                    {this.state.donations.length ? (
                      <h3 classname="totalDonationAnnouncement">
                        Total pledges to date: $
                        {this.state.donations.reduce(
                          (total, object) => total + Number(object.amount),
                          0
                        )}
                      </h3>
                    ) : (
                      <p id="noDonation">
                        No pledges yet, <br />
                        Please give generously
                      </p>
                    )}
                  </div>
                </div>
              </Col>
            </Container>
          </main>
        </div>
      </>
    );
  }
}

// export default Donate;
export default withStyles(styles)(Donate);

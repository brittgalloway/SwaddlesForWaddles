import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { makeStyles, styled } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Grid from "@material-ui/core/Grid";
// import PrivateRoutes from "../../PrivateRoute";
// import "./style.scss";

const About = styled(ExpansionPanel)({
  maxwidth: "90em"
});
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  heroContent: {
    padding: theme.spacing(3, 0, 6)
  },

  content: {
    flexGrow: 1,
    padding: theme.spacing(1)
  },
  expand: {
    padding: theme.spacing(8, 25, 6)
  }
}));
function Home() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <header>
          <Navbar />
        </header>
        <main className={classes.content}>
          {/* Hero unit */}
          <div className={classes.heroContent}>
            <Container maxWidth="sm">
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="textPrimary"
                gutterBottom
              >
                Swaddles 4 Waddles
              </Typography>
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
                Memes for a Cause
              </Typography>
            </Container>
          </div>

          {/* End hero unit */}
          <Container maxWidth="xl">
            <Grid container direction="row" justify="center">
              <Link to="/Swaddle" className="bttn">
                <Button
                  variant="outlined"
                  size="large"
                  style={{ marginRight: "2em" }}
                >
                  Swaddle a Penguin
                </Button>
              </Link>

              <Link to="/donate" className="bttn">
                <Button
                  variant="outlined"
                  size="large"
                  style={{ marginLeft: "2em" }}
                >
                  Donate Now
                </Button>
              </Link>
            </Grid>
            <Grid item xs={12} className={classes.expand}>
              <About id="expansion">
                <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="about-content"
                  id="about-header"
                  align="center"
                >
                  <Typography variant="h4" align="center">
                    Our Cause
                  </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography Typography variant="h5">
                    A group of penguins is called a waddle, and a sweater for a
                    penguin is like a swaddle. Here, on Swaddles for Waddles,
                    you can create your own images and memes of penguins in
                    sweaters!
                    <br />
                    Create fun memes and be as fun and silly as you want.
                    <br />
                    In 2000, there was an oil spill near Melbourne, Australia
                    that effected local Little Blue Penguins. The Tasmanian
                    Conservation Trust and State Library requested
                    sweaters/jumpers for penguins to keep them from cleaning
                    themselves and thus ingesting the oil on their bodies. The
                    call to action was answered in larger numbers than the
                    orginizations could handle.
                    <br />
                    In 2014 there was another call for sweaters to have in stock
                    incase of another oil spill. Once again, the public sent too
                    many sweaters and many fun stories such as Australia's
                    oldest man knitting sweaters for the penguins.
                    <br />
                    We are offering you different way to engage with the cause.
                    <br />
                    A group of penguins is called a waddle, and a sweater for a
                    penguin is like a swaddle. Here, on Swaddles for Waddles,
                    you can create your own images and memes of penguins in
                    sweaters!
                    <br />
                    Create fun memes and that will (indirectly) bring global
                    attention to the needs of penguins around the world. While
                    we love activism, don't feel pressure to make a social
                    statement with your meme! Be as fun and silly as you want.
                    <br />
                    If you would like to be more proactive in your support for
                    penguins please donate! We love the World Wild Life
                    Foundation and their efforts!
                    <br />
                  </Typography>
                </ExpansionPanelDetails>
              </About>
            </Grid>
          </Container>
        </main>
      </div>
    </>
  );
}

export default Home;

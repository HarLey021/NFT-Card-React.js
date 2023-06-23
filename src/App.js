import equilibrium from "./images/image-equilibrium.jpg";
import etherum from "./images/icon-ethereum.svg";
import clock from "./images/icon-clock.svg";
import avatar from "./images/image-avatar.png";
import eye from "./images/icon-view.svg";
import "./App.css";

function App() {
  return (
    <div className="main-container" style={styles.mainContainer}>
      <div className="card-container" style={styles.cardContainer}>
        <div className="image-container">
          <img
            className="equilibrium"
            src={equilibrium}
            style={styles.equilibrium}
          />
          <div className="overlay">
            <img className="eye" src={eye} style={styles.eye} />
          </div>
        </div>
        <div className="text-container" style={styles.textContainer}>
          <h1 style={styles.h1}>Equilibrium #3429</h1>
          <p className="main-p" style={styles.mainP}>
            Our Equilibrium collection promotes balance and calm.
          </p>
          <div className="etherum-container" style={styles.etherumContainer}>
            <div className="price-container" style={styles.priceContainer}>
              <img src={etherum} />
              <p className="priceP" style={styles.priceP}>
                0.041 ETH
              </p>
            </div>
            <div
              className="deadline-container"
              style={styles.deadlineContainer}
            >
              <img src={clock} />
              <p className="deadline-p" style={styles.deadlineP}>
                3 days left
              </p>
            </div>
          </div>
          <div className="separator-line" style={styles.separatorLine}></div>
          <div className="creator-container" style={styles.creatorContainer}>
            <img className="avatar" src={avatar} style={styles.avatar} />
            <p className="creator-text" style={styles.creatorP}>
              Creation of{" "}
              <span style={styles.creatorTextSpan}>Jules Wyvern</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

const styles = {
  mainContainer: {
    width: "100%",
    height: "100vh",
    background: "#0D192C",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Outfit",
  },

  cardContainer: {
    width: "327px",
    height: "543px",
    background: "#15263F",
    borderRadius: "15px",
  },

  equilibrium: {
    width: "278px",
    height: "278px",
    margin: "24px",
    borderRadius: "8px",
  },

  textContainer: {
    width: "278px",
    height: "127px",
    marginLeft: "24px",
  },

  h1: {
    width: "100%",
    color: "#FFFFFF",
    fontWeight: 600,
    fontSize: "22px",
    lineHeight: "28px",
    marginBottom: "12px",
  },

  mainP: {
    width: "100%",
    color: "#8BACD9",
    fontWeight: 300,
    fontSize: "18px",
    lineHeight: "26px",
    marginBottom: "16px",
  },

  etherumContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "16px",
  },

  priceContainer: {
    width: "88.5px",
    height: "19px",
    display: "flex",
    justifyContent: "space-between",
  },

  priceP: {
    color: "#00FFF8",
    fontWeight: 600,
    fontSize: "15px",
    lineHeight: "19px",
  },

  deadlineContainer: {
    width: "93px",
    height: "19px",
    display: "flex",
    justifyContent: "space-between",
  },

  deadlineP: {
    color: "#8BACD9",
    fontWeight: 400,
    fontSize: "15px",
    lineHeight: "19px",
  },

  separatorLine: {
    width: "100%",
    height: "1px",
    background: "#2E405A",
    marginBottom: "16px",
  },

  creatorContainer: {
    width: "219px",
    height: "33px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  avatar: {
    width: "33px",
  },

  creatorP: {
    color: "#8BACD9",
    fontWeight: 400,
    fontSize: "15px",
    lineHeight: "19px",
  },

  creatorTextSpan: {
    color: "#FFFFFF",
  },

  eye: {
    display: "none",
  },
};

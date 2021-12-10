import React from "react";
import { connect } from "react-redux";
import { buyIcecream } from ".";

const CakeContainer = props => {
  return (
    <div>
      <h2>Number of icecream: {props.numOfIcecreams}</h2>
      <button onClick={props.buyIcecream}>Buy Icecream</button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    numOfIcecreams: state.icecream.numOfIcecreams,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    buyIcecream: () => dispatch(buyIcecream()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);

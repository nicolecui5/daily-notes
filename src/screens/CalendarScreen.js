import { connect } from 'react-redux';

const CalenderScreen = props => {
  return <></>;
};

const mapStateToProps = (state, ownProps) => ({
    ...state,
    ...ownProps
});

// const mapDispatchToProps = (dispatch) => ({
// })

export connect(mapStateToProps, null)(CalenderScreen);
import { connect } from 'react-redux';
import SliderComponent from '../components/Slider';


const mapStateToProps = state => {
  return {
    profile : state.profile
  };
}




const SliderComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(SliderComponent);

export default SliderComponent;

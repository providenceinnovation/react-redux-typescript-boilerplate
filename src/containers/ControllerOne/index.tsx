import * as React from 'react';
import * as style from './style.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { RootState } from '../../reducers';
import { LastUpdated } from '../../components';
import { NumberCounterUpdater } from '../../components';
import { ToggleUpdater } from '../../components';
import { ToggleListUpdater } from '../../components';
import * as realTimeManager from '../../utils/realTimeManager';

export namespace ControllerOne {
  export interface Props extends RouteComponentProps<void> {
    /* empty */
  }

  export interface State {
    /* empty */
  }
}

@connect(mapStateToProps, mapDispatchToProps)
export class ControllerOne extends React.Component<ControllerOne.Props, ControllerOne.State> {

  render() {
    // load the provider ID query string param
    const params = new URLSearchParams(this.props.location.search);
    const providerID = params.get('providerID') || realTimeManager.PROVIDER_ID_URGENT_CARE;

    const { children } = this.props;

    return (
      <div className={style.main}>
        <div className={style.header}>
          <img src={require('../../images/SoundMentalLogo.png')} />
          <h1>Sound Mental Health<br />of Seattle</h1>
        </div>
        <div className={style.componentContainer}>
          <div className={style.componentHeader} >
            <div>
              <span>Update Clinic Availability</span>
              <LastUpdated providerID={providerID} />
            </div>
          </div>
          <div className={style.componentContainerLayout}>
            <div className={style.componentItem}>
              <div className={style.componentItemHeader}>
                <img src={require('../../images/WaitTimeIcon.png')} />
                <span>Update Wait Time</span>
              </div>
              <hr />
              <div className={style.componentGrid} >
                <ToggleUpdater providerID={providerID} serviceType="acceptingNow" description="Accepting new patients?" />
                <NumberCounterUpdater providerID={providerID} serviceType="waitTime" description="Current Wait Time" stepAmount={5} />
              </div>
            </div>
            <div className={style.componentItem}>
              <div className={style.componentItemHeader}>
                <img src={require('../../images/InsuranceIcon.png')} />
                <span>Update Insurance</span>
              </div>
              <hr />
              <div className={style.componentGrid} >
                <ToggleListUpdater providerID={providerID} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state: RootState) {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
  };
}

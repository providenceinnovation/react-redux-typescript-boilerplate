import * as React from 'react';
import * as style from './style.css';
// import * as realTimeManager from '../../utils/realTimeManager';
import { NumberCounterUpdater } from '..';

/* Container for the updaters for a single service */
export namespace ServiceLocationUpdater {
  export interface Props {
    providerID: string;
    providerName: string;
  }

  export interface State {

  }
}

export class ServiceLocationUpdater extends React.Component<ServiceLocationUpdater.Props, ServiceLocationUpdater.State> {
  constructor(props?: ServiceLocationUpdater.Props, context?: any) {
    super(props, context);

    this.state = {

    };
  }

  componentDidMount () {
    // get provider
    console.log('mounted');
  }

  render() {
      let widgets = [
      {
        serviceType: 'numberDentalAppointmentsAdult',
        description: 'Adults'
      },
      {
        serviceType: 'numberDentalAppointmentsChildren',
        description: 'Pediatric'
      }
    ];

    let widgetComponents = widgets.map((widget) => {
      return <NumberCounterUpdater providerID={this.props.providerID} serviceType={widget.serviceType} description={widget.description} />
    });
    return (
      <div className={style.main}>
        <h3>{this.props.providerName}</h3>
        {widgetComponents}
      </div>
    );
  }
}

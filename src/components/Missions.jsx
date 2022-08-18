import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionsCard from './MissionCard';

class Missions extends React.Component {
  render() {
    const { Missions: { name, year, country, destination } } = this.props;
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        <di>
          {
            missions.map((mission) => <MissionsCard key={ name } name={ name } year={ year } country={ country } destination={ destination }/>)
          }
        </di>
      </div>
    );
  }
}

export default Missions;

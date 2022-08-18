import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCards from './PlanetCard';

class SolarSystem extends React.Component {
    const { name, image } = this.props;

  render() {
    return (
      <div data-testid="solar-system">
        <Title headline='Panetas' />
        <div>
            planets.map((planet) => <PlanetCard key={ name } planetName={ name } planetImage={ image }/>)
        </div>
      </div>
    );
  }
}

export default SolarSystem;

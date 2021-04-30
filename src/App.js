import Palette from './Palette';
import { generatePalette } from './colorHelpers';
import seedColors from './seedColors';
import {Route, Switch} from 'react-router-dom';
import { Component } from 'react';

class App extends Component {
  findPalette(id){
    return seedColors.find(function(palette){
      return palette.id === id;
    })
  }
  render(){
    return (
      <Switch>
        <Route exact path="/" render={()=><h1>PALETTE LIST GOES HERE</h1>}/>
        <Route exact path="/palette/:id" render={(routeProps)=><Palette palette={generatePalette(this.findPalette(routeProps.match.params.id))}/>}/>
      </Switch>
      // <div >
      //   <Palette palette={generatePalette(seedColors[0])}/>
      // </div>
    );
  }
}

export default App;

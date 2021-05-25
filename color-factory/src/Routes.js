import React, { useState, useEffect } from 'react';
import { Switch, Route, Redirect, BrowserRouter} from 'react-router-dom';

import ColorList from "./ColorList";
import NewColorForm from "./NewColorForm";
import Color from "./Color";


function Routes() {
  // get color from local storage/passed in data or preexisting colors
  const iColors = JSON.parse(localStorage.getItem("colors")) || {
    red: "#FF0000",
    green: "#00FF00",
    blue: "#0000FF"
  }
  const [colors, setColors] = useState(iColors)
  
  useEffect( () => 
    //need to store data after renduring
    localStorage.setItem("colors", JSON.stringify(colors)),
    [colors]
  );

  const addColors = (newColors) => {
    setColors(oldColors => ({...oldColors, ...newColors}))
  }
  
  const currColor = (props) => {
    //{ match: { params } } = this.props;
    const { color } = props.match.params;
    const hex = colors[color];
    return <Color {...props} hex={hex} color={color} />;
  } 

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/colors">
            <ColorList colors={colors} />
          </Route>
          <Route exact path='/colors/new'>
            <NewColorForm newColor={addColors} />
          </Route>
          <Route path="/colors/:color">
            {currColor}
          </Route>
          <Redirect to="/colors" />
        </Switch>
      </BrowserRouter>
      );
}

export default Routes;
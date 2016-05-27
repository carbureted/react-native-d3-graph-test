import React, { Component } from 'react';

import Svg,{
    Circle,
    Ellipse,
    G,
    LinearGradient,
    RadialGradient,
    Line,
    Path,
    Text,
    Polygon,
    Polyline,
    Rect,
    Symbol,
    Use,
    Defs,
    Stop
} from 'react-native-svg';

class D3Graph extends Component {
  render() {
    var xAxisXOffset = 45;
    var xAxisYOffset = 13;

    var yAxisYOffset = 14;

    return(
      <Svg 
        width="300" 
        height="135"
      >
        <G
          x="25"
          y="8"
        >
          <Path 
            class="Line" 
            d="M530,190.81307074485642L515.2777777777777,192.18285840026405L456.3888888888889,180.3927824843217L441.6666666666667,177.3231378589504L426.94444444444446,166.99856969963693L412.22222222222223,154.97744526350533L147.22222222222223,0.8416767521179624L132.5,3.934426229508224L117.77777777777777,2.2807789635823426L29.444444444444443,6.142589943888224L14.722222222222221,7.179007591594232L0,9.654527450764668"
            stroke={this.props.lineColor}
            strokeWidth={2}
            fill="none"
          />
          <G 
            y="100"
          >
            <G 
              x={xAxisXOffset}
              y={xAxisYOffset}
            >
              <Text dy=".71em" y="9" x="0">April</Text>
            </G>
            <G 
              x={xAxisXOffset * 2}
              y={xAxisYOffset}
            >
              <Text dy=".71em" y="9" x="0">Apr 08</Text>
            </G>
            <G 
              x={xAxisXOffset * 3}
              y={xAxisYOffset}
            >
              <Text dy=".71em" y="9" x="0">Apr 15</Text>
            </G>
            <G 
              x={xAxisXOffset * 4}
              y={xAxisYOffset}
            >
              <Text dy=".71em" y="9" x="0">Apr 22</Text>
            </G>
            <G 
              x={xAxisXOffset * 5}
              y={xAxisYOffset}
            >
              <Text dy=".71em" y="9" x="0">Apr 29</Text>
            </G>
            <Path class="domain" d="M0,6V0H530V6"></Path>
          </G>
          <G 
            class="y axis"
          >
            <G 
              y={yAxisYOffset * 7}
            >
              <Text dy=".32em" x="-9" y="0">0</Text>
            </G>
            <G 
              y={yAxisYOffset * 6}
            >
              <Text dy=".32em" x="-9" y="0">100</Text>
            </G>
            <G 
              y={yAxisYOffset * 5}
            >
              <Text dy=".32em" x="-9" y="0">200</Text>
            </G>
            <G 
              y={yAxisYOffset * 4}
            >
              <Text dy=".32em" x="-9" y="0">300</Text>
            </G>
            <G 
              y={yAxisYOffset * 3}
            >
              <Text dy=".32em" x="-9" y="0">400</Text>
            </G>
            <G 
              y={yAxisYOffset * 2}
            >
              <Text dy=".32em" x="-9" y="0">500</Text>
            </G>
            <G 
              y={yAxisYOffset * 1}
            >
              <Text dy=".32em" x="-9" y="0">600</Text>
            </G>
            <Path 
              class="domain" 
              d="M-6,0H0V106H-6"
              y="-104"
              />
          </G>
        </G>
      </Svg>
    )
  }
}

export default D3Graph
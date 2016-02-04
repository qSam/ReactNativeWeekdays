// Import some code we need
var React = require('react-native');
var AppRegistry = React.AppRegistry;
var Text = React.Text;
var View = React.View;
var StyleSheet = React.StyleSheet;
var DayItem = require('./src/day-item');
var Moment = require('moment');



// Creating a React component -- QL
var Weekdays = React.createClass({
  render: function() {
    return <View style= {styles.container} >

      {this.days()}

    </View>
  },
  days: function() {
    var daysItems = [];

    for (var i=0; i < 7 ; i++){
      var day = Moment().add(i,'days').format('dddd');
      daysItems.push(
        <DayItem day={day} daysUntil={i} />
      )
    }

    return daysItems
  }
});

// Style the react componenet
var styles = StyleSheet.create({
    container: {
      flex : 1,
      flexDirection : 'column',
      justifyContent : 'center', //Moves object on Y-axis
      alignItems: 'center' //Moves object on X-axis
    }
});

// Show the react component on the screen
AppRegistry.registerComponent('Weekdays',function() {
  return Weekdays
});


$('body').on('keydown', (event) => {
  var arrowPress = event.key.match(/Arrow(Up|Down|Left|Right)/);
  if (arrowPress) {
    var direction = arrowPress[1];
    console.log(direction); // direction = 'Left', 'Right', 'Down', 'Up
    SwimTeam.move(direction.toLowerCase()); // 'left', 'right', 'down', 'up 
  }
});

console.log('Client is running in the browser!');

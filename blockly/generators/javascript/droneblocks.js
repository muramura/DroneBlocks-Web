Blockly.JavaScript['takeoff'] = function(block) {
  var altitude = block.getFieldValue("altitude");
  return "takeoff," + altitude + "|";
};

Blockly.JavaScript['land'] = function(block) {
  return "land";  
};

Blockly.JavaScript['land_home'] = function(block) {
  return "land_home";  
};

Blockly.JavaScript['hover'] = function(block) {
  var duration = block.getFieldValue("duration");
  return "hover," + duration + "|";
};

Blockly.JavaScript['yaw_right'] = function(block) {
  var angle = block.getFieldValue("angle");
  return "yaw_right," + angle + "|";
};

Blockly.JavaScript['yaw_left'] = function(block) {
  var angle = block.getFieldValue("angle");
  return "yaw_left," + angle + "|";
};

Blockly.JavaScript['photo'] = function(block) {
  return "photo|";
};

Blockly.JavaScript['pitch_gimbal_to'] = function(block) {
  var angle = block.getFieldValue("angle");
  return "pitch_gimbal," + angle + "|";
};

Blockly.JavaScript['fly_forward'] = function(block) {
  var distance = block.getFieldValue("distance");
  return "::fly_forward," + distance + "|";
};

Blockly.JavaScript['video'] = function(block) {
  var action = block.getFieldValue("video_status");
  return "video," + action + "|";
};

Blockly.JavaScript['orbit'] = function(block) {
  var radius = block.getFieldValue('radius');
  var altitude = block.getFieldValue('altitude');
  var direction = block.getFieldValue('direction');
  var heading = block.getFieldValue('heading');
  var rotation = block.getFieldValue('rotation');
  return "orbit," + radius + "," + altitude + "," + direction + "," + heading + "," + rotation + "|";
};

Blockly.JavaScript['loop'] = function(block) {
  var repeats = Number(block.getFieldValue('TIMES'));
  var branch = Blockly.JavaScript.statementToCode(block, 'DO').trim();
  var code = "";
  
  for(var i=0; i < repeats; i++) {
    code += branch;
  }
  
  return code;
};

Blockly.JavaScript['change_altitude'] = function(block) {
  var altitude = block.getFieldValue("altitude");
  return "::change_altitude," + altitude + "|";
};
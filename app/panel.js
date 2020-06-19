const panelRule = require.context('./', true, /^\.\/(plugins|views)(\/[\w.-]+)?\/.arena.jsx$/);

let panels = {};

panelRule.keys().forEach(key => {
  const target = pluginRule(key).default;
  panels = Object.assign({}, panels, { [target.name]: function() { return new target().render() }});

});

export default panels;




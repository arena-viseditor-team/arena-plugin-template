const pluginRule = require.context('./', true, /^\.\/(plugins|views)(\/[\w.-]+)?\/entry.(js|ts)$/);

let plugins = {};

pluginRule.keys().forEach(key => {
  const target = pluginRule(key).default;
  plugins = Object.assign({}, plugins, { [target.name]: target });
});

export default plugins;

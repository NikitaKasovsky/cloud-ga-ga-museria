module.exports = async function (config, Node) {
  try {
    const node = new Node(config);
    await node.init();
    console.log('Museria global node has been launched', 'port: 2079');   
  }
  catch(err) {
    console.error(err.stack);
    process.exit(1);
  }
};
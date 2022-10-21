exports.get = (req, res) => {
  res.send("Ola mundo");
};

exports.post = (req, res) => {
  console.log(req?.file);
  res.send("ola Ruben");
};

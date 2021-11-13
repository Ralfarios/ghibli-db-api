const errorHandler = (err, req, res, next) => {
  if (err) {
    switch (err.name) {
      case 'SequelizeValidationError':
        res
          .status(400)
          .json({ error: err.errors.map(({ message }) => message) });
        break;
      default:
        res.status(500).json({ error: err });
        break;
    }
  }
};

module.exports = errorHandler;

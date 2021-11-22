const errorHandler = (err, req, res, next) => {
  if (err) {
    switch (err.name) {
      case 'SequelizeValidationError':
        res.status(400).json({
          error:
            err.errors[0].type === 'notNull Violation'
              ? 'Field cannot be null'
              : err.errors[0].message,
        });
        break;
      default:
        res.status(500).json({ error: err });
        break;
    }
  }
};

module.exports = errorHandler;

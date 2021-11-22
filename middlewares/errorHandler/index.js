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
      case 'notFound':
        res.status(404).json({ error: 'Item not found' });
        break;
      default:
        res.status(500).json({ error: err });
        break;
    }
  }
};

module.exports = errorHandler;

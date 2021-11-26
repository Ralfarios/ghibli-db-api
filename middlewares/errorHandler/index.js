const errorHandler = (err, req, res, next) => {
  if (err) {
    switch (err.name) {
      case 'SequelizeValidationError':
        res.status(400).json({
          code: 400,
          message:
            err.errors[0].type === 'notNull Violation'
              ? 'Field cannot be null'
              : err.errors[0].message,
        });
        break;
      case 'notFound':
        res.status(404).json({ code: 404, message: 'Item not found' });
        break;
      default:
        res.status(500).json({ code: 500, message: err });
        break;
    }
  }
};

module.exports = errorHandler;

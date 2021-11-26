class CharacterController {
  static getCharacters(req, res, next) {
    try {
      return res.status(200).json({ message: 'OKE DESU' });
    } catch (err) {
      next(err);
    }
  }

  static getDetailCharacter() {}

  static createCharacter() {}

  static editCharacter() {}

  static deleteCharacter() {
    // Admin only
  }
}

module.exports = CharacterController;

/**
 * ADA REINER
 * ADA RAHARDJA
 * ADA FADLY
 * ADA BAYU
 * ADA BAYU
 * ADA AJI
 * ADA FENDY
 * ADA AKIRA
 */

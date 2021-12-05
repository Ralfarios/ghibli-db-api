const { Character } = require('../models');

const { Op } = require('sequelize');

class CharacterController {
  static async getCharacters(req, res, next) {
    const {
      keyword = '',
      limit = 0,
      page = 0,
      sort = 'char_name', // ('id' || 'char_name' || 'char_jp_name' || 'seiyuu_name' || 'va_name' || 'MovieId')
      sort_order = 'ASC', // ('ASC' || 'DESC')
    } = req.query;
    try {
      const [character, count, total] = await Promise.all([
        Character.findAll({
          attributes: { exclude: ['createdAt', 'updatedAt'] },
          order: [[sort || 'char_name', sort_order || 'ASC']],
          ...(limit && { limit: Number(limit) }),
          where: {
            [Op.or]: [{ char_name: { [Op.iLike]: '%' + keyword + '%' } }],
          },
          offset: !Number(page) ? 0 : Number(limit) * (Number(page) - 1),
        }),
        Character.count({
          where: {
            [Op.or]: [{ char_name: { [Op.iLike]: '%' + keyword + '%' } }],
          },
        }),
        Character.count(),
      ]);

      return res.status(200).json({
        count,
        total,
        limit: Number(limit),
        page: !Number(page) ? 1 : Number(page),
        data: character,
      });
    } catch (err) {
      next(err);
    }
  }

  static async getCharactersByMovieId(req, res, next) {
    try {
      const { id: MovieId } = req.params;

      const character = await Character.findAll({
        attributes: {
          exclude: ['createdAt', 'updatedAt'],
        },
        where: { MovieId },
      });

      return res.status(200).json({ data: character });
    } catch (err) {
      next(err);
    }
  }

  static async getDetailCharacter() {}

  static async createCharacter(req, res, next) {
    try {
      const input = {
        char_name: req.body.char_name,
        char_pic: req.body.char_pic,
        char_jp_name: req.body.char_jp_name,
        seiyuu_name: req.body.seiyuu_name,
        va_name: req.body.va_name,
        MovieId: req.body.MovieId,
      };

      await Character.create(input);

      const msg = { message: 'New character has been created' };

      return res.status(201).json(msg);
    } catch (err) {
      next(err);
    }
  }

  static async editCharacter() {}

  static async deleteCharacter() {}
}

module.exports = CharacterController;

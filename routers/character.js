const router = require('express').Router();

const CharacterController = require('../controllers/character');

router.get('/', CharacterController.getCharacters);
router.post('/', CharacterController.createCharacter);
router.get('/:id', CharacterController.getCharactersByMovieId);

router.get('/:id', CharacterController.getDetailCharacter);
router.put('/:id', CharacterController.editCharacter);

router.delete('/:id', CharacterController.deleteCharacter);

module.exports = router;

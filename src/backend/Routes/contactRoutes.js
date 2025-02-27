import express from 'express';
import {
  getAllContacts,
  getContactById,
  createContact,
  updateContact,
  deleteContact,
  deleteAllContacts
} from '../Controllers/ContactController.js'; 

const router = express.Router();

router.get('/', getAllContacts); 
router.get('/:id', getContactById);
router.post('/', createContact); 
router.put('/:id', updateContact);
router.delete('/:id', deleteContact);
router.delete('/', deleteAllContacts); 

export default router;

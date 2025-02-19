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

router.get('/contacts', getAllContacts);
router.get('/contacts/:id', getContactById);
router.post('/contacts', createContact);
router.put('/contacts/:id', updateContact);
router.delete('/contacts/:id', deleteContact);
router.delete('/contacts', deleteAllContacts);

export default router;

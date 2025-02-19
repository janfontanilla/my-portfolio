import express from 'express';
import contactCtrl from '../Controllers/ContactController.js';

const router = express.Router();

router.get('/api/contacts', contactCtrl.getAllContacts);
router.get('/api/contacts/:id', contactCtrl.getContactById);
router.post('/api/contacts', contactCtrl.createContact);
router.put('/api/contacts/:id', contactCtrl.updateContactById);
router.delete('/api/contacts/:id', contactCtrl.deleteContactById);
router.delete('/api/contacts', contactCtrl.deleteAllContacts);

export default router;

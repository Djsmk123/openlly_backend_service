import express from 'express';
import { authMiddleware } from '../../../middleware/authMiddleware';
import getOneUser from './controller/getOneUser';
import multer from 'multer';
import uploadProfileAvatar from './controller/uploadProfileAvatar';
import { fetchUserInbox } from './controller/fetchUserInbox';
import updateUsername from './controller/updateUsername';
import inboxSeen from './controller/inboxSeen';
import inboxSeenSingle from './controller/inboxSeenSingle';

const user = express.Router();
const upload = multer({ limits: { fileSize: 2000000 } });

user.use(authMiddleware);

user.get('/', getOneUser);
user.get('/inbox', fetchUserInbox);
user.post('/uploadProfileImg', upload.single('file'), uploadProfileAvatar);
user.patch('/updateUsername', updateUsername);
user.get('/inbox/seen',inboxSeen);
user.get('/inbox/seen/:id',inboxSeenSingle);



export default user;

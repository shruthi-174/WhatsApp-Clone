import express from 'express';


import { newConversation, getConversation } from '../controller/ConversationController.js';
import { addUser, getUser } from '../controller/UserController.js';
import { newMessage, getMessage }from '../controller/MessegeController.js';


const route = express.Router();

route.post('/add', addUser);
route.get('/users', getUser);

route.post('/conversation/add', newConversation);
route.post('/conversation/get', getConversation);

route.post('/message/add', newMessage);
route.get('/message/get/:id', getMessage);


export default route;
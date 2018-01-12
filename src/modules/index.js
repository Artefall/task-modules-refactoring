
import './styles/style.css';
import Body from './body.html';

new Body({ // eslint-disable-line no-new
	target: document.body,
})

var outFunc = require('./modules/main')

getUsers(USERS_URL, displayAllUsers);
getUsers(USERS_URL, displayActiveUsers);
getUsers(USERS_URL, displayUsersByAge);
getUsers(USERS_URL, displayUsersByName);
getUsers(USERS_URL, displayLongNameUser);
// outFunc.displayLongNameUser()
// outFunc.filterLongName()
// outFunc.sortByName()
// outFunc.displayUsersByName()
// outFunc.format()
// outFunc.User()
// outFunc.displayUsers()
// outFunc.displayAllUsers()
// outFunc.filterActive()
// outFunc.displayActiveUsers()
// outFunc.displayUsersByAge()
// outFunc.sortByAge()

import './styles/style.css';
import Body from './body.html';

new Body({ // eslint-disable-line no-new
	target: document.body,
})

var outFunc = require('./modules/main')

outFunc.displayLongNameUser()
outFunc.filterLongName()
outFunc.sortByName()
outFunc.displayUsersByName()
outFunc.format()
outFunc.User()
outFunc.displayUsers()
outFunc.displayAllUsers()
outFunc.filterActive()
outFunc.displayActiveUsers()
outFunc.displayUsersByAge()
outFunc.sortByAge()
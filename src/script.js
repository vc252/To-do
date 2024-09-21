import './styles/general.css'
import './styles/header.css'
import './styles/menu.css'
import './styles/main.css'
import './styles/dialog.css'
import ProjectManager from './scripts/projectManager'
import TaskManager from './scripts/taskManager'
import menuUI from './scripts/menuUImanager'
import headUI from './scripts/headerUImanager'
import {TodoDialogManager,ProjectDialogManager} from './scripts/dialogManager'

const taskManager = new TaskManager();
const projectManager = new ProjectManager();
const todoDialog = new TodoDialogManager(taskManager,projectManager);
const projectDialogManager = new ProjectDialogManager(projectManager);
const menu = new menuUI(projectDialogManager);
new headUI(menu,todoDialog);



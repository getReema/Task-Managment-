let listOfProjects=[];
let projectsDrop = document.querySelector('#projects-drop');

let addProject = document.querySelector('#add-project-btn');
addProject.addEventListener('click', addProjectFunction); 
document.querySelector('#projects-drop').addEventListener("change", displayProject);

let addTaskBtn = document.querySelector('#add-task-btn');
addTaskBtn.addEventListener('click', addTask); 



function addProjectFunction(){
  //variables: 
let projectName= document.querySelector('#project-name').value;
let projectManager= document.querySelector('#project-manager').value;
let startDate=document.querySelector('#Start-Date').value;
let endDate=document.querySelector('#End-Date').value;

// add project to list of projects:
let listOfTasks = [];

let project = {
  projectName,
  projectManager,
  startDate,
  endDate,
  listOfTasks,
  totalCost: 0.0
}
listOfProjects.push(project);
console.log(project.projectName);

// add to drop down list 
let entry = document.createElement('option');
entry.textContent=project.projectName;
entry.value = project.projectName;
//
projectsDrop.appendChild(entry);
console.log(listOfProjects);

}


function displayProject(){
// get selected
let currentProject = {};
  let target= projectsDrop.options[projectsDrop.selectedIndex].text; // selected on dropdown
  console.log(target);
  
  // search for the selected project
  for(let i=0; i<listOfProjects.length; i++){
  if (listOfProjects[i].projectName.value = target){
   currentProject= listOfProjects[i];
    console.log(currentProject);
  } //end if
 } //end for
 
displayTask(currentProject);

}

function addTask(){
  let target= projectsDrop.options[projectsDrop.selectedIndex].text; // selected on dropdown
  let currentProject = {};
  // search for the selected project
  for(let i=0; i<listOfProjects.length; i++){
  if (listOfProjects[i].projectName.value = target)
   currentProject= listOfProjects[i];
  }

    //variables: 
  let taskName= document.querySelector('#Task-Name').value;
  let assigned = document.querySelector('#Assigned').value;
  let cost=document.querySelector('#Cost').value;
  
  let task = {
    taskName,
    assigned,
    cost
  }

  currentProject.listOfTasks.push(task);

  displayTask(currentProject);
}//end function



function displayTask(currentProject){

  let table = document.getElementById("taskTable");
  table.innerHTML= "<thead>  <tr>  <th>Task Name</th>  <th>Assigned To</th> <th> Cost</th> </tr> </thead>";
  currentProject.totalCost=0;
  
  for(let i=0; i<currentProject.listOfTasks.length; i++){
    let task = currentProject.listOfTasks[i];
    let row = table.insertRow(1);

    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);

    console.log(task);

    cell1.textContent = task.taskName;
    cell2.textContent = task.assigned;
    cell3.textContent = `${task.cost} $`;
    console.log(currentProject.cost);
    console.log(task.cost);
    currentProject.totalCost = parseFloat(currentProject.totalCost)+ parseFloat(task.cost);
  }//end for 

  // calculate total cost:
  let last = table.insertRow(-1);
  let cell1 = last.insertCell(0);
  let cell2 = last.insertCell(1);

  cell1.textContent =" Total Cost";
  cell2.textContent = `${currentProject.totalCost} $`;
  
}


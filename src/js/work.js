//Creating Element ot put data in
function createItem(project, arr) {
  let div = document.createElement('DIV');
  let img = `<a href="${project.path}"><img src="${project.img}"></a>`;
  let btnLight = `<a href="${
    project.path
  }" class="btn-light"><i class="fas fa-eye"></i> Project</a>`;
  let btnDark = `<a href="${
    project.gitPath
  }" class="btn-dark"><i class="fab fa-github"></i> Github</a>`;
  let noGithub = `<div class="btn-dark">No code preview</div>`;
  div.className = 'item';
  if (project.gitPath != '#') {
    div.innerHTML = img + `<h3>${project.title}</h3>` + btnLight + btnDark;
  } else {
    div.innerHTML = img + `<h3>${project.title}</h3>` + btnLight + noGithub;
  }
  arr.push(div);
}

export { createItem };

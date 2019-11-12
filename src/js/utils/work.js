//Creating Element ot put data in
export const createItem = ({ path, img, gitPath, title }, arr) => {
  const div = document.createElement("DIV");
  const image = createImage(path, img);
  const btnLight = createButton(path, null);
  const btnDark = createButton(null, gitPath);
  const noGithub = `<div class="btn-dark">No code preview</div>`;
  div.className = "item";
  if (gitPath != "#") {
    div.innerHTML = image + `<h3>${title}</h3>` + btnLight + btnDark;
  } else {
    div.innerHTML = image + `<h3>${title}</h3>` + btnLight + noGithub;
  }
  arr.push(div);
};

const createImage = (path, img) => `<a href="${path}"><img src="${img}"></a>`;

const createButton = (path, gitPath) => {
  return path
    ? `<a href="${path}" class="btn-light"><i class="fas fa-eye"></i> Project</a>`
    : `<a href="${gitPath}" class="btn-dark"><i class="fab fa-github"></i> Github</a>`;
};

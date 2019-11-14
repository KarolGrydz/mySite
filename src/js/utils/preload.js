export const createPreload = () => {
  const preload = document.createElement('div');
  preload.className = 'preload';
  preload.innerHTML = `<div class="circles-group">
                        <div class="circle"></div>
                        <div class="circle"></div>
                        <div class="circle"></div>
                        <div class="circle"></div>
                      </div>`;
  return preload;
};

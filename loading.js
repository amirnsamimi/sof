const loadingHandler = () => {
  const loadingEl = document.getElementsByClassName("loading")[0];
    const loadingNumEl = document.getElementsByClassName("loadingNumber")[0];   
  loadingEl.style.display = "flex";
  let loading = 0;
  setInterval(() => {
    if (loading < 100) {
      loading += 10;
      loadingNumEl.innerText = loading + "%"
      if (loading < 100) {
        loadingEl.style.background = `linear-gradient(90deg, black 0, black ${loading}%, white 0 )`;
        
      } else if (loading === 100) {
        loadingEl.style.background = `linear-gradient(90deg, green 0, green ${loading}%, green 0 )`;
      }
    }
  }, 500);
};

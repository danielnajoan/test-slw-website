const LoadInstagramApi = (callback) => {
  const existingScript = document.getElementById("IGApi");
  if (!existingScript) {
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    script.id = "IGApi";
    document.body.appendChild(script);
    script.onload = () => {
      if (callback) callback();
    };
  }
  if (existingScript && callback) callback();
};
export default LoadInstagramApi;

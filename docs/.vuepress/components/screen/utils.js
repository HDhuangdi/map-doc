export const resolveImage = (src) =>
  new Promise((resolve) => {
    const image = new Image();
    image.src = src;
    image.onload = () => resolve({ image, src });
  });

  export const resolveImages = async (resources) => {
    const promiseArr = new Array(resources.length);
    resources.forEach((src, index) => {
      promiseArr[index] = resolveImage(src);
    });
  
    const resArr = await Promise.all(promiseArr);
    return resArr.map(item => item.image)
  };

export function adapteSize(dom, dom1, screenWidth = 1920, screenHeight = 1080) {
  const width = screenWidth;
  const height = screenHeight;
  const resizeFun = () => {
    const bodyStyle = dom
      ? dom.style
      : document.getElementsByTagName("body")[0].style;
    bodyStyle.margin = "0px";
    bodyStyle.width = `${width}px`;
    bodyStyle.height = `${height}px`;
    bodyStyle["transform-origin"] = "left top";
    bodyStyle.transform = `translateZ(0) scale(${window.innerWidth / width}, ${
      window.innerHeight / height
    })`;
    bodyStyle.overflow = "hidden";
    if (dom1) {
      const dom1Style = dom1.style;
      dom1Style.width = `${width}px`;
      dom1Style.transform = `translateZ(0) scale(${
        window.innerWidth / width
      }, ${window.innerHeight / height})`;
      dom1Style["transform-origin"] = "left top";
    }
  };
  resizeFun();

  window.addEventListener(
    "resize",
    () => {
      resizeFun();
    },
    true
  );
}

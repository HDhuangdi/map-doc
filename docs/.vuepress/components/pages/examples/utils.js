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

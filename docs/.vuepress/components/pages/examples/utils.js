export const resolveImage = (src) =>
  new Promise((resolve) => {
    const image = new Image();
    image.src = src;
    image.onload = () => resolve({ image, src });
  });

export const resolveImages = async (resources) => {
  const promiseArr = new Array(resources.length);
  const texMap = new Map();
  resources.forEach((src, index) => {
    promiseArr[index] = resolveImage(src);
    texMap.set(src, "");
  });

  const resArr = await Promise.all(promiseArr);
  resArr.forEach((res) => {
    texMap.set(res.src, res.image);
  });
  const imagesArr = [];
  for (const src of texMap.keys()) {
    const image = texMap.get(src);
    imagesArr.push(image);
  }
  return imagesArr;
};

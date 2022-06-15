/* eslint-disable no-await-in-loop */
import * as pdfjs from "pdfjs-dist/legacy/build/pdf";
import pdfjsWorker from "pdfjs-dist/legacy/build/pdf.worker.entry";

pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;

const readFileData = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target !== null) {
        resolve(e.target.result);
      }
      reject();
    };
    reader.onerror = (err) => {
      reject(err);
    };
    reader.readAsDataURL(file);
  });

const convertPdfToImages = async (file) => {
  const images = [];
  const data = await readFileData(file);
  const pdf = await pdfjs.getDocument(data).promise;
  const canvas = document.createElement("canvas");
  for (let i = 0; i < pdf.numPages; i += 1) {
    const page = await pdf.getPage(i + 1);
    const viewport = page.getViewport({ scale: 1.5 });
    const context = canvas.getContext("2d");
    canvas.height = viewport.height;
    canvas.width = viewport.width;
    await page.render({ canvasContext: context, viewport }).promise;
    images.push(canvas.toDataURL("image/jpg"));
  }
  canvas.remove();
  return images;
};

const utils = { convertPdfToImages };

export default utils;

// getting inputs for values and dom manipulation 

const fileInput = document.querySelector('#file-upload');
const heightInput = document.querySelector('#height-input');
const widthInput = document.querySelector('#width-input');
const aspectInput = document.querySelector('#checkbox-input');
const canvas = document.querySelector('#resizer-canvas');
const submitBtn = document.querySelector('#submit');
const downloadBtn = document.querySelector('#download');

// this is to draw inside the canvas html element
const canvasContext = canvas.getContext('2d');


let activeImage, originalwidthToHeightRatio;


// to get the input image url using FileReader method
fileInput.addEventListener('change',(e)=>{
    const reader = new FileReader();

    reader.addEventListener('load',()=>{
        openImage(reader.result)
        // console.log(reader.result)
    })

      reader.readAsDataURL(e.target.files[0]);

});

//for button to resize the image
submitBtn.addEventListener('click',()=>{

        if(!activeImage){
            return
         }else{
        const heightValue = aspectInput.checked ? widthInput.value / originalwidthToHeightRatio : heightInput.value ;
        resize(widthInput.value, heightValue);
        const widthValue = aspectInput.checked ? heightInput.value / originalwidthToHeightRatio : widthInput.value ;
        resize(widthValue, heightInput.value);}
  

});


// function for downloading image using a button 

// downloadBtn.addEventListener('click',(e)=>{
//         e.preventDefault();
//         downloadBtn.innerText = "Downloading File..."
//         fetchFile(activeImage.src)
// });

// function fetchFile(url){
//     fetch(url).then(res=> res.blob()).then(file=>{
//         let tempUrl = URL.createObjectURL(file);
//         let aTag = document.createElement('a');
//         aTag.href = tempUrl;
//         aTag.download = url.replace(/^.*[\\\/]/,'');
//         document.body.appendChild(aTag);
//         aTag.click();
//         aTag.remove();
//         URL.revokeObjectURL(tempUrl);
//         downloadBtn.innerText = 'Download File';
//     })
// }


function openImage(imageSrc){
            activeImage = new Image();
            activeImage.addEventListener('load',()=>{
                originalwidthToHeightRatio = activeImage.width / activeImage.height ;

                resize(activeImage.width, activeImage.height);
            })
            activeImage.src = imageSrc;
            
}

// function for resizing the image with required values
function resize(width,height){
    canvas.width = Math.floor(width);
    canvas.height = Math.floor(height);

    widthInput.value = Math.floor(width);
    heightInput.value = Math.floor(height);

    canvasContext.drawImage(activeImage,0,0,width, height);
}



























// widthInput.addEventListener('change',()=>{
//     if(!activeImage){
//         return
//     }
//     const heightValue = aspectInput.checked ? widthInput.value / originalwidthToHeightRatio : heightInput.value ;
//     resize(widthInput.value, heightValue);
// });
// heightInput.addEventListener('change',()=>{
//     if(!activeImage){
//         return
//     }
//     const widthValue = aspectInput.checked ? heightInput.value / originalwidthToHeightRatio : widthInput.value ;
//     resize(widthValue, heightInput.value);
// });































































































// // }


// imageInput.addEventListener('change',function(e){
//     if(e.target.files){
//         let imgFile = e.target.files[0];
//         let reader = new FileReader();
//         reader.onload = function(e){
//             let image = document.createElement('img');
//                 image.onload = function(event){

//                     let canvas = document.createElement('canvas');

//                     let ctx = canvas.getContext('2d');

//                     ctx.drawImage(image,0,0,200,200);
                     
//                     let dataUrl = canvas.toDataURL(imgFile.type);
//                     document.getElementById('preview').src = dataUrl ;
//                 }
//                 image.src = e.target.result;
//             }
//             reader.readAsDataURL(imgFile);
//     }
   
//     });
   



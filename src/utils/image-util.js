function getImageURL(imageName){
    return new URL(`../assets/images/${imageName}`, import.meta.url).href
}

function getTeacherImgURL(imageName){
    return new URL(`../assets/img_teachers/${imageName}`, import.meta.url).href
}

function getAreasImgURL(imageName){
    return new URL(`../assets/img_explore_areas/${imageName}`, import.meta.url).href
}

function getPaymentImgURL(imageName){
    return new URL(`../assets/img_payment/${imageName}`, import.meta.url).href
}

function getAboutImgURL(imageName){
    return new URL(`../assets/img_about/${imageName}`, import.meta.url).href
}

function getDividerImgURL(imageName){
    return new URL(`../assets/img_dividers/${imageName}`, import.meta.url).href
}

function getBooksImgURL(imageName){
    return new URL(`../assets/img_books/${imageName}`, import.meta.url).href
}

export {getImageURL,getTeacherImgURL,getAreasImgURL,getPaymentImgURL,getAboutImgURL,getDividerImgURL,getBooksImgURL};

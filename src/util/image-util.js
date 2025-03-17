function getImageURL(imageName){
    return new URL(`../assets/images/${imageName}`, import.meta.url).href
}

export {getImageURL};
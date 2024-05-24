const music = ["rock", "pop", "hip-hop", "electronic"];

function myFavoriteMusic(music) {
  // write your code
    music.forEach(function(item, index, array){
            console.log(`My favorite music is ${item} choosing from ${array}`)
        }
    )
}
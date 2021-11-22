// POLINDRUM ADALAH KATA YANG PENGUCAPANYA SAMA KETIKA DIBACA DARI DEPAN MAUPUN DARI BELAKANG

function polindrume(str) {
    let reversed = str.split("").reverse().join("") //pisahkan semua huruf dari inputan str lalu dibalik dan di satukan lagi
    // console.log(reversed)
    if(reversed === str){ // jika nilai dari variabel reversed sama dengan nilai str berarti polindrum
        // return true
        console.log("Kata tersebut Polindrum");
    }else { // jika tidak sama berarti bukan polindrum
        // return false;
        console.log("Kata tersebut bukan Polindrum");
    }
}

polindrume("aaaaaaaa");
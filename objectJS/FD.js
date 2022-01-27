function person(nama, kelas, favColor, jurusan, hobby, alamat){
    const myFD={}
    myFD.nama=nama
    myFD.kelas=kelas
    myFD.favColor=favColor
    myFD.jurusan=jurusan
    myFD.hobby=hobby
    myFD.alamat=alamat
    return myFD
}
const myFD1=person("hii namaku noni sonia panggil aku non", "kelas 11", "favcolorku pink blue", "aku masuk jurusan RPL", "Hobbyku membaca novel", "aku tinggal desa margahurip")
console.log(myFD1)
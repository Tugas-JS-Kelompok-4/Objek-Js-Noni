const person={
    nama:"hai namaku noni sonia",
    sekolah:"aku sekolah di smk yadika soreang kelas",
    kelas:11,
    hobby:"hobbyku membaca",
    perkenalan: function(){
        return this.nama + " " + this.sekolah + " " + this.kelas + " " + this.hobby;
    },
};
console.log(person.perkenalan());
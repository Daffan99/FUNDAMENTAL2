class Karyawan {
    constructor(nama) {
      this.nama = nama;
      this.jam_kerja = 0;
      this.gaji_per_jam = 0;
    }
  
    tambah_jam_kerja(jam) {
      this.jam_kerja += jam;
    }
  
    hitung_gaji() {
      const gaji = this.jam_kerja * this.gaji_per_jam;
      return gaji;
    }
  }
  
  class KaryawanPenuhWaktu extends Karyawan {
    constructor(nama) {
      super(nama);
      this.gaji_per_jam = 100000;
    }
  
    hitung_gaji() {
      let gaji;
      if (this.jam_kerja > 6) {
        gaji = 6 * this.gaji_per_jam + (this.jam_kerja - 6) * 75000;
      } else {
        gaji = this.jam_kerja * this.gaji_per_jam;
      }
      return gaji;
    }
  }
  
  class KaryawanParuhWaktu extends Karyawan {
    constructor(nama) {
      super(nama);
      this.gaji_per_jam = 50000;
    }
  
    hitung_gaji() {
      let gaji;
      if (this.jam_kerja > 6) {
        gaji = 6 * this.gaji_per_jam + (this.jam_kerja - 6) * 30000;
      } else {
        gaji = this.jam_kerja * this.gaji_per_jam;
      }
      return gaji;
    }
  }


const karyawan1 = new KaryawanPenuhWaktu("Budi");
karyawan1.tambah_jam_kerja(8);
console.log(`Gaji ${karyawan1.nama} ini gajimu tidak usah kerja di sini lagi Rp${karyawan1.hitung_gaji()}`);

const karyawan2 = new KaryawanParuhWaktu("Siti");
karyawan2.tambah_jam_kerja(5);
console.log(`Gaji ${karyawan2.nama} ini gajimu tidak usah kerja di sini lagi Rp${karyawan2.hitung_gaji()}`);




  class shoothingGame{
    constructor(player1,player2){
        this.player1 = player1;
        this.player2 = player2;
    }
    getRandomItem(){
      const randomHealth = Math.random() <0.5 ? 0 : 10;
      const randomPower = Math.random()  < 0.5 ? 0 : 10;
  
      return{health: randomHealth,power : randomPower};
    }
  }

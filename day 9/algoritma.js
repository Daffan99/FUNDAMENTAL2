//membuat function s dan t
// mencari panjang leng 
// menggunakan if 

function isAnagram(s, t) {
    // Jika panjang string s dan t berbeda, maka t bukan anagram dari s
    if (s.length !== t.length) {
      return false;
    }
    
    // Menggunakan objek untuk menghitung jumlah kemunculan setiap karakter dalam string s
    const sCounts = {};
    for (let i = 0; i < s.length; i++) {
      const char = s[i];
      sCounts[char] = sCounts[char] ? sCounts[char] + 1 : 1;
    }
    
    // Membandingkan jumlah kemunculan setiap karakter dalam string t dengan jumlah kemunculan dalam string s
    for (let i = 0; i < t.length; i++) {
      const char = t[i];
      if (!sCounts[char]) {
        return false;
      }
      sCounts[char]--;
    }
    
    return true;
  }
  


console.log(isAnagram("anagram", "nagaram")); // true
console.log(isAnagram("tikus", "mobil")); // false

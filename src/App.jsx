import React, { useState } from 'react';
import './App.css';

const khodamList = [
  "Pager Besi",
  "Sendok Plastik",
  "Kipas Angin",
  "Ban Bekas",
  "Sandal Jepit",
  "Bh Mia Khalifa",
  "Kaos Oblong Jokowi",
  "Hello Kitty",
  "SpongeBob SquarePants",
  "Gitar Justin Bieber",
  "Kucing Oren",
  "Pinguin",
  "Kecoa",
  "Tikus",
  "Sapi",
  "babi",
  "kambing",
  "termos",
  "kursi",
  "meja",
  "Garam Dapur"
];

function App() {
  const [nama, setNama] = useState("");
  const [result, setResult] = useState("");

  const pilihKhodam = (event) => {
      event.preventDefault();
      if (nama) {
          const randomIndex = Math.floor(Math.random() * khodamList.length);
          const khodamTerpilih = khodamList[randomIndex];
          setResult(`Nama Anda adalah ${nama} dan khodam pilihan Anda adalah ${khodamTerpilih}.`);
      } else {
          setResult("Nama tidak boleh kosong.");
      }
  };

  return (
      <div className="container">
          <h1>Check Khodam Online</h1>
          <form id="khodamForm" onSubmit={pilihKhodam}>
              <input
                  type="text"
                  id="nama"
                  placeholder="Masukkan Nama Anda"
                  value={nama}
                  onChange={(e) => setNama(e.target.value)}
                  required
              />
              <button type="submit">Cek Khodam</button>
          </form>
          <div className="result" id="result">{result}</div>
          <div className="copyright">
              <p>Made By | Fizm</p>
          </div>
      </div>
  );
}

export default App;
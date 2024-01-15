import express  from "express"
import { kelilingLingkaran, kelilingPersegi, kelngPersegiPanjang, luasLingkaran, luasPersegi, luasPersegiPanjang, luasSegitiga } from "../controller/bangunDatar"
const app = express()

/** allow read a body */
app.use(express.json())

/** fungsi use() digunakan untuk menerapkan sebuah fugsi pada object express
 * fungsi tersebut akan otomatis akan dijalankan
 */

app.post(`/lingkaran/luas`, luasLingkaran)
app.post(`/lingkaran/keliling`, kelilingLingkaran)
app.post(`/persegi/luas`, luasPersegi)
app.post(`/persegi/keliling`, kelilingPersegi)
app.post(`/PersegiPanjang/luas`, luasPersegiPanjang)
app.post(`/PersegiPanjang/keliling`, kelngPersegiPanjang)
app.post(`/segitiga/luas`, luasSegitiga)

export default app
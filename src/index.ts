// 04-01-2024
// ini adalah file utama dimana ada proses menjalankan server backend
//menyiapkan server
// 1. memanggil library express
import express, { Request, Response } from "express"
import { validateCube } from "./middlewer/validateCube"
import routeBangunDatar from "./route/bangunDatar"
import routeBangunRuang from "./route/bangunRuang"

// 2. create wadah untuk inisasi express
const app = express()

//3. mendefinisikan PORT berjalannya server 
const PORT = 8000

//5. allow to read JSON as request
app.use(express.json())

//5. porses pertama untuk handle request
app.get(`/serena`, (request: Request, response: Response) => {
    // ini adalah proses handle request dengan 
    //url/address: https://locallhost:8000/serena/
    // method: GET  
    // memberi response 
    return response.status(200).json({
        massage: `Hello Serena anaknya Bu Siana`
    })
})

//1. read a query request
app.get(`/moklet`, (request: Request, response: Response) => {
    //asumsikan data yang dikirim adalah nama dan umur
    let nama: any = request.query.nama?.toString()
    let umur: any = request.query.umur?.toString()
    let massage: string = `My name is ${nama} and i'm ${umur} yeaars old`
    return response.status(200).json(massage)
})

//2. read data request from parameter
app.get(`/telkom/:nama/:gender`,(request: Request, response: Response) => {
    let nama: string = request.params.nama
    let gender: string = request.params.gender
    let massage: string = `My name is ${nama} and i'm ${gender}`
    return response.status(200).json(massage)
})

//3. read a request from body
app.post(`/moklet`, (request: Request, response: Response) => {
    //asumsikan data yang dikirim adalah panjang dan lebar
    let panjang: number = request.body.panjang
    let lebar: number = request.body.lebar
    let luasPersegiPanjang: number = panjang * lebar
    let massage = `Luas persegi panjang adalah ${luasPersegiPanjang}`
    return response.status(200).json(massage)
})


//buatlah sebuah request untuk mengonversi suhu celcius ke farenheit, kelvin dan reamur 
//menggunakan request parameter 
//exp: http://localhost:8000/celcius/80
//(80 adalah nilai celciusnya)

app.get(`/celcius/:celcius`, (request: Request, response: Response) => {
    let celcius: number = Number(request.params.celcius)
    let celKefarenheit : number = (9/5) * celcius + 32
    let celKeKelvin: number = celcius + 273
    let celKeReamur: number = (4/5)*celcius
    let massage1 = `Celcius: ${celcius}`
    let massage2 = `Farenheit: ${celKefarenheit}`
    let massage3 = `Kelvin: ${celKeKelvin}`
    let massage4 = `Reamur: ${celKeReamur}`
    return response.status(200).json({massage1,massage2, massage3, massage4})
})

/** create request for count volume of long cube*/ 
app.post(`/balok`, validateCube, (request: Request, response: Response) => {
    /** read panjang, lebar, tinggi */
    let panjang: number = Number(request.body.panjang)
    let lebar: number = Number(request.body.lebar)
    let tinggi: number = Number(request.body.tinggi)

    let volume: number = panjang * lebar * tinggi
    return response.status(200).json({
        panjang, lebar, tinggi, volume
    })
})

/** register route of bangun datar */
app.use(routeBangunDatar)
app.use(routeBangunRuang)

//4. running server
app.listen (PORT, () => {
    console.log(`server running on port ${PORT}`);
})
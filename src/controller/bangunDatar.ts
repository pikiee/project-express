import { Request, Response } from "express";

/** const atau let digunakan untuk mendeklarasikan
 * sebuah variable, object, array, function */
const luasLingkaran = (request: Request, response: Response ) => {
    try {
        const phi = Math.PI
        const r : number = Number(request.body.r)
        const luas = phi * r * r
        return response.status(200)
        .json({
            status: true,
            r,
            luas
        })
    } catch (error) {
        return response.status(500)
        .json({
            status: false,
            massage: error
        })
    }
}

const kelilingLingkaran = (request: Request, response: Response ) => {
    try {
        const phi = Math.PI
        const r : number = Number(request.body.r)
        const keliling = 2 * phi * r 
        return response.status(200)
        .json({
            status: true,
            r,
            keliling
        })
    } catch (error) {
        return response.status(500)
        .json({
            status: false,
            massage: error
        })
    }
}

const luasPersegi = (request: Request, response: Response ) => {
    try {
        const s : number = Number(request.body.s)
        const luas = s*s 
        return response.status(200)
        .json({
            status: true,
            s,
            luas
        })
    } catch (error) {
        return response.status(500)
        .json({
            status: false,
            massage: error
        })
    }
}

const kelilingPersegi = (request: Request, response: Response ) => {
    try {
        const s : number = Number(request.body.s)
        const keliling = 4*s 
        return response.status(200)
        .json({
            status: true,
            s,
            keliling
        })
    } catch (error) {
        return response.status(500)
        .json({
            status: false,
            massage: error
        })
    }
}

const luasPersegiPanjang = (request: Request, response: Response ) => {
    try {
        const p : number = Number(request.body.p)
        const l : number = Number(request.body.l)
        const luas = p*l 
        return response.status(200)
        .json({
            status: true,
            p,
            l,
            luas
        })
    } catch (error) {
        return response.status(500)
        .json({
            status: false,
            massage: error
        })
    }
}

const kelngPersegiPanjang = (request: Request, response: Response ) => {
    try {
        const p : number = Number(request.body.p)
        const l : number = Number(request.body.l)
        const keliling = (2*p)+(2*l)
        return response.status(200)
        .json({
            status: true,
            p,
            l,
            keliling
        })
    } catch (error) {
        return response.status(500)
        .json({
            status: false,
            massage: error
        })
    }
}

const luasSegitiga = (request: Request, response: Response ) => {
    try {
        const alas : number = Number(request.body.alas)
        const tinggi : number = Number(request.body.l)
        const luas = 1/2 * alas * tinggi
        return response.status(200)
        .json({
            status: true,
            alas,
            tinggi,
            luas
        })
    } catch (error) {
        return response.status(500)
        .json({
            status: false,
            massage: error
        })
    }
}

export {
    luasLingkaran,
    kelilingLingkaran, 
    luasPersegi, 
    kelilingPersegi, 
    luasPersegiPanjang, 
    kelngPersegiPanjang,
    luasSegitiga 
}
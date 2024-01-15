import { Request, Response } from "express";

const volumeTabung = (request: Request, response: Response ) => {
    try {
        const phi = Math.PI
        const r : number = Number(request.body.r)
        const t : number = Number(request.body.t)
        const volume = phi * r * r * t
        return response.status(200)
        .json({
            status: true,
            r,
            t,
            volume
        })
    } catch (error) {
        return response.status(500)
        .json({
            status: false,
            massage: error
        })
    }
}
const LPTabung = (request: Request, response: Response ) => {
    try {
        const phi = Math.PI
        const r : number = Number(request.body.r)
        const t : number = Number(request.body.t)
        const LP = 2 * phi * r * (r+t)
        return response.status(200)
        .json({
            status: true,
            r,
            t,
            LP
        })
    } catch (error) {
        return response.status(500)
        .json({
            status: false,
            massage: error
        })
    }
}
const volumeKubus = (request: Request, response: Response ) => {
    try {
        const s : number = Number(request.body.s)
        const volume = s * s * s
        return response.status(200)
        .json({
            status: true,
            s,
            volume
        })
    } catch (error) {
        return response.status(500)
        .json({
            status: false,
            massage: error
        })
    }
}
const LPKubus = (request: Request, response: Response ) => {
    try {
        const s : number = Number(request.body.s)
        const LP = 6 * s * s
        return response.status(200)
        .json({
            status: true,
            s,
            LP
        })
    } catch (error) {
        return response.status(500)
        .json({
            status: false,
            massage: error
        })
    }
}
const volumeBalok = (request: Request, response: Response ) => {
    try {
        const p : number = Number(request.body.p)
        const l : number = Number(request.body.l)
        const t : number = Number(request.body.t)
        const volume = p * l * t
        return response.status(200)
        .json({
            status: true,
            p,
            l,
            t,
            volume
        })
    } catch (error) {
        return response.status(500)
        .json({
            status: false,
            massage: error
        })
    }
}
const LPBalok = (request: Request, response: Response ) => {
    try {
        const p : number = Number(request.body.p)
        const l : number = Number(request.body.l)
        const t : number = Number(request.body.t)
        const LP = 2 * (p * l) + (p * t) + (l * t)  
        return response.status(200)
        .json({
            status: true,
            p,
            l,
            t,
            LP
        })
    } catch (error) {
        return response.status(500)
        .json({
            status: false,
            massage: error
        })
    }
}
const volumeBola = (request: Request, response: Response ) => {
    try {
        const phi = Math.PI
        const r : number = Number(request.body.r)
        const volume = 4/3 * phi * r * r * r  
        return response.status(200)
        .json({
            status: true,
            r,
            volume
        })
    } catch (error) {
        return response.status(500)
        .json({
            status: false,
            massage: error
        })
    }
}
const LPBola = (request: Request, response: Response ) => {
    try {
        const phi = Math.PI
        const r : number = Number(request.body.r)
        const LP = 4 * phi * r * r 
        return response.status(200)
        .json({
            status: true,
            r,
            LP
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
    volumeTabung,
    LPTabung,
    volumeKubus,
    LPKubus,
    volumeBalok,
    LPBalok,
    volumeBola,
    LPBola
}






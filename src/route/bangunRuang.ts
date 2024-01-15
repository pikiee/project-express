import express  from "express"
import { LPBalok, LPBola, LPKubus, LPTabung, volumeBalok, volumeBola, volumeKubus, volumeTabung } from "../controller/bangunRuang"
const app = express()
app.use(express.json())

app.post(`/tabung/volume`, volumeTabung)
app.post(`/tabung/luasPermukaan`, LPTabung)
app.post(`/kubus/volume`, volumeKubus)
app.post(`/kubus/luasPermukaan`, LPKubus)
app.post(`/balok/volume`, volumeBalok)
app.post(`/balok/luasPermukaan`, LPBalok)
app.post(`/bola/volume`, volumeBola)
app.post(`/bola/luasPermukaan`, LPBola)

export default app
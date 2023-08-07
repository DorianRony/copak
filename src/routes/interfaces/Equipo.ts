export interface Equipo {
    id: string;
    name: string;
    descripcion: string;
    partidosJugados: number;
    partidosGanados: number;
    partidosEmpatados: number;
    partidosPerdidos: number;
    golesAFavor: number;
    golesEnContra: number;
    diferenciaDeGoles: number;
    puntos: number;
    img: string;
}
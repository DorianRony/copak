export interface Partido {
    id: string;
    equipo_local: string;
    equipo_visitante: string;
    fecha: string;
    lugar: string;
    cancha: string;
    hora: string;
    goles_local: number;
    goles_visitante: number;
    resultado: string;
    fase: string;
    cuotaLocal: string;
    cuotaVisitante: string;
    cuotaMas5Goles: string;
}
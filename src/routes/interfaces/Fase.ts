export interface Fase {
    id: string;
    name: string;
}

export type FaseContextValue = {
    fases: Fase[];
    actualizarFase: (nuevasFase: Fase[]) => void;
}
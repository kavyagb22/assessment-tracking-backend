export interface Assessment {
    id: number;
    candidateName: string;
    title: string;
    date: string;
    status: string;
    score: number | null;
}
import http from 'k6/http';
import { Counter, Gauge, Rate, Trend } from 'k6/metrics';

export const options = {
    vus: 1,
    duration: '3s'
}

const chamadas = new Counter('quantity_of_calls');
const latencia = new Gauge('tempo_bloqueio_ms');
const myRate = new Rate('taxa_status_200');
const myTrend = new Trend('taxa_de_espera');
export default function() {
    const res = http.get('https://test.k6.io');
    //Contador de chamadas
    chamadas.add(1);
    //Tempo de bloqueio
    latencia.add(res.timings.blocked);
    //Taxa de chamadas 200
    myRate.add(res.status === 200);
    //Taxa de espera
    myTrend.add(res.timings.waiting);
}

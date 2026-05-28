//1. Iniciar
import sleep from 'k6';

//2. Configurar
export const options = {
    vus: 1,
    duration: '10s'
}

//3. Executar
export default function() {
    console.log('Hello World!');
    sleep(1);
}

//4. Desmontagem
export function teardown(data) {
    console.log('Teardown', data);
}
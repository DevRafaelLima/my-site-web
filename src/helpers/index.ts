import { decode } from 'jwt-simple'
function getAutozitation() {
    let token = getCookie('token');
    if (token && process.env.NEXT_PUBLIC_JWT_SECRET) {
        let dates = decode(token, process.env.NEXT_PUBLIC_JWT_SECRET);
        return dates;
    }
    return null;
}
function getCookie(name: string) {
    const nameCookie = name + "=";
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i];
        while (cookie.charAt(0) === ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(nameCookie) === 0) {
            return cookie.substring(nameCookie.length, cookie.length);
        }
    }
    return "";
}

function formatCNPJ(cnpj: string) {
    // Remove caracteres não numéricos
    cnpj = cnpj.replace(/[^\d]/g, '');

    // Formata o CNPJ (XX.XXX.XXX/XXXX-XX)
    return cnpj.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, '$1.$2.$3/$4-$5');
}

function formatCPF(cpf: string) {
    // Verifica se o CPF tem a quantidade correta de dígitos
    if (cpf.length !== 11) {
        throw new Error('O CPF deve ter 11 dígitos.');
    }

    // Adiciona as pontuações ao CPF
    const cpfFormated = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    return cpfFormated;
}

function formatDateToBR(dateString: string) {
    // Cria um objeto Date com a string de data fornecida
    const date = new Date(dateString);

    // Obtém o dia, mês e ano
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // O mês começa do zero, por isso é necessário adicionar 1
    const yaer = date.getFullYear();

    // Retorna a data formatada
    return `${day}/${month}/${yaer}`;
}

function convertToTypeDate(dateString: string): Date | null {
    const [day, month, year] = dateString.split('/').map(Number);

    // Verifica se os componentes da data são números válidos
    if (isNaN(day) || isNaN(month) || isNaN(year)) {
        return null;
    }

    // Mês no construtor de Date é 0-indexed, então subtraímos 1 do mês
    const dateObject = new Date(year, month - 1, day);

    // Verifica se a data é válida após a conversão
    if (
        dateObject.getDate() === day &&
        dateObject.getMonth() === month - 1 &&
        dateObject.getFullYear() === year
    ) {
        return dateObject;
    }

    return null;
}

function toNumbers(number: string) {
    return number.replace(/\D/g, '')
}

function formatDate(date: string) {
    const dateObj = new Date(date)
    return `${dateObj.getFullYear()}-${dateObj.getMonth() + 1}-${dateObj.getDate()}`
}

function formatNumberCll(numero: string) {
    // Verifica se o número é válido
    if (typeof numero !== 'string' || isNaN(Number(numero)) || numero.length !== 11) {
        console.error('Número de celular inválido.');
        return numero;
    }

    // Aplica a máscara
    const cod = numero.substring(0, 2);
    const part1 = numero.substring(2, 3);
    const part2 = numero.substring(3, 7);
    const part3 = numero.substring(7, 11);

    const numberFormat = `(${cod}) ${part1} ${part2}-${part3}`;
    return numberFormat;
}

function identityType(input: string): string {
    const cleanInput = input.replace(/\D/g, '');

    if (cleanInput.length === 14) {
        return 'cnpj'
    } else {
        return 'nome'
    }
}

export {
    getCookie,
    formatCNPJ,
    formatDate,
    toNumbers,
    formatCPF,
    formatDateToBR,
    convertToTypeDate,
    getAutozitation,
    formatNumberCll,
    identityType
}
import React from 'react'

const teams = [
    {
        name: 'Minisiatkówka',
        age: '6-10',
        hours: '16:30 - 17:00',
        days: 'Wtorki i Czwartki',
        description: {
            headline: 'Szkolenie podstawowe zaczyna się od zajęć mini siatkówki w formie zabawowej',
            paragraph: 'W nastepnym etapie szkolenia zawodniczego oprocz rozwijania sprawnosci ogolnej wprowadza sie elementy sprawnosci specjalnej - techniki i taktyki gry. \n\n Na tym etapie szkolenia wprowadzamy zawodnikow do rywalizacji sportowej przystępując o rozgrywek ligowych w kategori młodzika.'
        },
        netSizing: {
            className: 'small',
            unit: '1.5m'
        }
    },
    {
        name: 'Młodzicy',
        age: '11-13',
        hours: '17:30 - 19:00',
        days: 'Środy i Piątki',
        description: {
            headline: 'Koniec zabawy. Pora grać.',
            paragraph: 'W nastepnym etapie szkolenia zawodniczego oprocz rozwijania sprawnosci ogolnej wprowadza sie elementy sprawnosci specjalnej - techniki i taktyki gry. \n\n Na tym etapie szkolenia wprowadzamy zawodnikow do rywalizacji sportowej przystępując o rozgrywek ligowych w kategori młodzika.'
        },
        netSizing: {
            className: 'medium',
            unit: '1.6m'
        }
    },
    {
        name: 'Kadeci',
        age: '14-16',
        hours: '19:30 - 21:00',
        days: 'Soboty i Wielkanoce',
        description: {
            headline: <span>Pobiegali? <br/>To teraz prawdziwa siatkówka.</span>,
            paragraph: 'W nastepnym etapie szkolenia zawodniczego oprocz rozwijania sprawnosci ogolnej wprowadza sie elementy sprawnosci specjalnej - techniki i taktyki gry. \n\n Na tym etapie szkolenia wprowadzamy zawodnikow do rywalizacji sportowej przystępując o rozgrywek ligowych w kategori młodzika.'
        },
        netSizing: {
            className: 'big',
            unit: '1.7m'
        }
    },
    {
        name: 'Juniorzy',
        age: '17-24',
        hours: '21:30 - 23:00',
        days: 'Poniedziałki i Walentynki',
        description: {
            headline: <span>Szkolna miłośc się skończyła? <br/>Miłość do siatkowki nie umiera nigdy.</span>,
            paragraph: 'W nastepnym etapie szkolenia zawodniczego oprocz rozwijania sprawnosci ogolnej wprowadza sie elementy sprawnosci specjalnej - techniki i taktyki gry. \n\n Na tym etapie szkolenia wprowadzamy zawodnikow do rywalizacji sportowej przystępując o rozgrywek ligowych w kategori młodzika.'
        },
        netSizing: {
            className: 'large',
            unit: '2m'
        }
    },
    {
        name: 'Seniorzy',
        age: '25-50+',
        hours: '23:30 - 01:00',
        days: 'Soboty i Niedziele',
        description: {
            headline: 'Człowiek wolniej się starzeje grając w siatkówkę',
            paragraph: 'W nastepnym etapie szkolenia zawodniczego oprocz rozwijania sprawnosci ogolnej wprowadza sie elementy sprawnosci specjalnej - techniki i taktyki gry. \n\n Na tym etapie szkolenia wprowadzamy zawodnikow do rywalizacji sportowej przystępując o rozgrywek ligowych w kategori młodzika.'
        },
        netSizing: {
            className: 'extra-large',
            unit: '2.3m'
        }
    }
];

export default teams;
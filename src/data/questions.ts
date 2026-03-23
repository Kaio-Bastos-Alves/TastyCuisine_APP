export  interface Option {
  id: string;
  text: string;
}

export interface Question {
  id: string;
  question: string;
  options: Option[];
}

export  const QUESTIONS: Question[] = [
    {
        id: 'q1',
        question: 'Quais tipos de culinaria voce mais aprecia?',
        options: [
            {id: 'opt1_1', text: 'Italiana' },
            {id: 'opt1_2', text: 'Japonesa' },
            {id: 'opt1_3', text: 'Mexicana' },
            {id: 'opt1_4', text: 'Brasileira' },
            {id: 'opt1_5', text: 'Indiana' },
            {id: 'opt1_6', text: 'Francesa' },
            {id: 'opt1_7', text: 'Tailandesa' },
            {id: 'opt1_8', text: 'Chinesa' },
            {id: 'opt1_9', text: 'Americana' },
            {id: 'opt1_10', text: 'Mediterrânea' },

        ],
    },



     {
        id: 'q2',
        question: 'Você tem alguma restrição alimentar ou preferência específica?',
        options: [
            {id: 'opt2_1', text: 'Vegetariano' },
            {id: 'opt2_2', text: 'Vegano' },
            {id: 'opt2_3', text: 'Sem Glúten' },
            {id: 'opt2_4', text: 'Sem Lactose' },
            {id: 'opt2_5', text: 'Diabético' },
            {id: 'opt2_7', text: 'Oleaginosas' },
            

        ],
    },



     {
        id: 'q3',
        question: 'Quais seu nivel de habilidade na cozinha?',
        options: [
            {id: 'opt3_1', text: 'Iniciante' },
            {id: 'opt3_2', text: 'Intermediário' },
            {id: 'opt3_3', text: 'Avançado' },
            {id: 'opt3_4', text: 'Especialista' },

        ],
    },



     {
        id: 'q4',
        question: 'Com que frequência você cozinha em casa?',
        options: [
            {id: 'opt4_1', text: 'Diariamente' },
            {id: 'opt4_2', text: 'Várias vezes por semana' },
            {id: 'opt4_3', text: 'Uma vez por semana' },
            {id: 'opt4_4', text: 'Raramente' },
        ],
    },



     {
        id: 'q5',
        question: 'Quais ingredientes você prefere usar?',
        options: [
            {id: 'opt5_1', text: 'Frango' },
            {id: 'opt5_2', text: 'Carne Vermelha' },
            {id: 'opt5_3', text: 'Peixe/Frutos do Mar' },
            {id: 'opt5_4', text: 'Vegetais' },
            {id: 'opt5_5', text: 'Massas' },
            {id: 'opt5_6', text: 'Grãos' },
        ],
    },



    {
    id: 'q6',
    question: 'Qual o tempo médio que você dedica para preparar uma refeição?',
    options: [
      { id: 'opt6_1', text: 'Até 15 minutos' },
      { id: 'opt6_2', text: '15-30 minutos' },
      { id: 'opt6_3', text: '30-60 minutos' },
      { id: 'opt6_4', text: 'Mais de 1 hora' },
    ],
  },



  {
    id: 'q7',
    question: 'Você tem preferencia por refeições doces ou salgadas?',
    options: [
      { id: 'opt7_1', text: 'Doces' },
      { id: 'opt7_2', text: 'Salgadas' },
    ],
  },



  {
    id: 'q8',
    question: 'Quais tipos de refeições você busca?',
    options: [
      { id: 'opt8_1', text: 'Café da manhã' },
      { id: 'opt8_2', text: 'Almoço' },
      { id: 'opt8_3', text: 'Jantar' },
      { id: 'opt8_4', text: 'Lanche' },
      { id: 'opt8_5', text: 'Sobremesa' },

    ],
  },
]
        
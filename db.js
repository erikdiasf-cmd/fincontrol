const DB = {
  "accounts": [
    {
      "id": "acc_santander",
      "name": "Santander",
      "bank": "Santander",
      "initialBalance": 5996.78,
      "color": "#ff4d6a"
    },
    {
      "id": "acc_inter",
      "name": "Banco Inter",
      "bank": "Inter",
      "initialBalance": 0,
      "color": "#ff9f43"
    },
    {
      "id": "acc_sofisa",
      "name": "Sofisa",
      "bank": "Sofisa",
      "initialBalance": 0,
      "color": "#4d9fff"
    },
    {
      "id": "acc_itau",
      "name": "Itaú",
      "bank": "Itaú",
      "initialBalance": 0,
      "color": "#ff6b9d"
    }
  ],
  "cards": [
    {
      "id": "card_inter",
      "name": "Inter Gold",
      "limit": 0,
      "closingDay": 1,
      "dueDay": 10
    },
    {
      "id": "card_sofisa",
      "name": "Sofisa Infinit",
      "limit": 0,
      "closingDay": 1,
      "dueDay": 10
    },
    {
      "id": "card_santander",
      "name": "Santander Free",
      "limit": 0,
      "closingDay": 1,
      "dueDay": 10
    },
    {
      "id": "card_nubank",
      "name": "Nubank",
      "limit": 0,
      "closingDay": 1,
      "dueDay": 10
    }
  ],
  "transactions": [
    {
      "id": "restituicao_ana",
      "type": "income",
      "description": "Restituição IR - Ana Laura",
      "amount": 381.64,
      "date": "2026-06-03",
      "category": "outros_rec",
      "accountId": "acc_santander"
    },
    {
      "id": "tenis_jul",
      "type": "expense",
      "description": "Tênis Erik",
      "amount": 20.99,
      "date": "2026-07-10",
      "category": "vestuario",
      "accountId": "card_inter"
    },
    {
      "id": "curso_p6",
      "type": "expense",
      "description": "Curso Erik (6/12)",
      "amount": 99.7,
      "date": "2026-07-10",
      "category": "educacao",
      "accountId": "card_inter"
    },
    {
      "id": "curso_p7",
      "type": "expense",
      "description": "Curso Erik (7/12)",
      "amount": 99.7,
      "date": "2026-08-10",
      "category": "educacao",
      "accountId": "card_inter"
    },
    {
      "id": "curso_p8",
      "type": "expense",
      "description": "Curso Erik (8/12)",
      "amount": 99.7,
      "date": "2026-09-10",
      "category": "educacao",
      "accountId": "card_inter"
    },
    {
      "id": "curso_p9",
      "type": "expense",
      "description": "Curso Erik (9/12)",
      "amount": 99.7,
      "date": "2026-10-10",
      "category": "educacao",
      "accountId": "card_inter"
    },
    {
      "id": "curso_p10",
      "type": "expense",
      "description": "Curso Erik (10/12)",
      "amount": 99.7,
      "date": "2026-11-10",
      "category": "educacao",
      "accountId": "card_inter"
    },
    {
      "id": "curso_p11",
      "type": "expense",
      "description": "Curso Erik (11/12)",
      "amount": 99.7,
      "date": "2026-12-10",
      "category": "educacao",
      "accountId": "card_inter"
    },
    {
      "id": "curso_p12",
      "type": "expense",
      "description": "Curso Erik (12/12)",
      "amount": 99.7,
      "date": "2027-01-10",
      "category": "educacao",
      "accountId": "card_inter"
    },
    {
      "id": "carro_p3",
      "type": "expense",
      "description": "Conserto Carro (3/4)",
      "amount": 748.88,
      "date": "2026-07-10",
      "category": "transporte",
      "accountId": "card_inter"
    },
    {
      "id": "carro_p4",
      "type": "expense",
      "description": "Conserto Carro (4/4)",
      "amount": 748.88,
      "date": "2026-08-10",
      "category": "transporte",
      "accountId": "card_inter"
    },
    {
      "id": "gel_p1",
      "type": "expense",
      "description": "Geladeira (1/12)",
      "amount": 229.08,
      "date": "2026-07-10",
      "category": "casa",
      "accountId": "card_nubank"
    },
    {
      "id": "cel_p1",
      "type": "expense",
      "description": "Celular Ana (1/12)",
      "amount": 191.3,
      "date": "2026-07-10",
      "category": "eletronicos",
      "accountId": "card_nubank"
    },
    {
      "id": "gel_p2",
      "type": "expense",
      "description": "Geladeira (2/12)",
      "amount": 229.08,
      "date": "2026-08-10",
      "category": "casa",
      "accountId": "card_nubank"
    },
    {
      "id": "cel_p2",
      "type": "expense",
      "description": "Celular Ana (2/12)",
      "amount": 191.3,
      "date": "2026-08-10",
      "category": "eletronicos",
      "accountId": "card_nubank"
    },
    {
      "id": "gel_p3",
      "type": "expense",
      "description": "Geladeira (3/12)",
      "amount": 229.08,
      "date": "2026-09-10",
      "category": "casa",
      "accountId": "card_nubank"
    },
    {
      "id": "cel_p3",
      "type": "expense",
      "description": "Celular Ana (3/12)",
      "amount": 191.3,
      "date": "2026-09-10",
      "category": "eletronicos",
      "accountId": "card_nubank"
    },
    {
      "id": "gel_p4",
      "type": "expense",
      "description": "Geladeira (4/12)",
      "amount": 229.08,
      "date": "2026-10-10",
      "category": "casa",
      "accountId": "card_nubank"
    },
    {
      "id": "cel_p4",
      "type": "expense",
      "description": "Celular Ana (4/12)",
      "amount": 191.3,
      "date": "2026-10-10",
      "category": "eletronicos",
      "accountId": "card_nubank"
    },
    {
      "id": "gel_p5",
      "type": "expense",
      "description": "Geladeira (5/12)",
      "amount": 229.08,
      "date": "2026-11-10",
      "category": "casa",
      "accountId": "card_nubank"
    },
    {
      "id": "cel_p5",
      "type": "expense",
      "description": "Celular Ana (5/12)",
      "amount": 191.3,
      "date": "2026-11-10",
      "category": "eletronicos",
      "accountId": "card_nubank"
    },
    {
      "id": "gel_p6",
      "type": "expense",
      "description": "Geladeira (6/12)",
      "amount": 229.08,
      "date": "2026-12-10",
      "category": "casa",
      "accountId": "card_nubank"
    },
    {
      "id": "cel_p6",
      "type": "expense",
      "description": "Celular Ana (6/12)",
      "amount": 191.3,
      "date": "2026-12-10",
      "category": "eletronicos",
      "accountId": "card_nubank"
    },
    {
      "id": "gel_p7",
      "type": "expense",
      "description": "Geladeira (7/12)",
      "amount": 229.08,
      "date": "2027-01-10",
      "category": "casa",
      "accountId": "card_nubank"
    },
    {
      "id": "cel_p7",
      "type": "expense",
      "description": "Celular Ana (7/12)",
      "amount": 191.3,
      "date": "2027-01-10",
      "category": "eletronicos",
      "accountId": "card_nubank"
    },
    {
      "id": "gel_p8",
      "type": "expense",
      "description": "Geladeira (8/12)",
      "amount": 229.08,
      "date": "2027-02-10",
      "category": "casa",
      "accountId": "card_nubank"
    },
    {
      "id": "cel_p8",
      "type": "expense",
      "description": "Celular Ana (8/12)",
      "amount": 191.3,
      "date": "2027-02-10",
      "category": "eletronicos",
      "accountId": "card_nubank"
    },
    {
      "id": "gel_p9",
      "type": "expense",
      "description": "Geladeira (9/12)",
      "amount": 229.08,
      "date": "2027-03-10",
      "category": "casa",
      "accountId": "card_nubank"
    },
    {
      "id": "cel_p9",
      "type": "expense",
      "description": "Celular Ana (9/12)",
      "amount": 191.3,
      "date": "2027-03-10",
      "category": "eletronicos",
      "accountId": "card_nubank"
    },
    {
      "id": "gel_p10",
      "type": "expense",
      "description": "Geladeira (10/12)",
      "amount": 229.08,
      "date": "2027-04-10",
      "category": "casa",
      "accountId": "card_nubank"
    },
    {
      "id": "cel_p10",
      "type": "expense",
      "description": "Celular Ana (10/12)",
      "amount": 191.3,
      "date": "2027-04-10",
      "category": "eletronicos",
      "accountId": "card_nubank"
    },
    {
      "id": "gel_p11",
      "type": "expense",
      "description": "Geladeira (11/12)",
      "amount": 229.08,
      "date": "2027-05-10",
      "category": "casa",
      "accountId": "card_nubank"
    },
    {
      "id": "cel_p11",
      "type": "expense",
      "description": "Celular Ana (11/12)",
      "amount": 191.3,
      "date": "2027-05-10",
      "category": "eletronicos",
      "accountId": "card_nubank"
    },
    {
      "id": "gel_p12",
      "type": "expense",
      "description": "Geladeira (12/12)",
      "amount": 229.08,
      "date": "2027-06-10",
      "category": "casa",
      "accountId": "card_nubank"
    },
    {
      "id": "cel_p12",
      "type": "expense",
      "description": "Celular Ana (12/12)",
      "amount": 191.3,
      "date": "2027-06-10",
      "category": "eletronicos",
      "accountId": "card_nubank"
    }
  ],
  "investments": [],
  "budgets": []
};
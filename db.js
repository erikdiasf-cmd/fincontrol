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
      "id": "restituicao_ana_v2",
      "type": "income",
      "description": "Restituição IR - Ana Laura",
      "amount": 381.64,
      "date": "2026-06-03",
      "category": "outros_rec",
      "accountId": "acc_santander",
      "note": "Receita não recorrente"
    },
    {
      "id": "tenis_erik_jul",
      "type": "expense",
      "description": "Tênis Erik",
      "amount": 20.99,
      "date": "2026-07-03",
      "category": "vestuario",
      "accountId": "card_inter",
      "note": "Fatura Julho"
    },
    {
      "id": "curso_erik_jul",
      "type": "expense",
      "description": "Curso Erik (6/12)",
      "amount": 99.7,
      "date": "2026-07-03",
      "category": "educacao",
      "accountId": "card_inter",
      "note": "Fatura Julho"
    },
    {
      "id": "carro_erik_jul",
      "type": "expense",
      "description": "Conserto do carro (3/4)",
      "amount": 748.88,
      "date": "2026-07-03",
      "category": "transporte",
      "accountId": "card_inter",
      "note": "Fatura Julho"
    },
    {
      "id": "geladeira_p1_b151",
      "type": "expense",
      "description": "Geladeira (1/12)",
      "amount": 229.08,
      "date": "2026-07-10",
      "category": "casa",
      "accountId": "card_nubank",
      "note": "Nubank"
    },
    {
      "id": "celular_ana_p1_3e84",
      "type": "expense",
      "description": "Celular Ana Laura (1/12)",
      "amount": 191.3,
      "date": "2026-07-10",
      "category": "eletronicos",
      "accountId": "card_nubank",
      "note": "Nubank"
    },
    {
      "id": "geladeira_p2_78d8",
      "type": "expense",
      "description": "Geladeira (2/12)",
      "amount": 229.08,
      "date": "2026-08-10",
      "category": "casa",
      "accountId": "card_nubank",
      "note": "Nubank"
    },
    {
      "id": "celular_ana_p2_fc3f",
      "type": "expense",
      "description": "Celular Ana Laura (2/12)",
      "amount": 191.3,
      "date": "2026-08-10",
      "category": "eletronicos",
      "accountId": "card_nubank",
      "note": "Nubank"
    },
    {
      "id": "geladeira_p3_6f8e",
      "type": "expense",
      "description": "Geladeira (3/12)",
      "amount": 229.08,
      "date": "2026-09-10",
      "category": "casa",
      "accountId": "card_nubank",
      "note": "Nubank"
    },
    {
      "id": "celular_ana_p3_301e",
      "type": "expense",
      "description": "Celular Ana Laura (3/12)",
      "amount": 191.3,
      "date": "2026-09-10",
      "category": "eletronicos",
      "accountId": "card_nubank",
      "note": "Nubank"
    },
    {
      "id": "geladeira_p4_3432",
      "type": "expense",
      "description": "Geladeira (4/12)",
      "amount": 229.08,
      "date": "2026-10-10",
      "category": "casa",
      "accountId": "card_nubank",
      "note": "Nubank"
    },
    {
      "id": "celular_ana_p4_6226",
      "type": "expense",
      "description": "Celular Ana Laura (4/12)",
      "amount": 191.3,
      "date": "2026-10-10",
      "category": "eletronicos",
      "accountId": "card_nubank",
      "note": "Nubank"
    },
    {
      "id": "geladeira_p5_5569",
      "type": "expense",
      "description": "Geladeira (5/12)",
      "amount": 229.08,
      "date": "2026-11-10",
      "category": "casa",
      "accountId": "card_nubank",
      "note": "Nubank"
    },
    {
      "id": "celular_ana_p5_d83e",
      "type": "expense",
      "description": "Celular Ana Laura (5/12)",
      "amount": 191.3,
      "date": "2026-11-10",
      "category": "eletronicos",
      "accountId": "card_nubank",
      "note": "Nubank"
    },
    {
      "id": "geladeira_p6_55e8",
      "type": "expense",
      "description": "Geladeira (6/12)",
      "amount": 229.08,
      "date": "2026-12-10",
      "category": "casa",
      "accountId": "card_nubank",
      "note": "Nubank"
    },
    {
      "id": "celular_ana_p6_a5ec",
      "type": "expense",
      "description": "Celular Ana Laura (6/12)",
      "amount": 191.3,
      "date": "2026-12-10",
      "category": "eletronicos",
      "accountId": "card_nubank",
      "note": "Nubank"
    },
    {
      "id": "geladeira_p7_a72c",
      "type": "expense",
      "description": "Geladeira (7/12)",
      "amount": 229.08,
      "date": "2027-01-10",
      "category": "casa",
      "accountId": "card_nubank",
      "note": "Nubank"
    },
    {
      "id": "celular_ana_p7_5b36",
      "type": "expense",
      "description": "Celular Ana Laura (7/12)",
      "amount": 191.3,
      "date": "2027-01-10",
      "category": "eletronicos",
      "accountId": "card_nubank",
      "note": "Nubank"
    },
    {
      "id": "geladeira_p8_85fa",
      "type": "expense",
      "description": "Geladeira (8/12)",
      "amount": 229.08,
      "date": "2027-02-10",
      "category": "casa",
      "accountId": "card_nubank",
      "note": "Nubank"
    },
    {
      "id": "celular_ana_p8_8f7c",
      "type": "expense",
      "description": "Celular Ana Laura (8/12)",
      "amount": 191.3,
      "date": "2027-02-10",
      "category": "eletronicos",
      "accountId": "card_nubank",
      "note": "Nubank"
    },
    {
      "id": "geladeira_p9_bcee",
      "type": "expense",
      "description": "Geladeira (9/12)",
      "amount": 229.08,
      "date": "2027-03-10",
      "category": "casa",
      "accountId": "card_nubank",
      "note": "Nubank"
    },
    {
      "id": "celular_ana_p9_9277",
      "type": "expense",
      "description": "Celular Ana Laura (9/12)",
      "amount": 191.3,
      "date": "2027-03-10",
      "category": "eletronicos",
      "accountId": "card_nubank",
      "note": "Nubank"
    },
    {
      "id": "geladeira_p10_1be8",
      "type": "expense",
      "description": "Geladeira (10/12)",
      "amount": 229.08,
      "date": "2027-04-10",
      "category": "casa",
      "accountId": "card_nubank",
      "note": "Nubank"
    },
    {
      "id": "celular_ana_p10_d3e2",
      "type": "expense",
      "description": "Celular Ana Laura (10/12)",
      "amount": 191.3,
      "date": "2027-04-10",
      "category": "eletronicos",
      "accountId": "card_nubank",
      "note": "Nubank"
    },
    {
      "id": "geladeira_p11_258b",
      "type": "expense",
      "description": "Geladeira (11/12)",
      "amount": 229.08,
      "date": "2027-05-10",
      "category": "casa",
      "accountId": "card_nubank",
      "note": "Nubank"
    },
    {
      "id": "celular_ana_p11_1a9c",
      "type": "expense",
      "description": "Celular Ana Laura (11/12)",
      "amount": 191.3,
      "date": "2027-05-10",
      "category": "eletronicos",
      "accountId": "card_nubank",
      "note": "Nubank"
    },
    {
      "id": "geladeira_p12_017d",
      "type": "expense",
      "description": "Geladeira (12/12)",
      "amount": 229.08,
      "date": "2027-06-10",
      "category": "casa",
      "accountId": "card_nubank",
      "note": "Nubank"
    },
    {
      "id": "celular_ana_p12_829d",
      "type": "expense",
      "description": "Celular Ana Laura (12/12)",
      "amount": 191.3,
      "date": "2027-06-10",
      "category": "eletronicos",
      "accountId": "card_nubank",
      "note": "Nubank"
    }
  ],
  "investments": [],
  "budgets": []
};

if (window.location.search.includes('clean=true')) {
  localStorage.clear();
  window.history.replaceState({}, document.title, window.location.pathname);
}
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
      "id": "tenis_erik_july",
      "type": "expense",
      "description": "Tênis Erik",
      "amount": 20.99,
      "date": "2026-07-03",
      "category": "vestuario",
      "accountId": "card_inter",
      "note": "Compra em 03/06 - Fatura Julho"
    },
    {
      "id": "curso_erik_july",
      "type": "expense",
      "description": "Curso Erik (6/12)",
      "amount": 99.7,
      "date": "2026-07-03",
      "category": "educacao",
      "accountId": "card_inter",
      "note": "Compra em 03/06 - Fatura Julho"
    },
    {
      "id": "carro_erik_july",
      "type": "expense",
      "description": "Conserto do carro (3/4)",
      "amount": 748.88,
      "date": "2026-07-03",
      "category": "transporte",
      "accountId": "card_inter",
      "note": "Compra em 03/06 - Fatura Julho"
    }
  ],
  "investments": [],
  "budgets": []
};

if (window.location.search.includes('clean=true')) {
  Object.keys(localStorage).filter(k => k.startsWith('fc_')).forEach(k => localStorage.removeItem(k));
  window.history.replaceState({}, document.title, window.location.pathname);
}
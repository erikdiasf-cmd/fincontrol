const DB = {
  accounts: [
    { id: 'acc_santander', name: 'Santander', bank: 'Santander', initialBalance: 5996.78, color: '#ff4d6a' },
    { id: 'acc_inter', name: 'Banco Inter', bank: 'Inter', initialBalance: 0, color: '#ff9f43' },
    { id: 'acc_sofisa', name: 'Sofisa', bank: 'Sofisa', initialBalance: 0, color: '#4d9fff' },
    { id: 'acc_itau', name: 'Itaú', bank: 'Itaú', initialBalance: 0, color: '#ff6b9d' }
  ],
  cards: [
    { id: 'card_inter', name: 'Inter Gold', limit: 0, closingDay: 1, dueDay: 10 },
    { id: 'card_sofisa', name: 'Sofisa Infinit', limit: 0, closingDay: 1, dueDay: 10 },
    { id: 'card_santander', name: 'Santander Free', limit: 0, closingDay: 1, dueDay: 10 },
    { id: 'card_nubank', name: 'Nubank', limit: 0, closingDay: 1, dueDay: 10 }
  ],
  transactions: [
    { id: 'restituicao_ana_v2', type: 'income', description: 'Restituição IR - Ana Laura', amount: 381.64, date: '2026-06-03', category: 'outros_rec', accountId: 'acc_santander', note: 'Receita não recorrente' }
  ],
  investments: [],
  budgets: []
};

// Auto-clean localStorage if requested via URL
if (window.location.search.includes('clean=true')) {
  Object.keys(localStorage).filter(k => k.startsWith('fc_')).forEach(k => localStorage.removeItem(k));
  window.history.replaceState({}, document.title, window.location.pathname);
}

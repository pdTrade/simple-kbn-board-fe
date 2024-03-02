export function useCards() {
  const cards = ref([]);
  const errorMessage = ref(null);

  const fetchCards = async () => {
    const { data, error } = await useApiFetch("/api/cards", { method: "get" });
    cards.value = data.value.cards;
    return [];
  };

  const saveCard = async (cardInfo) => {
    const { data, error } = await useApiFetch("/api/cards", {
      method: "post",
      body: cardInfo,
    });

    errorMessage.value = error.value?.data.message;
  };

  return {
    fetchCards,
    cards,
    saveCard,
    errorMessage,
  };
}

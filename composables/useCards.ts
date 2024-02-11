export function useCards() {
  const cards = ref([]);
  const errorMessage = ref(null);

  const fetchCards = async () => {
    // const { data, error } = await useApiFetch("/api/boards", { method: "get" });
    // boards.value = data.value.boards;
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

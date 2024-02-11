export function useBoards() {
  const boards = ref([]);
  const errorMessage = ref(null);

  const fetchBoards = async () => {
    const { data, error } = await useApiFetch("/api/boards", { method: "get" });
    boards.value = data.value.boards;
  };

  const saveBoard = async (boardInfo) => {
    const { data, error } = await useApiFetch("/api/boards", {
      method: "post",
      body: boardInfo,
    });

    errorMessage.value = error.value?.data.message;
  };

  return {
    fetchBoards,
    boards,
    saveBoard,
    errorMessage,
  };
}

export function useBoards() {
  const boards = ref([]);

  const fetchBoards = async () => {
    const { data, error } = await useApiFetch("/api/boards", { method: "get" });
    boards.value = data.value.boards;
  };

  const saveBoard = async (boardInfo) => {
    const { data, error } = await useApiFetch("/api/boards", {
      method: "post",
      body: boardInfo,
    });
  };

  return {
    fetchBoards,
    boards,
    saveBoard,
  };
}

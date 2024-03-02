export function useLists() {
  const lists = ref([]);
  const errorMessage = ref(null);

  const fetchLists = async (id) => {
    const { data, error } = await useApiFetch("/api/card-list", {
      method: "get",
    });
    lists.value = data.value?.card_lists;
  };

  const saveList = async (listInfo) => {
    const { data, error } = await useApiFetch("/api/card-list", {
      method: "post",
      body: listInfo,
    });

    errorMessage.value = error.value?.data.message;
  };

  return {
    fetchLists,
    lists,
    saveList,
    errorMessage,
  };
}

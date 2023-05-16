const dialogRef = ref(null);

export const dialogOption = reactive({
  title: "",
  content: "",
  confirm: {
    btnName: "",
    onComplete: () => {},
  },
  cancel: {
    btnName: "",
    onComplete: () => {},
  },
});

export const useDialog = () => {
  const open = (option) => {
    if (option) {
      dialogOption.title = option.title || "default title";
      dialogOption.content = option.content || "default content";
      dialogOption.confirm = option.confirm;
      dialogOption.cancel = option.cancel;

      dialogOption.confirm.btnName = option.confirm.btnName || "O";
      dialogOption.cancel.btnName = option.cancel.btnName || "X";
    }

    dialogRef.value.showModal();
  };

  const close = (type) => {
    if (dialogOption[type].onComplete) {
      dialogOption[type].onComplete();
    }
    dialogRef.value.close();
  };

  onMounted(() => {
    dialogRef.value = document.querySelector("#dialog");
  });

  return { open, close };
};

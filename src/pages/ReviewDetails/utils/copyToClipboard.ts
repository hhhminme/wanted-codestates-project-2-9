export const copyToClipboard = (text: string) => {
  const t = document.createElement("textarea");
  document.body.appendChild(t);
  t.value = text;
  t.select();
  document.execCommand("copy");
  document.body.removeChild(t);
  alert("복사되었습니다.");
};

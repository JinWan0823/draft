export const renamePosition = (posi: string): string => {
  const positionMap: Record<string, string> = {
    스트라이커: "ST",
    윙포워드: "WF",
    "센터 미드필더": "CM",
    "수비형 미드필더": "CDM",
    수비수: "CB",
    풀백: "FB",
    올라운더: "ALL",
  };

  return positionMap[posi] || "GK";
};

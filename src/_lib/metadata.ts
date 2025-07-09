interface MetadataParams {
  page: string;
}

export function getMetaData({ page }: MetadataParams) {
  switch (page) {
    case "players":
      return {
        title: "선수목록",
        description: "등록된 선수들의 경력과 특징을 확인해보세요.",
      };
    case "tactics":
      return {
        title: "전술보드",
        description: "등록된 선수들을 이용하여 전술을 정리해보세요.",
      };
    case "tierList":
      return {
        title: "선수 티어리스트",
        description: "선수들을 티어로 정리해보세요.",
      };

    case "draft":
      return {
        title: "드래프트",
        description: "감독을 등록하고 드래프트 팀을 만들어보세요.",
      };
    case "create":
      return {
        title: "선수 등록",
        description: "관리자용 선수 등록 기능입니다.",
      };
    case "update":
      return {
        title: "선수 수정",
        description: "관리자용 선수 수정 기능입니다.",
      };

    case "adm":
      return {
        title: "관리자 로그인",
        description: "관리자 전용 로그인 페이지입니다.",
      };

    default:
      return {
        title: "FC25 팀 드래프트",
        description:
          "선수 목록, 티어 정리, 전술 보드 기능까지 제공하는 드래프트 홈페이지",
      };
  }
}

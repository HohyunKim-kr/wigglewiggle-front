// app/api/file.route.ts
export const route = {
  path: "/api/file",
  method: "POST", // POST 요청을 처리하기 위한 라우트 정의
};

// 'GET' 요청을 처리하려면 추가적으로 아래와 같이 정의할 수 있습니다.
export const getRoute = {
  path: "/api/file",
  method: "GET",
};

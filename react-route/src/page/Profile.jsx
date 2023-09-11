import { useRef } from "react";
import { Link, useSearchParams } from "react-router-dom";

export const Profile = () => {
  const input = useRef();
  const [queryParams, setQueryParams] = useSearchParams();
  console.log(queryParams.get("search"));
  const search = queryParams.get("search");

  return (
    <>
      <h1>프로필 페이지 입니다.</h1>
      {/* ?search=value1 */}
      <input type="text" ref={input} />
      <button onClick={() => setQueryParams(`search=${input.current.value}`)}>
        검색
      </button>
      <Link to="/profile?search=v"> 특정쿼리로 이동 </Link>
      <p>{search === "" ? "검색어를 입력해주세요" : search}</p>
    </>
  );
};

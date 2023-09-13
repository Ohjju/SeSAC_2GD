const initialState = {
  list: [
    {
      id: 0,
      text: "리액트  공부하기",
      done: false,
    },
    {
      id: 1,
      text: "스트레칭하기",
      done: false,
    },
    { id: 2, text: "운동하기", done: false },
  ],
};

//id 전역관리를 위한 initialState.nextID
let count = initialState.list.length;
initialState["nextID"] = count;

//action 타입 정의
const CREATE = "todo/CREATE";
const DONE = "todo/DONE";

export function create(payload) {
  return {
    type: CREATE,
    payload, //object형
  };
}
export function done(id) {
  return {
    type: DONE,
    id, //number형
  };
}

/*
action ={
  type: 'todo/CREATE',
  payload: {
    id:3,
    text:'점심먹기'
  }
}
*/

export default function todo(state = initialState, action) {
  switch (action.type) {
    case CREATE:
      // trim(): 공백제거
      if (action.payload.text.trim() === "") {
        return state;
      } else {
        return {
          ...state,
          list: state.list.concat({
            id: action.payload.id,
            text: action.payload.text,
            done: false,
          }),
          nextID: action.payload.id + 1,
        };
      }

    case DONE:
      // 기존 list에서의 id와 action으로 들어온 id가 같다면
      // done:false -> true
      return {
        ...state,
        list: state.list.map((el) => {
          if (el.id === action.id) {
            return {
              ...el,
              done: true,
            };
          } else {
            return el;
          }
        }),
      };
    default:
      return state;
  }
}

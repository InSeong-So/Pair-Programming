// 데이터를 업데이트 할 수 있는 함수
// + 데이터를 읽어오는 함수

// setMember의 역할 : member set === 추가, 수정, 삭제

// action
// 추가: name
// 수정: prevName, nextName
// 삭제: name

// update 함수를 통했을 당시 값은 전달할 수 있지만, 그 전의 값은 가져오지 못한다.
const closure = () => {
  // 데이터를 저장할 변수
  const memory = {
    member: {
      driver: '파랑',
      navigator: ['아벤'],
    },
  };

  // 구조분해할당을 통해 변경된 state를 갱신한다.
  const addDriver = (state, { name }) => {
    state.driver = name;
    return state;
  };
  const addNavigator = (state, { name }) => {
    state.navigator.push(name);
    return state;
  };
  const modifyMember = (state, { prevName, nextName }) => {};
  const deleteMember = (state, { name }) => {};
  //
  const swapRole = (state, { driver, navigator }) => {
    // navigator 가장 빠른 순번의 사람이 교체 되는 것
    state = { driver: navigator, navigator: [...state.navigator.slice(1), driver] };
    return state;
  };

  return action => {
    if (!action) return Object.freeze(memory.member);
    switch (action.type) {
      case 'addDriver': {
        console.log(`type: ${action.type}\nmember: ${addDriver(memory.member, action)}`);
        break;
      }
      case 'addNavigator': {
        console.log(`type: ${action.type}\nmember: ${addNavigator(memory.member, action)}`);
        break;
      }
      case 'modifyMember': {
        console.log(`type: ${action.type}`, modifyMember(memory.member, action));
        break;
      }
      case 'deleteMember': {
        console.log(`type: ${action.type}`, deleteMember(memory.member, action));
        break;
      }
      case 'swapRole': {
        const state = swapRole(memory.member, action.member);
        console.log(`type: ${action.type}`, state);
        return state;
      }
    }
  };
};

/////////////////////////////////////////
// ./src/component/modal/Modal.js에서의 호출부
// import {update} from './src/store/index.js';

/*
내부 로직 생략
*/

// action { type, payload }
// 교통편 : type, 비용: payload

// console.log(memory);
// update({ type: 'addMember', name: '아벤2' });
// console.log(memory);
// update({ type: 'modifyMember', prevName: '아벤2', nextName: '아벤3' });
// update({ type: 'deleteMember', name: '아벤2' });

// const store = new Store();
// store.print();
// store.update({ type: 'addMember', name: '아벤2' });
// store.print();

export default closure();

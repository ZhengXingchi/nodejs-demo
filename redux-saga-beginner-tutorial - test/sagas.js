import { delay } from 'redux-saga'
import Api from './Api'
import { put, takeEvery,take,all,call,select } from 'redux-saga/effects'

// ...

// Our worker Saga: 将执行异步的 increment 任务
export function* incrementAsync() {
  yield call(delay,1000)
  yield put({ type: 'INCREMENT' })
}

// Our watcher Saga: 在每个 INCREMENT_ASYNC action spawn 一个新的 incrementAsync 任务
export function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

export function* helloSaga() {
 console.log("wwwww")
}

 
/*日志记录器 takeEvery**********************************************/
// export function* watchAndLog(){
// 	yield takeEvery('*', function* logger(action){
// 	   const state = yield select()
// 	   console.log('action', action)
// 	   console.log('state after', state)
// 	})
// }
 
/*日志记录器take**********************************************/
export function* watchAndLog(){
	while(true){
		const action=yield take('*')
		const state=yield select()
		console.log(action)
		console.log(state)
	}
}

 
/*点击三次弹出弹窗**********************************************/
export function* watchFirstThreeTodosCreation() {
  for (let i = 0; i < 3; i++) {
    const action = yield take('TODO_CREATED')
  }
  yield put({type: 'SHOW_CONGRATULATION'})
}


/*登录流控制**********************************************/
export function* authorize(user, password) {
  try {
    const token = yield call(Api.authorize, user, password)
    yield put({type: 'LOGIN_SUCCESS', token})
    return token
  } catch(error) {
    yield put({type: 'LOGIN_ERROR', error})
  }
}

function* loginFlow() {
  while(true) {
    const {payload:{user,password}} = yield take('LOGIN_REQUEST')
    console.log(user,password)
    const token = yield call(authorize, user, password)
    if(token) {
    
      yield call(Api.storeItem,{token})
      
      yield take('LOGOUT')
      yield call(Api.clearItem,'token')
    }
  }
}






// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    helloSaga(),
    watchIncrementAsync(),
    watchAndLog(),
    watchFirstThreeTodosCreation(),
    loginFlow()
  ])
}
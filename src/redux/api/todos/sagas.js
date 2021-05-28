import { delay, put, takeLatest, call, select } from 'redux-saga/effects'
import { GET_TODOS, REMOVE_TODO } from './constants';
import { setLoading, setTodos } from './actions';
import { confirmationSaga } from '../../ui/confirmationDialog/sagas';
import { showToast } from '../../ui/toast/actions';

const exampleTodos = [
  { id: 1, text: 'Husk å kjøpe øl!' },
  { id: 2, text: 'Husk å gå på do!' },
  { id: 3, text: 'Husk å låse døren!' },
];

export const getStateTodos = ({ api: { todos } }) => todos?.todos;

function* handleGetTodos() {
  yield takeLatest(GET_TODOS, function*() {
    yield put(setLoading(true));
    yield delay(1500); // Vi later som at vi henter noe fra et api...
    yield put(setTodos(exampleTodos));
    yield put(setLoading(false));
  });
}

function* handleRemoveTodo() {
  yield takeLatest(REMOVE_TODO, function*(args) {
    const { id } = args?.payload;
    const confirmed = yield call(confirmationSaga, 'Are you sure you want to delete todo?');
    if (!confirmed) {
      return;
    }
    yield put(setLoading(true));
    yield delay(1500); // Vi later som at vi sletter en todo...
    const allTodos = yield select(getStateTodos);
    const filteredTodos = allTodos.filter(todo => todo.id !== id);
    yield put(setTodos(filteredTodos));
    yield put(setLoading(false));
    yield put(showToast('Todo deleted', 'orange', 2000));
  });
}

export default [
  handleGetTodos(),
  handleRemoveTodo(),
];

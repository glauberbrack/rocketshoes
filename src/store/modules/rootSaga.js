import { all } from 'redux-saga/effects';

import cart from './cart/sagas';

export default function* rootSagA() {
  return yield all([cart]);
}

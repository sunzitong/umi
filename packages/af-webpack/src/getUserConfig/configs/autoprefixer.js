import assert from 'assert';
import { isPlainObject } from 'lodash';

export default function() {
  return {
    name: 'autoprefixer',
    validate(val) {
      assert(
        isPlainObject(val),
        `The autoprefixer config must be Plain Object, but got ${val}`,
      );
    },
  };
}

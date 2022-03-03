import { decode as _decode, encode as _encode } from '@abcnews/base-36-text';
import { isPlainObject } from 'is-plain-object';

const ERROR_NOT_PLAIN_OBJECT = 'props is not a plain object';

export function encode(props: Object): string {
  if (!isPlainObject(props)) {
    throw new Error(ERROR_NOT_PLAIN_OBJECT);
  }

  return _encode(JSON.stringify(props));
}

export function decode<T extends Object>(base36string: string): T {
  return JSON.parse(_decode(base36string));
}

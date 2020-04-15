import baseX from 'base-x';
import { Buffer } from 'buffer/';
import isPlainObject from 'is-plain-object';
import { TextEncoder } from 'text-encoding';

const BASE_36_CHARSET = '0123456789abcdefghijklmnopqrstuvwxyz';
const ERROR_NOT_PLAIN_OBJECT = 'props is not a plain object';

const base36 = baseX(BASE_36_CHARSET);

export function encode(props: Object): string {
  if (!isPlainObject(props)) {
    throw new Error(ERROR_NOT_PLAIN_OBJECT);
  }

  return base36.encode(
    Buffer.from(new TextEncoder().encode(JSON.stringify(props)))
  );
}

export function decode(base36string: string): Object {
  return JSON.parse(base36.decode(base36string).toString());
}

import baseX from 'base-x';
import { Buffer } from 'buffer/';
import { TextEncoder } from 'text-encoding';

const BASE_36_CHARSET = '0123456789abcdefghijklmnopqrstuvwxyz';

const base36 = baseX(BASE_36_CHARSET);

export function encode(props: Object): string {
  return base36.encode(
    Buffer.from(new TextEncoder().encode(JSON.stringify(props)))
  );
}

export function decode(base36string: string): Object {
  return JSON.parse(base36.decode(base36string).toString());
}

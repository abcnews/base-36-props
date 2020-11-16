import { encode, decode } from './index';

describe('encoce', () => {
  test('encodes basic object to expected string', () => {
    expect(encode({ boo: 'urns' })).toBe('56twsylnpt0wcdmev1va7x');
  });
});
describe('decode', () => {
  test('decodes string to expected object', () => {
    expect(decode<{ boo: string }>('56twsylnpt0wcdmev1va7x').boo).toBe('urns');
  });
});

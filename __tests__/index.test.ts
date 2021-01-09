import { ChartID, CKBJson } from '@antv/knowledge';
import Thumbnails from '../src/index';

test('index', () => {
  const ckb = CKBJson();

  const keys: ChartID[] = Object.keys(Thumbnails) as ChartID[];
  keys.forEach(key => {
    const obj = Thumbnails[key];
    expect(!!obj).toBe(true);
    if (obj) {
      expect(obj.id).toBe(key);
      expect(obj.name).toBe(ckb[key].name);
      expect(!obj.svgCode).toBe(false);
    }
  });
});

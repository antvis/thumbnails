import { ChartID, CKBJson } from '@antv/knowledge';
import { Thumbnails, BAR_CHART } from '../src/index';

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

test('object pie', () => {
  if (Thumbnails.pie_chart) {
    const { id, name, svgCode } = Thumbnails.pie_chart;
    console.log(id, name, svgCode);
  }
});

test('object bar', () => {
  const { id, name, svgCode } = BAR_CHART;
  console.log(id, name, svgCode);
});

import { mount } from '@vue/test-utils';
import { describe, it, expect, vi, beforeAll } from 'vitest';
import Product from '../Product.vue';
import { JSDOM } from 'jsdom';

beforeAll(() => {
  const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
  global.window = jsdom.window;
  global.document = jsdom.window.document;
  Object.defineProperty(global, 'navigator', {
    get: () => ({
      userAgent: 'node.js',
    }),
    configurable: true,
  });
  global.alert = vi.fn();
  // Mock SVGElement to avoid ReferenceError
  global.SVGElement = function() {};
});

describe('Product.vue', () => {
  it('renders product names', () => {
    const wrapper = mount(Product);
    const productNames = wrapper.findAll('h2').map(node => node.text());
    expect(productNames).toContain('Caramel Sweet');
    expect(productNames).toContain('Strawberry Delight');
    expect(productNames).toContain('Minty Bear');
    expect(productNames).toContain('Vanilla Sprinkle');
  });

  it('shows alert when Pesan button clicked with no quantity selected', async () => {
    const wrapper = mount(Product);

    await wrapper.find('button').trigger('click');

    expect(global.alert).toHaveBeenCalledWith('Silakan pilih jumlah produk yang ingin dipesan.');
  });
});

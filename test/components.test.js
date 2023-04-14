import React from 'react';
import { describe, it, expect } from 'vitest';
import { renderToString } from 'react-dom/server';
import { Hello } from '../components/components.jsx';
import { load } from 'cheerio';

describe('compoonents test', function () {
  it('tests for 3 results of hello', function () {
    const sHtml = renderToString(React.createElement(Hello));
    const $ = load(sHtml);
    expect($('p').length).toBe(3);
  });
});

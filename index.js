/**
 * Copyright (c) 2017 Chris Baker <mail.chris.baker@gmail.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */

'use strict';

import React from 'react';
import PropTypes from 'prop-types';

function createElement(name, type) {
  function CreateElement(props) {
    return React.createElement(type, props, props.children);
  }

  CreateElement.displayName = name;

  CreateElement.propTypes = {
    children: PropTypes.node
  };

  CreateElement.defaultProps = {
    children: undefined
  };

  return CreateElement;
}

export const Circle = createElement('Circle', 'circle');
export const ClipPath = createElement('ClipPath', 'clipPath');
export const Defs = createElement('Defs', 'defs');
export const Ellipse = createElement('Ellipse', 'ellipse');
export const G = createElement('G', 'g');
export const Image = createElement('Image', 'image');
export const Line = createElement('Line', 'line');
export const LinearGradient = createElement('LinearGradient', 'linearGradient');
export const Path = createElement('Path', 'path');
export const Polygon = createElement('Polygon', 'polygon');
export const Polyline = createElement('Polyline', 'polyline');
export const RadialGradient = createElement('RadialGradient', 'radialGradient');
export const Rect = createElement('Rect', 'rect');
export const Stop = createElement('Stop', 'stop');
export const Svg = createElement('Svg', 'svg');
export const Symbol = createElement('Symbol', 'symbol');
export const Text = createElement('Text', 'text');
export const TextPath = createElement('TextPath', 'textPath');
export const TSpan = createElement('TSpan', 'tspan');
export const Use = createElement('Use', 'use');

export default Svg;

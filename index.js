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

Object.defineProperty(exports, "__esModule", {
    value: true
});
var React = require('react');
var PropTypes = require('prop-types');

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

var Circle = createElement('Circle', 'circle');
var ClipPath = createElement('ClipPath', 'cipPath');
var Defs = createElement('Defs', 'defs');
var Ellipse = createElement('Ellipse', 'ellipse');
var G = createElement('G', 'g');
var Image = createElement('Image', 'image');
var Line = createElement('Line', 'line');
var LinearGradient = createElement('LinearGradient', 'linearGradient');
var Path = createElement('Path', 'path');
var Polygon = createElement('Polygon', 'polygon');
var Polyline = createElement('Polyline', 'polyline');
var RadialGradient = createElement('RadialGradient', 'radialGradient');
var Rect = createElement('Rect', 'rect');
var Stop = createElement('Stop', 'stop');
var Svg = createElement('Svg', 'svg');
var _Symbol = createElement('Symbol', 'symbol');
var TSpan = createElement('TSpan', 'tspan');
var Text = createElement('Text', 'text');
var TextPath = createElement('TextPath', 'textPath');
var Use = createElement('Use', 'use');

exports.Circle = Circle;
exports.ClipPath = ClipPath;
exports.Defs = Defs;
exports.Ellipse = Ellipse;
exports.G = G;
exports.Image = Image;
exports.Line = Line;
exports.LinearGradient = LinearGradient;
exports.Path = Path;
exports.Polygon = Polygon;
exports.Polyline = Polyline;
exports.RadialGradient = RadialGradient;
exports.Rect = Rect;
exports.Stop = Stop;
exports.Svg = Svg;
exports.Symbol = _Symbol;
exports.TSpan = TSpan;
exports.Text = Text;
exports.TextPath = TextPath;
exports.Use = Use;
exports.default = Svg;

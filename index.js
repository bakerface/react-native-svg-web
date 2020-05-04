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
import { createElement as RNcreateElement } from "react-native-web";
import PropTypes from "prop-types";

function createElement(name, type) {
  function CreateElement(props) {
    // this enables the use of StyleSheet.create(...) in the web, like react-native-svg does
    return RNcreateElement(type, props, props.children);
  }

  CreateElement.displayName = name;

  CreateElement.propTypes = {
    children: PropTypes.node,
  };

  CreateElement.defaultProps = {
    children: undefined,
  };

  return CreateElement;
}

const Svg = createElement("Svg", "svg");
export default Svg;
Svg.Svg = Svg; // stay consistent with the old require based api

export const Circle = createElement("Circle", "circle");
Svg.Circle = Circle;

export const ClipPath = createElement("ClipPath", "clipPath");
Svg.ClipPath = ClipPath;

export const Defs = createElement("Defs", "defs");
Svg.Defs = Defs;

export const Ellipse = createElement("Ellipse", "ellipse");
Svg.Ellipse = Ellipse;

export const ForeignObject = createElement("ForeignObject", "foreignObject");
Svg.ForeignObject = ForeignObject;

export const G = createElement("G", "g");
Svg.G = G;

export const Image = createElement("Image", "image");
Svg.Image = Image;

export const Line = createElement("Line", "line");
Svg.Line = Line;

export const LinearGradient = createElement("LinearGradient", "linearGradient");
Svg.LinearGradient = LinearGradient;

export const Marker = createElement("Marker", "marker");
Svg.Marker = Marker;

export const Mask = createElement("Mask", "mask");
Svg.Mask = Mask;

export const Path = createElement("Path", "path");
Svg.Path = Path;

export const Pattern = createElement("Pattern", "pattern");
Svg.Pattern = Pattern;

export const Polygon = createElement("Polygon", "polygon");
Svg.Polygon = Polygon;

export const Polyline = createElement("Polyline", "polyline");
Svg.Polyline = Polyline;

export const RadialGradient = createElement("RadialGradient", "radialGradient");
Svg.RadialGradient = RadialGradient;

export const Rect = createElement("Rect", "rect");
Svg.Rect = Rect;

export const Stop = createElement("Stop", "stop");
Svg.Stop = Stop;

export const Svg = createElement("Svg", "svg");
Svg.Svg = Svg;

export const Symbol = createElement("Symbol", "symbol");
Svg.Symbol = Symbol;

export const Text = createElement("Text", "text");
Svg.Text = Text;

export const TextPath = createElement("TextPath", "textPath");
Svg.TextPath = TextPath;

export const TSpan = createElement("TSpan", "tspan");
Svg.TSpan = TSpan;

export const Use = createElement("Use", "use");
Svg.Use = Use;

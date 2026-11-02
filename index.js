/** @module typedArrayInterleave */

/**
 * @typedef {Int8Array
 *   | Uint8Array
 *   | Uint8ClampedArray
 *   | Int16Array
 *   | Uint16Array
 *   | Int32Array
 *   | Uint32Array
 *   | Float16Array
 *   | Float32Array
 *   | Float64Array} TypedArray
 */

/**
 * Interleave n typed arrays
 *
 * @param {function(new:TypedArray, number)} ResultConstructor Returned typed
 *   array constructor
 * @param {number[]} elements Number of elements to group for each typed array
 * @param {...TypedArray} arrays Arrays to interleave
 * @returns {TypedArray}
 * @alias module:typedArrayInterleave
 */
function typedArrayInterleave(ResultConstructor, elements, ...arrays) {
  const totalLength = arrays.reduce((total, arr) => total + arr.length, 0);
  const result = new ResultConstructor(totalLength);
  const stride = elements.reduce((a, b) => a + b);

  for (let i = 0; i < totalLength; i++) {
    let offset = 0;
    for (let j = 0; j < elements.length; j++) {
      for (let k = 0; k < elements[j]; k++) {
        result[i * stride + offset] = arrays[j][elements[j] * i + k];
        offset++;
      }
    }
  }

  return result;
}

export default typedArrayInterleave;

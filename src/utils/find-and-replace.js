const defaultOptions = {
  recursive: true,
};

/**
 * Replace a string in path
 *
 * @param path {string} - path to work the replacement in
 * @param pattern {string} - the pattern to search for
 * @param value {string} - what the pattern will be replaced with
 * @param options {object}
 * @param options.recursively {boolean} - should the replacement go recursively through directories and files inside the path
 */
export default function findAndReplace(path, pattern, value, options = defaultOptions) {

}

# WordPress Detect

A utility to detect if a website is running on WordPress.

## Installation

You can install this package using npm:

```bash
npm install wordpress-detect
```

## Usage

### CommonJS

```javascript
const { isWordPress } = require('wordpress-detect');

isWordPress('https://example.com').then(isWP => {
    console.log(isWP ? 'This is a WordPress site.' : 'This is NOT a WordPress site.');
});
```

### ES6

```javascript
import { isWordPress } from 'wordpress-detect';

isWordPress('https://example.com').then(isWP => {
    console.log(isWP ? 'This is a WordPress site.' : 'This is NOT a WordPress site.');
});
```

## Future Plans

- Detect the WordPress theme name.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
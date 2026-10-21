# Solar Potential API - PHP Package

Solar Potential calculates solar energy potential for any latitude and longitude coordinates. It returns average daily usable sunlight hours and optimal panel orientation, with paid plans adding yearly totals and cloud factors.

## Installation

Install via Composer:

```bash
composer require apiverve/solarpotential
```

## Getting Started

Get your API key at [APIVerve](https://apiverve.com)

### Basic Usage

```php
<?php

require_once 'vendor/autoload.php';

use APIVerve\Solarpotential\Client;

// Initialize the client
$client = new Client('YOUR_API_KEY');

// Make a request
$response = $client->execute([
    'lat' => 37.7749,
    'lon' => -122.4194
]);

// Print the response
print_r($response);
```


### Error Handling

```php
use APIVerve\Solarpotential\Client;
use APIVerve\Solarpotential\Exceptions\APIException;
use APIVerve\Solarpotential\Exceptions\ValidationException;

try {
    $response = $client->execute(['lat' => 37.7749, 'lon' => -122.4194]);
    print_r($response['data']);
} catch (ValidationException $e) {
    echo "Validation error: " . implode(', ', $e->getErrors());
} catch (APIException $e) {
    echo "API error: " . $e->getMessage();
    echo "Status code: " . $e->getStatusCode();
}
```

### Debug Mode

```php
// Enable debug logging
$client = new Client(
    apiKey: 'YOUR_API_KEY',
    debug: true
);
```

## Example Response

```json
{
  "status": "ok",
  "error": null,
  "data": {
    "coordinates": {
      "latitude": 37.7749,
      "longitude": -122.4194
    },
    "usableHours": {
      "avgDailyUsableSunlightHours": 12.19,
      "yearlyUsableSunlightHoursRaw": 4448,
      "adjustedYearlyUsableSunlightHours": 1557
    },
    "bestDirection": "South",
    "cloudFactor": 0.35,
    "disclaimer": "This is a rough estimate based on coordinates and general climate patterns. For precise solar potential, consider local weather patterns, obstructions, and professional assessments."
  }
}
```

## Requirements

- PHP 7.4 or higher
- Guzzle HTTP client

## Documentation

For more information, visit the [API Documentation](https://docs.apiverve.com/ref/solarpotential?utm_source=packagist&utm_medium=referral&utm_content=readme).

## Support

- Website: [https://apiverve.com/marketplace/solarpotential?utm_source=php&utm_medium=referral&utm_content=readme](https://apiverve.com/marketplace/solarpotential?utm_source=php&utm_medium=referral&utm_content=readme)
- Email: hello@apiverve.com

## License

This package is available under the [MIT License](LICENSE).

# Solar Potential API - Ruby Gem

Solar Potential calculates solar energy potential for any latitude and longitude coordinates. It returns average daily usable sunlight hours and optimal panel orientation, with paid plans adding yearly totals and cloud factors.

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'apiverve_solarpotential'
```

And then execute:

```bash
$ bundle install
```

Or install it yourself as:

```bash
$ gem install apiverve_solarpotential
```

## Getting Started

Get your API key at [APIVerve](https://apiverve.com)

### Basic Usage

```ruby
require 'apiverve_solarpotential'

# Initialize the client
client = APIVerve::Solarpotential::Client.new(api_key: "YOUR_API_KEY")

# Make a request
response = client.execute({
  lat: 37.7749,
  lon: -122.4194
})

# Print the response
puts response
```


### Error Handling

```ruby
begin
  response = client.execute({ lat: 37.7749, lon: -122.4194 })
  puts response["data"]
rescue APIVerve::Solarpotential::ValidationError => e
  puts "Validation error: #{e.errors.join(', ')}"
rescue APIVerve::Solarpotential::APIError => e
  puts "API error: #{e.message}"
  puts "Status code: #{e.status_code}"
end
```

### Debug Mode

```ruby
# Enable debug logging
client = APIVerve::Solarpotential::Client.new(
  api_key: "YOUR_API_KEY",
  debug: true
)
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

## Documentation

For more information, visit the [API Documentation](https://docs.apiverve.com/ref/solarpotential?utm_source=rubygems&utm_medium=referral&utm_content=readme).

## Support

- Website: [https://apiverve.com/marketplace/solarpotential?utm_source=ruby&utm_medium=referral&utm_content=readme](https://apiverve.com/marketplace/solarpotential?utm_source=ruby&utm_medium=referral&utm_content=readme)
- Email: hello@apiverve.com

## License

This gem is available under the [MIT License](LICENSE).

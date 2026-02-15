using System;
using System.Collections.Generic;
using System.Text;
using Newtonsoft.Json;

namespace APIVerve.API.SolarPotential
{
    /// <summary>
    /// Query options for the Solar Potential API
    /// </summary>
    public class SolarPotentialQueryOptions
    {
        /// <summary>
        /// The latitude of the location
        /// </summary>
        [JsonProperty("lat")]
        public string Lat { get; set; }

        /// <summary>
        /// The longitude of the location
        /// </summary>
        [JsonProperty("lon")]
        public string Lon { get; set; }
    }
}

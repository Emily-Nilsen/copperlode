export function BobKatterBeerForm() {
  return (
    <div id="bob-katter-beer" className="max-w-xl p-4 mx-auto my-8">
      {/* Clickable image that links to the form section */}
      <div className="mb-6">
        <a href="#bob-katter-beer">
          <img
            src="/path/to/bob-katter-beer.jpg" // Update with your actual image path
            alt="Bob Katter Beer"
            className="w-full h-auto rounded-md shadow-md cursor-pointer"
          />
        </a>
      </div>

      {/* Netlify Form */}
      <form
        name="bob-katter-waitlist"
        method="POST"
        data-netlify="true"
        className="space-y-4"
      >
        {/* Hidden input for Netlify */}
        <input type="hidden" name="form-name" value="bob-katter-waitlist" />
        {/* Honeypot field for spam prevention */}
        <p className="hidden">
          <label>
            Don’t fill this out if you’re human: <input name="bot-field" />
          </label>
        </p>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block mb-1 text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Address Field */}
        <div>
          <label htmlFor="address" className="block mb-1 text-sm font-medium">
            Address
          </label>
          <textarea
            id="address"
            name="address"
            required
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Units Field */}
        <div>
          <label htmlFor="units" className="block mb-1 text-sm font-medium">
            Desired Units
          </label>
          <select
            id="units"
            name="units"
            required
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="">Select an option</option>
            <option value="6-pack">6-pack</option>
            <option value="4-pack">4-pack</option>
            <option value="16-pack-carton">16-pack carton</option>
            <option value="24-pack-carton">24-pack carton</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
        >
          Join Waitlist
        </button>
      </form>
    </div>
  );
}

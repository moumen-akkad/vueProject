<template>
  <section class="p-6 max-w-xl mx-auto space-y-6 bg-white rounded shadow">
    <h1 class="text-2xl font-bold text-gray-800">Business Report Figures</h1>

    <div class="border rounded p-4 bg-gray-50">
      <h2 class="font-semibold mb-4 text-lg">Main Business Report</h2>

      <div class="mb-3">
        <label class="block mb-1">Financial Year *</label>
        <input type="text" class="w-full border rounded p-2" placeholder="e.g., 2024" />
      </div>

      <div class="mb-3">
        <label class="block mb-1">Begin of Report Time Frame *</label>
        <input type="date" class="w-full border rounded p-2" />
      </div>

      <div class="mb-3">
        <label class="block mb-1">End of Report Time Frame *</label>
        <input type="date" class="w-full border rounded p-2" />
      </div>

      <div class="mb-3">
        <label class="block mb-1">Year of Publication</label>
        <input type="text" class="w-full border rounded p-2" placeholder="e.g., 2025" />
      </div>

      <div class="mb-3">
        <label class="block mb-1">Turnover</label>
        <input type="text" class="w-full border rounded p-2" placeholder="e.g., €1,000,000" />
      </div>

      <div class="mb-3">
        <label class="block mb-1">Investment Volume</label>
        <input type="text" class="w-full border rounded p-2" />
      </div>

      <div class="mb-3">
        <label class="block mb-1">Equity Ratio</label>
        <input type="text" class="w-full border rounded p-2" placeholder="e.g., 45%" />
      </div>

      <div class="mb-3">
        <label class="block mb-1">Total Employees</label>
        <input type="number" class="w-full border rounded p-2" />
      </div>

      <!-- Customers Section -->
      <div class="mt-6 border-t pt-4">
        <h3 class="font-semibold text-md mb-3">Customers</h3>

        <div class="mb-3">
          <label class="block mb-1">Total Number of Customers</label>
          <input type="number" class="w-full border rounded p-2" />
        </div>

        <div class="mb-3">
          <label class="block mb-1">Reference Customer Website</label>
          <input type="url" class="w-full border rounded p-2" placeholder="https://example.com" />
        </div>
      </div>

      <div class="mt-6">
        <label class="block mb-2 font-medium">Upload Consolidated Data File</label>
        <div class="flex items-center gap-4">
          <button
            class="bg-gray-200 text-sm px-4 py-2 rounded hover:bg-gray-300 transition"
          >
            Choose File
          </button>
          <span class="text-gray-500 italic">No file chosen</span>
        </div>
      </div>
    </div>


    <button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
      Add More
    </button>

    <div class="flex justify-between pt-4">
      <RouterLink to="/company/digital"
        class="bg-gray-500 text-white px-5 py-2 rounded hover:bg-gray-600 transition">
        Previous
      </RouterLink>

      <RouterLink to="/company/gov"
        class="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700 transition">
        Next
      </RouterLink>
    </div>
  </section>
</template>

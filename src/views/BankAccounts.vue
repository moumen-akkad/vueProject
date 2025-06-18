<template>
  <section class="p-6 max-w-xl mx-auto space-y-6 bg-white rounded shadow">
    <h1 class="text-2xl font-bold text-gray-800">Bank Accounts</h1>

    <div class="border rounded p-4 bg-gray-50">
      <h2 class="font-semibold mb-4 text-lg">Main Bank Account</h2>

      <div class="mb-3">
        <label class="block mb-1">Account Holder *</label>
        <input type="text" class="w-full border rounded p-2" />
      </div>

      <div class="mb-3">
        <label class="block mb-1">Bank Account Type</label>
        <input type="text" class="w-full border rounded p-2" />
      </div>

      <div class="mb-3">
        <label class="block mb-1">IBAN *</label>
        <input type="text" class="w-full border rounded p-2" />
      </div>

      <div class="mb-3">
        <label class="block mb-1">BIC *</label>
        <input type="text" class="w-full border rounded p-2" />
      </div>
    </div>

    <button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
      Add More
    </button>

    <div class="flex justify-between pt-6">
      <RouterLink to="/company/id" class="bg-gray-500 text-white px-5 py-2 rounded hover:bg-gray-600">
        Previous
      </RouterLink>
      <RouterLink to="/company/digital" class="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700">
        Next
      </RouterLink>
    </div>
  </section>
</template>

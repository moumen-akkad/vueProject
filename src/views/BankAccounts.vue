<template>
  <section class="p-6 max-w-2xl mx-auto space-y-6 bg-white rounded shadow">
    <h1 class="text-2xl font-bold text-gray-800">Bank Accounts</h1>

    <div class="space-y-6">
      <div class="space-y-4">
        <h2 class="text-lg font-semibold text-gray-700">Main Bank Account</h2>

        <FormField label="Account Holder *" tip="Required. Full name or company name registered on the account.">
          <input type="text" class="w-full border rounded px-3 py-2" />
        </FormField>

        <FormField label="Bank Account Type" tip="Optional. e.g., Checking, Savings, Business.">
          <input type="text" class="w-full border rounded px-3 py-2" />
        </FormField>

        <FormField label="IBAN *" tip="Required. International Bank Account Number.">
          <input type="text" class="w-full border rounded px-3 py-2" />
        </FormField>

        <FormField label="BIC *" tip="Required. Bank Identifier Code (SWIFT).">
          <input type="text" class="w-full border rounded px-3 py-2" />
        </FormField>
      </div>

      <!-- Optional: Add more sections for additional bank accounts if needed -->
    </div>

    <button class="bg-blue-500 text-white px-5 py-2 rounded hover:bg-blue-600 transition mt-4">
      Add More
    </button>

    <div class="flex justify-between pt-6">
      <RouterLink to="/company/id" class="bg-gray-500 text-white px-5 py-2 rounded hover:bg-gray-600 transition">
        Previous
      </RouterLink>
      <RouterLink to="/company/digital" class="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700 transition">
        Next
      </RouterLink>
    </div>
  </section>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import FormField from '../components/FormField.vue';
</script>

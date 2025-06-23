<template>
  <section class="p-6 max-w-2xl mx-auto space-y-6 bg-white rounded shadow">
    <h1 class="text-2xl font-bold text-gray-800">Business Report Figures</h1>

    <div class="space-y-6">
      <!-- Main Business Report -->
      <div class="space-y-4">
        <FormField label="Financial Year *" tip="Required. Fiscal year covered by the report (e.g., 2024).">
          <input type="text" class="w-full border rounded px-3 py-2" placeholder="e.g., 2024" />
        </FormField>

        <FormField label="Begin of Report Time Frame *" tip="Required. Start date of the reporting period.">
          <input type="date" class="w-full border rounded px-3 py-2" />
        </FormField>

        <FormField label="End of Report Time Frame *" tip="Required. End date of the reporting period.">
          <input type="date" class="w-full border rounded px-3 py-2" />
        </FormField>

        <FormField label="Year of Publication" tip="Optional. Year the report is published.">
          <input type="text" class="w-full border rounded px-3 py-2" placeholder="e.g., 2025" />
        </FormField>

        <FormField label="Turnover" tip="Optional. Total revenue during the reporting period.">
          <input type="text" class="w-full border rounded px-3 py-2" placeholder="e.g., €1,000,000" />
        </FormField>

        <FormField label="Investment Volume" tip="Optional. Total amount invested during this period.">
          <input type="text" class="w-full border rounded px-3 py-2" />
        </FormField>

        <FormField label="Equity Ratio" tip="Optional. Equity ratio percentage (e.g., 45%).">
          <input type="text" class="w-full border rounded px-3 py-2" placeholder="e.g., 45%" />
        </FormField>

        <FormField label="Total Employees" tip="Optional. Number of employees during the reporting period.">
          <input type="number" class="w-full border rounded px-3 py-2" />
        </FormField>
      </div>

      <hr />

      <!-- Customers -->
      <div class="space-y-4">
        <FormField label="Total Number of Customers" tip="Optional. Total number of customers served.">
          <input type="number" class="w-full border rounded px-3 py-2" />
        </FormField>

        <FormField label="Reference Customer Website" tip="Optional. Website of a notable or representative customer.">
          <input type="url" class="w-full border rounded px-3 py-2" placeholder="https://example.com" />
        </FormField>
      </div>

      <hr />

      <!-- File Upload -->
    <div class="space-y-2">
      <FormField label="Upload Consolidated Data File" tip="Optional. Upload full report file as PDF, Excel, etc.">
        <input type="file" class="w-full border rounded px-3 py-2" />
      </FormField>
    </div>

    </div>

    <!-- Add More -->
    <button class="bg-blue-500 text-white px-5 py-2 rounded hover:bg-blue-600 transition mt-4">
      Add More
    </button>

    <!-- Navigation -->
    <div class="flex justify-between pt-6">
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

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import FormField from '../components/FormField.vue'
</script>

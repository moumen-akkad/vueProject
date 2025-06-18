<template>
    <section class="p-6 max-w-2xl mx-auto space-y-6 bg-white rounded shadow">
        <h1 class="text-2xl font-bold text-gray-800">Digital Interfaces</h1>

        <div class="space-y-4">
            <!-- ERP System -->
            <FormField label="ERP System Name" tip="Optional. The name of the ERP software used (e.g., SAP, Odoo).">
                <input type="text" class="w-full border rounded px-3 py-2" />
            </FormField>

            <FormField label="ERP Version" tip="Optional. Version of the ERP system in use (e.g., 2023.1).">
                <input type="text" class="w-full border rounded px-3 py-2" />
            </FormField>

            <!-- Email System -->
            <FormField label="Email System Name"
                tip="Optional. The software used to manage company email (e.g., Outlook, Gmail).">
                <input type="text" class="w-full border rounded px-3 py-2" />
            </FormField>

            <!-- CAD Tools -->
            <FormField label="CAD Tools" tip="Optional. Enter any CAD tools used (e.g., AutoCAD, SolidWorks).">
                <input type="text" placeholder="Comma separated" class="w-full border rounded px-3 py-2" />
            </FormField>

            <hr class="my-4" />

            <!-- Data Exchange -->
            <FormField label="Encrypted Data Transmission"
                tip="Does the company support secure data transmission (e.g., HTTPS, TLS)?">
                <select class="w-full border rounded px-3 py-2">
                    <option disabled selected>Select</option>
                    <option>Yes</option>
                    <option>No</option>
                </select>
            </FormField>

            <FormField label="Supports EDI"
                tip="Electronic Data Interchange — direct computer-to-computer transactions.">
                <select class="w-full border rounded px-3 py-2">
                    <option disabled selected>Select</option>
                    <option>Yes</option>
                    <option>No</option>
                </select>
            </FormField>

            <FormField label="Supports Web EDI" tip="Web-based EDI platform usage.">
                <select class="w-full border rounded px-3 py-2">
                    <option disabled selected>Select</option>
                    <option>Yes</option>
                    <option>No</option>
                </select>
            </FormField>

            <FormField label="Outgoing E-Invoice Format"
                tip="Optional. Format used to send e-invoices (e.g., ZUGFeRD, XRechnung).">
                <input type="text" class="w-full border rounded px-3 py-2" />
            </FormField>

            <FormField label="CAD File Formats" tip="Optional. File formats used for CAD drawings (e.g., STEP, DXF).">
                <input type="text" placeholder="Comma separated" class="w-full border rounded px-3 py-2" />
            </FormField>
        </div>

        <div class="flex justify-between pt-6">
            <RouterLink to="/company/banks"
                class="bg-gray-500 text-white px-5 py-2 rounded hover:bg-gray-600 transition">
                Previous
            </RouterLink>

            <RouterLink to="/company/reports"
                class="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700 transition">
                Next
            </RouterLink>
        </div>
    </section>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import FormField from '@/components/FormField.vue';
</script>

// app/components/ProfitCalculatorForm.tsx
import React from "react";

export default function ProfitCalculatorForm() {
    return (
        <main className="flex min-h-[calc(100vh-4rem)] items-center justify-center py-12 px-4">
            <div className="w-full max-w-3xl rounded-2xl bg-white/95 p-8 text-black shadow-xl">
                <h1 className="mb-6 rounded-xl bg-blue-50 py-3 text-center text-2xl font-semibold shadow-sm">
                    Profit Calculator
                </h1>

                <form className="space-y-8">
                    {/* Vehicle & Rental */}
                    <fieldset className="space-y-4">
                        <legend className="text-xl font-semibold">Vehicle &amp; Rental</legend>

                        {/* Car name / model */}
                        <div>
                            <label htmlFor="carName" className="mb-1 block text-sm font-semibold">
                                Car name / model <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                id="carName"
                                name="carName"
                                placeholder="Mercedes-AMG G63"
                                required
                                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-base focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                            />
                            <p className="mt-1 text-xs text-gray-500">
                                Please enter a car name or model.
                            </p>
                        </div>

                        {/* Initial asset cost (NGN) */}
                        <div>
                            <label
                                htmlFor="initialAssetCostNgn"
                                className="mb-1 block text-sm font-semibold"
                            >
                                Initial asset cost (NGN) <span className="text-red-500">*</span>
                            </label>
                            <div className="flex items-stretch">
                                <span className="inline-flex items-center rounded-l-lg border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm">
                                    ₦
                                </span>
                                <input
                                    type="number"
                                    id="initialAssetCostNgn"
                                    name="initialAssetCostNgn"
                                    min={0}
                                    step={1000}
                                    inputMode="decimal"
                                    placeholder="10000000"
                                    required
                                    className="w-full rounded-r-lg border border-gray-300 px-3 py-2 text-base focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                                />
                            </div>
                            <p className="mt-1 text-xs text-gray-500">
                                Please enter a valid amount (≥ 0).
                            </p>
                        </div>

                        {/* Daily rental rate (NGN / day) */}
                        <div>
                            <label
                                htmlFor="dailyRentalRateNgn"
                                className="mb-1 block text-sm font-semibold"
                            >
                                Daily rental rate (NGN / day) <span className="text-red-500">*</span>
                            </label>
                            <div className="flex items-stretch">
                                <span className="inline-flex items-center rounded-l-lg border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm">
                                    ₦
                                </span>
                                <input
                                    type="number"
                                    id="dailyRentalRateNgn"
                                    name="dailyRentalRateNgn"
                                    min={0}
                                    step={1000}
                                    inputMode="decimal"
                                    placeholder="250000"
                                    required
                                    className="w-full border border-gray-300 px-3 py-2 text-base focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                                />
                                <span className="inline-flex items-center rounded-r-lg border border-l-0 border-gray-300 bg-gray-50 px-3 text-sm">
                                    /day
                                </span>
                            </div>
                            <p className="mt-1 text-xs text-gray-500">
                                Please enter a valid daily rate (≥ 0).
                            </p>
                        </div>

                        {/* Days rented per month */}
                        <div>
                            <label
                                htmlFor="daysRentedPerMonth"
                                className="mb-1 block text-sm font-semibold"
                            >
                                Days rented per month <span className="text-red-500">*</span>
                            </label>
                            <div className="flex items-stretch">
                                <input
                                    type="number"
                                    id="daysRentedPerMonth"
                                    name="daysRentedPerMonth"
                                    min={0}
                                    max={31}
                                    step={1}
                                    inputMode="numeric"
                                    placeholder="20"
                                    required
                                    className="w-full rounded-l-lg border border-gray-300 px-3 py-2 text-base focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                                />
                                <span className="inline-flex items-center rounded-r-lg border border-l-0 border-gray-300 bg-gray-50 px-3 text-sm">
                                    days
                                </span>
                            </div>
                            <p className="mt-1 text-xs text-gray-500">
                                Please enter a value between 0 and 31.
                            </p>
                        </div>
                    </fieldset>

                    {/* Revenue Sharing */}
                    <fieldset className="space-y-4">
                        <legend className="text-xl font-semibold">Revenue Sharing</legend>

                        {/* Dealer % */}
                        <div>
                            <label
                                htmlFor="dealerRevenueSharePct"
                                className="mb-1 block text-sm font-semibold"
                            >
                                Dealer revenue share (%) <span className="text-red-500">*</span>
                            </label>
                            <div className="flex items-stretch">
                                <input
                                    type="number"
                                    id="dealerRevenueSharePct"
                                    name="dealerRevenueSharePct"
                                    min={0}
                                    max={100}
                                    step={0.01}
                                    inputMode="decimal"
                                    placeholder="60"
                                    required
                                    className="w-full rounded-l-lg border border-gray-300 px-3 py-2 text-base focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                                />
                                <span className="inline-flex items-center rounded-r-lg border border-l-0 border-gray-300 bg-gray-50 px-3 text-sm">
                                    %
                                </span>
                            </div>
                            <p className="mt-1 text-xs text-gray-500">
                                Enter 0–100. Dealer % + Azien % should total 100.
                            </p>
                        </div>

                        {/* Azien % */}
                        <div>
                            <label
                                htmlFor="azienRevenueSharePct"
                                className="mb-1 block text-sm font-semibold"
                            >
                                Azien revenue share (%) <span className="text-red-500">*</span>
                            </label>
                            <div className="flex items-stretch">
                                <input
                                    type="number"
                                    id="azienRevenueSharePct"
                                    name="azienRevenueSharePct"
                                    min={0}
                                    max={100}
                                    step={0.01}
                                    inputMode="decimal"
                                    placeholder="40"
                                    required
                                    className="w-full rounded-l-lg border border-gray-300 px-3 py-2 text-base focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                                />
                                <span className="inline-flex items-center rounded-r-lg border border-l-0 border-gray-300 bg-gray-50 px-3 text-sm">
                                    %
                                </span>
                            </div>
                        </div>

                        <p className="text-xs text-gray-500">
                            Dealer % + Azien % must equal 100%.
                        </p>
                    </fieldset>

                    {/* Time Horizon & Depreciation */}
                    <fieldset className="space-y-4">
                        <legend className="text-xl font-semibold">
                            Time Horizon &amp; Depreciation
                        </legend>

                        {/* Holding period */}
                        <div>
                            <label
                                htmlFor="holdingPeriodYears"
                                className="mb-1 block text-sm font-semibold"
                            >
                                Holding period (years) <span className="text-red-500">*</span>
                            </label>
                            <div className="flex items-stretch">
                                <input
                                    type="number"
                                    id="holdingPeriodYears"
                                    name="holdingPeriodYears"
                                    min={1}
                                    max={10}
                                    step={1}
                                    inputMode="numeric"
                                    defaultValue={3}
                                    required
                                    className="w-full rounded-l-lg border border-gray-300 px-3 py-2 text-base focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                                />
                                <span className="inline-flex items-center rounded-r-lg border border-l-0 border-gray-300 bg-gray-50 px-3 text-sm">
                                    years
                                </span>
                            </div>
                            <p className="mt-1 text-xs text-gray-500">
                                Enter a whole number from 1 to 10.
                            </p>
                        </div>

                        {/* Year 1–3 depreciation */}
                        {[
                            { id: "depYear1Pct", label: "Year 1 depreciation rate (%)", placeholder: "20.00" },
                            { id: "depYear2Pct", label: "Year 2 depreciation rate (%)", placeholder: "15.00" },
                            { id: "depYear3Pct", label: "Year 3 depreciation rate (%)", placeholder: "10.00" },
                        ].map((field) => (
                            <div key={field.id}>
                                <label
                                    htmlFor={field.id}
                                    className="mb-1 block text-sm font-semibold"
                                >
                                    {field.label} <span className="text-red-500">*</span>
                                </label>
                                <div className="flex items-stretch">
                                    <input
                                        type="number"
                                        id={field.id}
                                        name={field.id}
                                        min={0}
                                        max={100}
                                        step={0.01}
                                        inputMode="decimal"
                                        placeholder={field.placeholder}
                                        required
                                        className="w-full rounded-l-lg border border-gray-300 px-3 py-2 text-base focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                                    />
                                    <span className="inline-flex items-center rounded-r-lg border border-l-0 border-gray-300 bg-gray-50 px-3 text-sm">
                                        %
                                    </span>
                                </div>
                            </div>
                        ))}

                        <p className="text-xs text-gray-500">
                            Tip: Use your expected yearly % decline (straight-line or your chosen
                            method).
                        </p>
                    </fieldset>

                    {/* Insurance & Maintenance */}
                    <fieldset className="space-y-4">
                        <legend className="text-xl font-semibold">
                            Insurance &amp; Maintenance
                        </legend>

                        {/* Annual insurance (% of IAC) */}
                        <div>
                            <label
                                htmlFor="annualInsuranceRatePctOfIac"
                                className="mb-1 block text-sm font-semibold"
                            >
                                Annual insurance rate (% of IAC){" "}
                                <span className="text-red-500">*</span>
                            </label>
                            <div className="flex items-stretch">
                                <input
                                    type="number"
                                    id="annualInsuranceRatePctOfIac"
                                    name="annualInsuranceRatePctOfIac"
                                    min={0}
                                    max={100}
                                    step={0.01}
                                    inputMode="decimal"
                                    placeholder="5.00"
                                    required
                                    className="w-full rounded-l-lg border border-gray-300 px-3 py-2 text-base focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                                />
                                <span className="inline-flex items-center rounded-r-lg border border-l-0 border-gray-300 bg-gray-50 px-3 text-sm">
                                    %
                                </span>
                            </div>
                            <p className="mt-1 text-xs text-gray-500">
                                IAC = Initial Asset Cost entered above.
                            </p>
                        </div>

                        {/* Annual maintenance (% of IAC) */}
                        <div>
                            <label
                                htmlFor="annualMaintenanceRatePctOfIac"
                                className="mb-1 block text-sm font-semibold"
                            >
                                Annual maintenance rate (% of IAC){" "}
                                <span className="text-red-500">*</span>
                            </label>
                            <div className="flex items-stretch">
                                <input
                                    type="number"
                                    id="annualMaintenanceRatePctOfIac"
                                    name="annualMaintenanceRatePctOfIac"
                                    min={0}
                                    max={100}
                                    step={0.01}
                                    inputMode="decimal"
                                    placeholder="7.50"
                                    required
                                    className="w-full rounded-l-lg border border-gray-300 px-3 py-2 text-base focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                                />
                                <span className="inline-flex items-center rounded-r-lg border border-l-0 border-gray-300 bg-gray-50 px-3 text-sm">
                                    %
                                </span>
                            </div>
                        </div>
                    </fieldset>

                    {/* Resale & Auction */}
                    <fieldset className="space-y-4">
                        <legend className="text-xl font-semibold">
                            Resale &amp; Auction
                        </legend>

                        {/* Final resale bonus (%) */}
                        <div>
                            <label
                                htmlFor="finalResaleBonusPct"
                                className="mb-1 block text-sm font-semibold"
                            >
                                Final resale bonus (%) <span className="text-red-500">*</span>
                            </label>
                            <div className="flex items-stretch">
                                <input
                                    type="number"
                                    id="finalResaleBonusPct"
                                    name="finalResaleBonusPct"
                                    min={0}
                                    max={100}
                                    step={0.01}
                                    inputMode="decimal"
                                    placeholder="5.00"
                                    required
                                    className="w-full rounded-l-lg border border-gray-300 px-3 py-2 text-base focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                                />
                                <span className="inline-flex items-center rounded-r-lg border border-l-0 border-gray-300 bg-gray-50 px-3 text-sm">
                                    %
                                </span>
                            </div>
                        </div>

                        {/* Azien auction commission (%) */}
                        <div>
                            <label
                                htmlFor="azienAuctionCommissionPct"
                                className="mb-1 block text-sm font-semibold"
                            >
                                Azien auction commission (%){" "}
                                <span className="text-red-500">*</span>
                            </label>
                            <div className="flex items-stretch">
                                <input
                                    type="number"
                                    id="azienAuctionCommissionPct"
                                    name="azienAuctionCommissionPct"
                                    min={0}
                                    max={100}
                                    step={0.01}
                                    inputMode="decimal"
                                    placeholder="2.50"
                                    required
                                    className="w-full rounded-l-lg border border-gray-300 px-3 py-2 text-base focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                                />
                                <span className="inline-flex items-center rounded-r-lg border border-l-0 border-gray-300 bg-gray-50 px-3 text-sm">
                                    %
                                </span>
                            </div>
                        </div>

                        <p className="text-xs text-gray-500">
                            Set percentages for resale incentives and commission (0–100).
                        </p>
                    </fieldset>

                    {/* Options */}
                    <fieldset className="space-y-4">
                        <legend className="text-xl font-semibold">Options (optional)</legend>

                        <div className="space-y-2">
                            {/* Email results */}
                            <label className="flex items-center gap-2 text-sm">
                                <input
                                    type="checkbox"
                                    id="emailResults"
                                    name="emailResults"
                                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                />
                                <span>Email me the results (PDF later)</span>
                            </label>

                            {/* Save scenario */}
                            <label className="flex items-center gap-2 text-sm">
                                <input
                                    type="checkbox"
                                    id="saveScenario"
                                    name="saveScenario"
                                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                />
                                <span>Save this scenario</span>
                            </label>
                        </div>

                        {/* Scenario name */}
                        <div>
                            <label
                                htmlFor="scenarioName"
                                className="mb-1 block text-sm font-semibold"
                            >
                                Scenario name
                            </label>
                            <input
                                type="text"
                                id="scenarioName"
                                name="scenarioName"
                                placeholder="e.g., G-Wagon v2"
                                maxLength={60}
                                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-base focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                            />
                            <p className="mt-1 text-xs text-gray-500">
                                Optional — up to 60 characters.
                            </p>
                        </div>
                    </fieldset>

                    {/* Buttons */}
                    <div className="mt-6 flex flex-wrap justify-center gap-4">
                        <button
                            type="reset"
                            className="rounded-lg border border-gray-300 px-6 py-2 text-base font-semibold text-gray-700 hover:bg-gray-100"
                        >
                            Reset
                        </button>
                        <button
                            type="submit"
                            className="rounded-lg bg-blue-600 px-6 py-2 text-base font-semibold text-white shadow hover:bg-blue-500"
                        >
                            Calculate
                        </button>
                    </div>
                </form>
            </div>
        </main>
    );
}

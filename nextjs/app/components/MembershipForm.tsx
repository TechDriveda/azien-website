// app/components/MembershipForm.tsx
import React from "react";

export default function MembershipForm() {
    return (
        <main className="flex min-h-[calc(100vh-4rem)] items-center justify-center py-12 px-4">
            <div className="w-full max-w-xl rounded-2xl bg-white/90 p-8 text-black shadow-xl">
                <h1 className="mb-6 rounded-xl bg-blue-50 py-3 text-center text-2xl font-semibold shadow-sm">
                    Membership Form
                </h1>

                <form
                    id="membershipForm"
                    className="space-y-5"
                    noValidate
                >
                    {/* First name */}
                    <div>
                        <label
                            htmlFor="firstName"
                            className="mb-1 block text-sm font-semibold"
                        >
                            First name <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            placeholder="e.g., Joe"
                            autoComplete="given-name"
                            pattern="^[A-Za-z][A-Za-z\s'\-]{1,39}$"
                            required
                            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-base focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                        />
                        <p className="mt-1 text-xs text-gray-500">
                            Please enter a valid first name.
                        </p>
                    </div>

                    {/* Last name */}
                    <div>
                        <label
                            htmlFor="lastName"
                            className="mb-1 block text-sm font-semibold"
                        >
                            Last name <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            placeholder="e.g., Smith"
                            autoComplete="family-name"
                            pattern="^[A-Za-z][A-Za-z\s'\-]{1,39}$"
                            required
                            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-base focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                        />
                        <p className="mt-1 text-xs text-gray-500">
                            Please enter a valid last name.
                        </p>
                    </div>

                    {/* Email */}
                    <div>
                        <label
                            htmlFor="email"
                            className="mb-1 block text-sm font-semibold"
                        >
                            Email address <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="name@example.com"
                            autoComplete="email"
                            inputMode="email"
                            autoCapitalize="off"
                            spellCheck="false"
                            required
                            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-base focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                        />
                        <p className="mt-1 text-xs text-gray-500">
                            Please provide a valid email address.
                        </p>
                    </div>

                    {/* Phone */}
                    <div>
                        <label
                            htmlFor="phone"
                            className="mb-1 block text-sm font-semibold"
                        >
                            Phone number <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            placeholder="+64 7xx xxx xxx"
                            autoComplete="tel"
                            inputMode="tel"
                            pattern="^[0-9\+\(\)\-\.\s]{6,20}$"
                            required
                            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-base focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                        />
                        <p className="mt-1 text-xs text-gray-500">
                            Use digits, spaces, +, ( ), - or . (6–20 characters).
                        </p>
                    </div>

                    {/* Membership type */}
                    <div>
                        <label
                            htmlFor="memberType"
                            className="mb-1 block text-sm font-semibold"
                        >
                            Membership type <span className="text-red-500">*</span>
                        </label>
                        <select
                            id="memberType"
                            name="memberType"
                            required
                            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-base focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                        >
                            <option value="">-- Select type --</option>
                            <option value="access">Access Member (Rent Cars)</option>
                            <option value="asset_owner">Asset Owner (Provide Cars)</option>
                            <option value="dealer">Dealer (Provide Cars)</option>
                        </select>
                    </div>

                    {/* Membership tier */}
                    <div>
                        <label
                            htmlFor="memberTier"
                            className="mb-1 block text-sm font-semibold"
                        >
                            Membership tier <span className="text-red-500">*</span>
                        </label>
                        <select
                            id="memberTier"
                            name="memberTier"
                            required
                            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-base focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                        >
                            <option value="">-- Select tier --</option>
                            <option value="basic">Basic</option>
                            <option value="plus">Plus</option>
                            <option value="premium">Premium</option>
                        </select>
                    </div>

                    {/* Submit button */}
                    <div className="mt-6 flex justify-center">
                        <button
                            type="submit"
                            className="w-full rounded-lg bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow hover:bg-blue-500 sm:w-auto"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </main>
    );
}

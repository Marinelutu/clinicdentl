# Implementation Plan - Fix Footer CTA Buttons

## Goal
Fix the "Call to Action" (CTA) buttons located before the footer on the Home, Services, Esthetic Stomatology (Cosmetic), How it Works (New Patients), and About Us pages. Currently, these buttons do not perform any action. They should open the "Book Online" modal.

## Analysis
- The `BookingModal` is currently coupled to the `Header` component and managed by local state. This makes it difficult for other buttons in the application to trigger the booking modal.
- The "Before Footer" CTA sections are duplicated code across multiple pages (`Home.tsx`, `Services.tsx`, `NewPatients.tsx`, etc.), leading to inconsistency and scattered logic.
- The `About.tsx` page currently contains a Stats section before the footer but lacks a persistent "Book Now" CTA, or the user expects one to be there.

## Proposed Solution
1.  **Global Booking Context**: Create a `BookingContext` to manage the open/close state of the `BookingModal`. This allows any component in the app to open the booking flow.
2.  **Move Booking Modal**: Move the `BookingModal` component to `App.tsx` (or a global layout) so it exists once and is controlled by the context.
3.  **Reusable CTA Component**: Create a customizable `CTASection` component that:
    - Accepts title, subtitle, and button configuration.
    - Automatically handles the "Book Now" functionality via `BookingContext`.
    - Supports different visual styles (Full-width vs Card-style used in Cosmetic page).
4.  **Refactor Pages**: Replace the hardcoded sections in the pages with the new `CTASection` component or update them to use the context.

## Detailed Steps

### 1. Create Booking Context
- **File**: `src/context/BookingContext.tsx`
- **Description**: Create a context that provides `isBookingOpen`, `openBooking`, and `closeBooking`.

### 2. Update Application Structure (`App.tsx`)
- Wrap the application in `BookingProvider`.
- Place `<BookingModal />` in `App.tsx` (controlled by the context).

### 3. Update Header (`src/components/Header.tsx`)
- Remove local `isBookingOpen` state.
- Use `useBooking()` hook to control the modal when the "Book Online" button is clicked.

### 4. Create CTA Component
- **File**: `src/components/CTASection.tsx`
- **Props**:
    - `title`: string
    - `subtitle`: string
    - `primaryButtonText`: string (defaults to generic "Book Appointment")
    - `secondaryButtonText`: string (optional)
    - `variant`: 'default' (full-width) | 'card' (boxed, like Cosmetic page)
- **Functionality**:
    - Primary button calls `openBooking()`.

### 5. Update Pages
- **Home (`Home.tsx`)**: Replace the final section with `<CTASection />`.
- **Services (`Services.tsx`)**: Replace the final section with `<CTASection />`.
- **New Patients (`NewPatients.tsx`)**: Replace the final section with `<CTASection />`.
- **Esthetic Stomatology (`Cosmetic.tsx`)**: Update the Card-style CTA to use `<CTASection variant="card" />` or manually wire up the `useBooking()` hook if the layout is highly specific.
- **About Us (`About.tsx`)**: Add the CTA button to the stats section or append the standard CTA section if that matches the design intent (User mentioned a button exists, likely expecting one).

## Verification
- Click the "Book Online" button in the Header -> Modal opens.
- Click the CTA button on Home page -> Modal opens.
- Click the CTA button on Services page -> Modal opens.
- Click the CTA button on Cosmetic page -> Modal opens.
- Click the CTA button on New Patients page -> Modal opens.
- Click the CTA button on About page -> Modal opens.

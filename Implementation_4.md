---
description: Implementation plan for the Before/After Image Slider component on the Cosmetic Dentistry page.
---

# Objective
Implement an interactive "Before and After" image slider component to showcase cosmetic dentistry results. This component will allow users to drag a slider to reveal either the "before" or "after" state of a smile transformation.

# Assets Generated
Two high-quality images have been generated for this feature:
1.  **Before**: `teeth_before_attempt2` (Shows current smile with minor imperfections)
2.  **After**: `teeth_after_attempt3` (Shows perfect, whitened smile, aligned with the 'before' image)

# Implementation Plan

1.  **Asset Preparation**
    - Move the generated artifact images to the project's public directory:
        - `public/images/teeth-before.png`
        - `public/images/teeth-after.png`

2.  **Create BeforeAfterSlider Component**
    - **File**: `src/components/BeforeAfterSlider.tsx`
    - **Props**:
        - `beforeImage`: string (URL)
        - `afterImage`: string (URL)
        - `alt`: string (Accessibility text)
    - **Functionality**:
        - Use a container with `relative` positioning.
        - Place the "After" image as a background or bottom layer.
        - Place the "Before" image on top, wrapped in a div with `overflow-hidden` or using `clip-path`.
        - Use a customized HTML `<input type="range">` overlaid on top to control the width/clip of the top image.
        - This ensures native touch support and accessibility (keyboard navigation).
        - Add a visual "slider handle" (vertical line with icon) that follows the input's thumb position.
    
    - **Styling (Tailwind)**:
        - Responsive container (full width or max-width).
        - Aspect ratio maintenance (e.g., `aspect-video` or matches image ratio).
        - Custom styling for the range input (invisible track, visible thumb logic if needed, or just handle positioning).

3.  **Integrate into Cosmetic Page**
    - **File**: `src/pages/Cosmetic.tsx`
    - Replace the existing `BeforeAfter` usage with the new `BeforeAfterSlider`.
    - Pass the new image paths (`/images/teeth-before.png`, `/images/teeth-after.png`).
    - Add a title and instruction text (e.g., "Move the slider to see the transformation").

4.  **Verification**
    - Visual check of alignment between before and after images.
    - Test slider interaction on mouse and touch.
    - Verify responsiveness on different screen sizes.

# Next Steps
- Await user approval of this plan.
- Execute the asset move and code implementation.

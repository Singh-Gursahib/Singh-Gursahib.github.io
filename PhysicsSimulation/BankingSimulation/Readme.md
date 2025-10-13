# 🚗 Banked Curve with Friction Simulator (p5.js)

This interactive simulation visualizes the physics governing a car navigating a circular, banked roadway, calculating the conditions required to prevent slipping based on gravity, normal force, and friction.

## ⚙️ Features

*   **Live Parameter Adjustment:** Control the bank angle ($\beta$), curve radius ($R$), car speed ($v$), static friction ($\mu_s$), kinetic friction ($\mu_k$), and car mass ($m$) via sliders.
*   **Safe Speed Calculation:** Dynamically computes the **Minimum Speed ($v_{min}$)** and **Maximum Speed ($v_{max}$)** that keep the car safely within the lane using the static friction coefficient ($\mu_s$).
*   **Status Indicators:** Real-time feedback on whether the car is **No Slip**, **Sliding Up** (too fast, kinetic friction $\mu_k$ active), or **Sliding Down** (too slow, kinetic friction $\mu_k$ active).
*   **Visual Dynamics:** The simulation shows the car moving along the path, with its radial position (`slipPosition`) updating when slipping occurs.
*   **Toggleable FBD:** A dynamic Free Body Diagram (FBD) showing the correctly rotated coordinate system, gravity ($\vec{mg}$), normal force ($\vec{N}$), and friction force ($\vec{f}$).

## 📖 Physics Overview

The simulation balances forces in two directions at every time step:

1.  **Perpendicular to the Incline (Y-axis):** Sum of forces equals $N \cos \beta - mg - f \sin \beta = 0$ (or similar, depending on chosen axis orientation).
2.  **Parallel to the Incline (X-axis, towards center):** The net force provides the required centripetal acceleration ($a_c = v^2/R$). $F_{net, parallel} = N \sin \beta + f \cos \beta = m a_c$.

### Key Formulas Used:

*   **Safe Speed Range (Static Friction $\mu_s$):**
    $$v_{max} = \sqrt{R g \frac{\sin\beta + \mu_s \cos\beta}{\cos\beta - \mu_s \sin\beta}}$$
    $$v_{min} = \sqrt{R g \frac{\sin\beta - \mu_s \cos\beta}{\cos\beta + \mu_s \sin\beta}}$$

*   **Slipping Force (Kinetic Friction $\mu_k$):** When $v < v_{min}$ or $v > v_{max}$, the friction force magnitude becomes $f = \mu_k N$.

## 🖥️ Setup & Running

This simulation is built entirely using **p5.js** within a single HTML file.

1.  Save the provided code as an `.html` file (e.g., `banked_curve.html`).
2.  Open the file in any modern web browser.
3.  Use the controls on the left to adjust parameters and observe the resulting force vectors, status, and car movement on the right.

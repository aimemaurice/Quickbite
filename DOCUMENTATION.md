# QuickBite — Full Project Documentation

**Course:** E-Commerce and Web Application
**Institution:** University of Lay Adventists of Kigali (UNILAK)
**Assignment:** Group Assignment II — UI/UX Design Using Figma

---

## Group Members

| Full Name | Registration Number |
|---|---|
| NDAHIRIWE Aime Maurice | 22977/2023 |
| DUSHIMIYEMUNGU Damour | 22821/2023 |
| ISHIMWE Olivier | 22558/2023 |

---

## Selected Application

**Food Delivery Application — QuickBite**

---

## 1. Problem Statement

### What problem does the application solve?

In many cities, people struggle to find a fast, reliable, and easy way to order food from their favourite restaurants. Traditional ordering methods — calling restaurants directly or walking in — are time-consuming and inconvenient, especially for busy students, working professionals, and families. Existing food delivery solutions can be complex, poorly designed, or unavailable in certain regions.

QuickBite solves this by providing a clean, intuitive food delivery platform where users can browse nearby restaurants, view menus, place orders, and track their deliveries — all from a single app.

### Who are the target users?

- University students looking for quick and affordable meals
- Working professionals with limited time during lunch or dinner hours
- Families who prefer to order in rather than cook
- Anyone aged 18–45 who is comfortable using a smartphone or web browser

### Why is the system important?

QuickBite reduces the friction between hunger and a hot meal. It empowers local restaurants to reach more customers digitally, while giving users a seamless, modern experience. In a growing digital economy, a well-designed food delivery app is not just convenient — it is essential infrastructure for urban life.

---

## 2. User Persona

### Persona 1 — The Busy Student

| Field | Details |
|---|---|
| **Name** | Kalisa Eric |
| **Age** | 21 |
| **Occupation** | University Student |
| **Location** | Kigali, Rwanda |
| **Devices** | Smartphone (Android) |
| **Goals** | Order affordable food quickly between classes; discover new restaurants near campus; track his order without calling the restaurant |
| **Challenges** | Limited budget; gets frustrated with slow or confusing apps; doesn't always have time to cook or go out |
| **Quote** | *"I just want to tap a few buttons and have food at my door before my next lecture."* |

### Persona 2 — The Working Professional

| Field | Details |
|---|---|
| **Name** | Uwimana Grace |
| **Age** | 29 |
| **Occupation** | Marketing Executive |
| **Location** | Kigali, Rwanda |
| **Devices** | Smartphone + Laptop |
| **Goals** | Order lunch during work breaks; save favourite restaurants; pay quickly and securely |
| **Challenges** | Very limited time; dislikes apps that require too many steps to complete an order; needs reliable delivery estimates |
| **Quote** | *"If ordering food takes more than 3 minutes, I'm going somewhere else."* |

---

## 3. User Flow Diagram

### Main User Flow

```
Launch App
    │
    ▼
Onboarding / Splash Screen
    │
    ▼
Sign Up / Login
    │
    ▼
Home Screen (Browse Restaurants & Categories)
    │
    ├──► Search / Filter by Category
    │
    ▼
Restaurant Page (View Menu & Items)
    │
    ▼
Item Detail Page (Customize & Add to Cart)
    │
    ▼
Cart Page (Review Order)
    │
    ▼
Checkout (Delivery Address + Payment Method)
    │
    ▼
Order Confirmation Screen
    │
    ▼
Order Tracking (Live Status)
    │
    ▼
Delivery Complete / Rate & Review
```

### Secondary Flows

- **Profile Flow:** Home → Profile → Edit Profile / Order History / Settings
- **Search Flow:** Home → Search Bar → Results → Restaurant → Item → Cart
- **Favourites Flow:** Home → Favourites → Saved Restaurants → Order

---

## 4. Wireframes (Low-Fidelity Design)

Low-fidelity wireframes were created to establish the layout and structure of the application before visual styling was applied. They focus on content placement, navigation, and user flow.

**Screens designed:**

1. **Onboarding / Splash Screen** — App logo, tagline, and Get Started button
2. **Login / Register Screen** — Email, password fields, social login options
3. **Home Screen** — Search bar, category filters, featured restaurants, promotions
4. **Restaurant Page** — Restaurant info, menu categories, food items with prices
5. **Cart Screen** — Order summary, item quantities, total price
6. **Checkout Screen** — Delivery address, payment method selection, place order button

> Wireframe exports are available in the `/wireframes` folder of this repository.

---

## 5. High-Fidelity UI Design

The high-fidelity designs translate the wireframes into polished, visually appealing interfaces. The design system maintains consistency across all screens using a defined color palette, typography, and component library.

### Design System

| Element | Choice | Reason |
|---|---|---|
| **Primary Color** | Orange `#F97316` | Energetic, associated with food and appetite |
| **Background** | White / Light Grey | Clean, modern, easy to read |
| **Typography** | Inter / Sans-serif | Highly legible on mobile screens |
| **Icons** | Lucide React icon set | Consistent, open-source, lightweight |
| **Components** | shadcn/ui + Radix UI | Accessible, composable, production-ready |

### Screens Designed (Minimum 6)

1. Splash / Onboarding Screen
2. Login & Registration Screen
3. Home Screen (restaurant listings, categories, banners)
4. Restaurant Detail & Menu Screen
5. Food Item Detail Screen (with customization options)
6. Shopping Cart Screen
7. Checkout & Payment Screen
8. Order Confirmation & Tracking Screen
9. User Profile Screen
10. Order History Screen

> All high-fidelity screen exports are available in the `/high-fidelity-designs` folder.

---

## 6. Interactive Prototype

The Figma prototype connects all screens with clickable interactions to simulate real application usage.

**Interactions implemented:**
- Tap "Get Started" → navigates to Login screen
- Login form submission → navigates to Home screen
- Tap restaurant card → opens Restaurant Detail page
- Tap "Add to Cart" → updates cart and shows confirmation toast
- Tap Cart icon → opens Cart screen
- Tap "Checkout" → navigates to Checkout screen
- Tap "Place Order" → shows Order Confirmation screen
- Bottom navigation bar → switches between Home, Search, Orders, and Profile

🔗 **View Interactive Prototype:** [QuickBite on Figma](https://www.figma.com/design/5xwkZDdnlxQ0xwOYQlTNJe/QuickBite-App)

---

## 7. Features Implemented

- User onboarding and authentication (Login / Register)
- Home dashboard with featured restaurants and category filters
- Restaurant browsing and menu viewing
- Food item detail with customization (size, quantity, add-ons)
- Shopping cart with order summary
- Checkout with delivery address and payment method
- Order confirmation and real-time tracking status
- User profile with order history
- Search and filter functionality
- Favourites / saved restaurants

---

## 8. Accessibility Considerations

QuickBite was designed with accessibility as a core principle, not an afterthought.

| Consideration | Implementation |
|---|---|
| **Font sizes** | Minimum 14px body text; 18px+ for headings to ensure readability |
| **Color contrast** | All text meets WCAG AA contrast ratio standards (4.5:1 minimum) |
| **Touch targets** | All interactive elements are at least 44x44px for easy tapping |
| **Navigation** | Clear, consistent bottom navigation bar visible on all main screens |
| **Labels** | All form inputs have visible labels, not just placeholders |
| **Error feedback** | Clear error messages shown inline when form validation fails |
| **Loading states** | Skeleton loaders used so users always know the app is working |
| **Consistent layout** | Repeated patterns across screens reduce cognitive load |

---

## 9. Challenges Faced

- **Balancing simplicity and features:** Food delivery apps can become overwhelming quickly. We focused on keeping the most important actions (browse, order, track) within two taps from the home screen.
- **Responsive layout:** Ensuring the design works well on both small mobile screens and larger tablet/desktop views required careful use of auto-layout in Figma.
- **Consistency across screens:** With many screens to design, maintaining a consistent visual language (spacing, colors, components) required a well-organized component library from the start.
- **Prototype navigation:** Linking all screens correctly in Figma's prototype mode took careful planning, especially for flows with multiple entry points (e.g., reaching the cart from different screens).

---

## 10. Conclusion

QuickBite demonstrates how thoughtful UI/UX design can transform a complex problem — getting food delivered quickly and reliably — into a smooth, enjoyable user experience. Through a structured design process that included research, wireframing, high-fidelity design, and interactive prototyping, our group built a comprehensive food delivery application prototype that is modern, accessible, and user-centered.

This project deepened our understanding of Figma as a professional design tool, and reinforced the importance of designing with real users in mind at every step of the process.

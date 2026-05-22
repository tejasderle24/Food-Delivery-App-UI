# Food Delivery App UI

## Project Overview
This is a React Native + Expo mobile UI project for a food delivery app.  
It includes onboarding, home/search/orders/profile tabs, restaurant detail flow, cart flow, and a profile drawer section.

The app now supports deep links such as:

`foodapp://restaurant/123`

which opens the `RestaurantDetail` screen directly with `restaurantId = "123"`.

## Tech Stack
- Expo SDK `~55.0.24`
- React `19.2.0`
- React Native `0.83.6`
- TypeScript `~5.9.2`
- React Navigation:
  - `@react-navigation/native`
  - `@react-navigation/native-stack`
  - `@react-navigation/bottom-tabs`
  - `@react-navigation/drawer`
- `react-native-gesture-handler`
- `react-native-reanimated`
- `react-native-safe-area-context`
- `react-native-screens`

## How to Run Locally
### Prerequisites
- Node.js (LTS recommended)
- npm or bun
- Expo CLI (via `npx expo ...`)
- Android Studio emulator and/or Xcode simulator (macOS) or Expo Go on device

### Install dependencies
```bash
bun install
```

### Start the app
```bash
bunx expo start
```

## Navigation Structure
High-level flow:

1. `RootStack` (Native Stack)
2. `Onboarding`
3. `HomeTabs` (Bottom Tabs)
4. `RestaurantDetail`
5. `Cart`

Bottom tabs inside `HomeTabs`:
- `Home`
- `Search`
- `Orders`
- `Profile`

Nested drawer under `Profile` tab:
- `Profile`
- `My Orders`
- `Settings`
- `Help & Support`

## Deep Linking Setup
Deep linking is configured with custom scheme + React Navigation linking config.

### 1) App scheme (`app.json`)
```json
{
  "expo": {
    "scheme": "foodapp"
  }
}
```

### 2) Navigation linking (`App.tsx`)
- Prefix: `foodapp://`
- Route mapping:
  - `RestaurantDetail` -> `restaurant/:restaurantId`

### Example deep link
- `foodapp://restaurant/123`

Expected behavior:
- App opens directly to `RestaurantDetail`
- `route.params.restaurantId` is `"123"`

## Screenshots (Optional)
Add screenshots to a folder like `docs/screenshots/`, then reference them here:

```md
![Onboarding](docs/screenshots/onboarding.png)
![Home](docs/screenshots/home.png)
![Restaurant Detail](docs/screenshots/restaurant-detail.png)
![Cart](docs/screenshots/cart.png)
![Profile Drawer](docs/screenshots/profile-drawer.png)
```

Suggested screenshots:
- Onboarding screen
- Home tab
- Restaurant detail screen
- Cart screen
- Profile drawer open state

## Assumptions Made
- Deep linking requirement was scoped to custom scheme links (`foodapp://...`), not universal links/app links.
- Existing route param type for `RestaurantDetail` (`restaurantId: string`) remains unchanged.
- Onboarding remains the default initial route unless the app is launched via a matching deep link.
- Deep link testing is expected on a development build or production build where custom scheme is installed.

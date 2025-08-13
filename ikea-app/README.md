# Dreamscape 2.0 - Interactive UI Development Project

 Responsive React application showcasing IKEA bedroom products with an interactive map of IKEA stores in Belgium.

##  Features

### All Required Pages Implemented
- **Introduction Page**: Welcome screen with smooth animations
- **Home Page**: Featured content with Spotify playlist integration and sleep tips
- **Product Overview**: Grid layout with search, filtering, and sorting
- **Product Detail**: Comprehensive product information with specifications
- **Map Page**: Interactive map showing all IKEA stores in Belgium

### Technical Requirements Met
- **Working Frontend**: Complete React application with all pages and flows
- **Responsive Layout**: Mobile-first design that adapts to all screen sizes
- **Smooth App Experience**: Optimized performance with proper loading states
- **IKEA Product Database**: Local JSON API with realistic product data
- **Interactive Map**: Leaflet.js integration with store locations and popups
- **Custom Layout**: Unique dark theme with modern UI component

## Map Features

- **8 IKEA stores** across Belgium
- **Interactive markers** with store information
- **Address popups** with Google Maps integration
- **Responsive map container**
- **Smooth zoom and pan controls**

## Product Features

- **Search functionality** across product names and categories
- **Category filtering** (Mattress, Bed, Curtains & Blinds)
- **Sorting options** (A-Z, Top rated, Price ascending/descending)
- **Detailed product pages** with specifications
- **Direct links to IKEA website**


## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ikea-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (one-way operation)

##  Project Structure

```
src/
├── api/
│   └── products.js          # Product data API
├── components/
│   ├── BottomNav.js         # Navigation component
│   └── BottomNav.css        # Navigation styles
├── pages/
│   ├── Introduction.js      # Welcome page
│   ├── Home.js             # Main home page
│   ├── ProductOverview.js  # Product listing
│   ├── ProductDetail.js    # Product details
│   ├── MapPage.js          # Interactive map
│   └── *.css               # Page-specific styles
├── App.js                  # Main app component
└── index.js               # App entry point
```

---

*Built by Agata Zareba using React *

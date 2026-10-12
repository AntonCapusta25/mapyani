# Netherlands Restaurants & Food Spots Map

Interactive Mapbox GL JS map application combining **Amsterdam** (4,976 restaurants) and **Enschede** (834 food spots) with real-time vector clustering, heatmaps, and filters. Ready for one-click hosting on Vercel.

## Highlights

- **Mapbox GL JS Engine**: Crisp 60fps dark-mode vector map using Mapbox style `mapbox://styles/mapbox/dark-v11`.
- **Multi-City Toggle**: Switch seamlessly between **Amsterdam** (4,976) and **Enschede** (834) with smooth camera flyTo animations.
- **Hyperzod UI Layout**:
  - **Merchants Mode**: Interactive clustering, cluster expansion zoom, and color-coded venue pins with detailed popups.
  - **Heatmap Mode**: Continuous density heatmap weighted by customer review counts.
- **Dynamic Filters**: Real-time name/keyword search, cuisine category dropdown, star ratings (3.0+ to 4.5+), and sort options (rating, reviews, name).
- **Vercel Zero-Config Deployment**: Optimized static web architecture ready for instant Vercel deployment.

## Repository Structure

- `index.html` - Main application entry point (Mapbox GL JS)
- `app.js` - Application logic, Mapbox layers, filtering
- `styles.css` - Dark theme styling, glassmorphic controls
- `restaurants_data.json` - Amsterdam dataset (4,976 restaurants)
- `enschede_restaurants_data.json` - Enschede dataset (834 restaurants)
- `amsterdam_pc4.geojson` - Amsterdam postal code boundary polygons
- `farms_data.json` - Farms and local producers dataset
- `chefs_data.json` - Chefs dataset
- `enschede.html` - Standalone Enschede map
- `chefs_map.html` - Pop-up kitchens map
- `vercel.json` - Vercel routing & CORS configuration

## Deploying to Vercel

### Automatic via GitHub
1. Connect this GitHub repository (`AntonCapusta25/mapyani`) to your Vercel account.
2. Select **Framework Preset: Other** (Root Directory `./`).
3. Click **Deploy**.

### Manual via Vercel CLI
```bash
vercel --prod
```

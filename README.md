# NAMA KARI KADAI - Restaurant Website

A fully responsive, visually captivating, and high-converting restaurant website built with React and modern web technologies. This project showcases authentic Indian cuisine with a focus on user experience, conversion optimization, and beautiful design.

## 🍽️ Features

### Core Functionality
- **Responsive Design**: Mobile-first approach with seamless desktop experience
- **Dynamic Menu System**: Filterable categories with search functionality
- **Reservation System**: Date/time picker with confirmation system
- **Special Combos**: Curated meal combinations with FOMO-driven offers
- **Contact Management**: Integrated contact form with business information
- **Dark/Light Theme**: Toggle between themes with persisted state

### Authentication & Role-Based Access
- **Admin Dashboard**: Menu management, analytics, booking overview
- **Staff Dashboard**: Task management, booking details, staff notes
- **Secure Authentication**: Firebase Auth integration with role-based access

### Conversion & Engagement Features
- **FOMO-Driven Offers**: Limited-time deals with countdown timers
- **Customer Testimonials**: Social proof with animated slider
- **Special Offers**: Time-based deals and loyalty programs
- **Sticky CTAs**: Mobile-optimized call-to-action buttons
- **Progress Indicators**: Visual feedback for user actions

### UI/UX Excellence
- **Indian Theme**: Deep reds, saffron yellows, and earthy tones
- **Smooth Animations**: Framer Motion for micro-interactions
- **Accessibility**: WCAG compliant with keyboard navigation
- **Performance**: Optimized loading and smooth transitions
- **SEO Optimized**: Meta tags, structured data, and semantic HTML

## 🚀 Tech Stack

- **Frontend**: React 18 with JavaScript
- **Routing**: React Router v6
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion
- **Forms**: React Hook Form with Yup validation
- **Authentication**: Firebase Auth
- **State Management**: Context API
- **Notifications**: React Hot Toast
- **Icons**: Lucide React
- **Deployment**: Vercel

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd nama-kari-kadai
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🔧 Configuration

### Firebase Setup
1. Create a Firebase project
2. Enable Authentication
3. Update `src/contexts/AuthContext.jsx` with your Firebase config
4. Add demo users for testing:
   - Admin: `admin@namakarikadai.com` / `admin123`
   - Staff: `staff@namakarikadai.com` / `staff123`

### Environment Variables
Create a `.env` file in the root directory:
```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

## 📱 Pages & Components

### Public Pages
- **Home**: Hero section, testimonials, special offers
- **Menu**: Filterable dish categories with search
- **Combos**: Curated meal combinations
- **Reservation**: Booking system with form validation
- **Contact**: Contact form with business information

### Protected Pages
- **Admin Dashboard**: Analytics, menu management, bookings
- **Staff Dashboard**: Task management, daily operations
- **Login**: Authentication with role-based access

### Key Components
- **Navbar**: Responsive navigation with theme toggle
- **HeroSection**: Video background with compelling CTAs
- **MenuGrid**: Beautiful dish cards with animations
- **TestimonialSlider**: Customer reviews with auto-play
- **CountdownTimer**: FOMO-driven urgency
- **SpecialOffers**: Limited-time deals
- **Footer**: Comprehensive site information

## 🎨 Design System

### Color Palette
- **Primary**: Deep reds (#dc2626, #b91c1c)
- **Saffron**: Warm yellows (#f59e0b, #d97706)
- **Earthy**: Natural tones (#8b4513, #654321)
- **Neutral**: Grays for text and backgrounds

### Typography
- **Display Font**: Bold, elegant headings
- **Body Font**: Clean, readable text
- **Custom Classes**: Tailwind utilities for consistent styling

### Components
- **Cards**: Consistent elevation and hover effects
- **Buttons**: Primary, secondary, and outline variants
- **Forms**: Accessible inputs with validation
- **Modals**: Smooth transitions and backdrop blur

## 🔒 Security Features

- **Protected Routes**: Role-based access control
- **Form Validation**: Client and server-side validation
- **Authentication**: Secure login with Firebase
- **Input Sanitization**: XSS protection
- **HTTPS**: Secure connections in production

## 📊 Performance Optimization

- **Code Splitting**: Lazy-loaded components
- **Image Optimization**: WebP format with fallbacks
- **Bundle Analysis**: Optimized package sizes
- **Caching**: Browser and CDN caching
- **Compression**: Gzip compression for assets

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
3. Deploy automatically on push to main branch

### Manual Deployment
```bash
npm run build
# Upload dist folder to your hosting provider
```

## 🧪 Testing

### Demo Credentials
- **Admin Access**: `admin@namakarikadai.com` / `admin123`
- **Staff Access**: `staff@namakarikadai.com` / `staff123`

### Test Scenarios
1. **Reservation Flow**: Complete booking process
2. **Menu Navigation**: Filter and search functionality
3. **Authentication**: Login with different roles
4. **Responsive Design**: Test on various screen sizes
5. **Theme Toggle**: Dark/light mode switching

## 📈 Analytics & SEO

### SEO Features
- **Meta Tags**: Comprehensive meta information
- **Structured Data**: Restaurant schema markup
- **Sitemap**: XML sitemap for search engines
- **Open Graph**: Social media sharing optimization

### Analytics Integration
- **Google Analytics**: Track user behavior
- **Conversion Tracking**: Monitor booking completions
- **Performance Monitoring**: Core Web Vitals tracking

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Design Inspiration**: Authentic Indian restaurant aesthetics
- **Icons**: Lucide React for beautiful icons
- **Animations**: Framer Motion for smooth interactions
- **Styling**: Tailwind CSS for utility-first design
- **Deployment**: Vercel for seamless hosting

## 📞 Support

For support or questions:
- **Email**: info@namakarikadai.com
- **Phone**: +1 (234) 567-8900
- **Address**: 123 Spice Street, Curry District, CD 12345

---

**NAMA KARI KADAI** - Where every dish tells a story of passion and tradition. 🍛✨ 
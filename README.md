Here’s an improved and more readable version of your notes:

---

### **Project Setup: Next.js with ShadCN**

#### 1. **Application Structure**

The application is divided into two main sections:

- **Marketing Section**:  
  A group of pages for displaying the product (e.g., Homepage, About, etc.).
- **Dashboard Section**:  
  For authenticated users, used for product management and uploads.

#### 2. **Marketing Section**

- Created a layout and added a **Navbar**.
- Used a `_components` folder within the marketing section to differentiate it from routing components (Next.js routing).
- Only marketing-related components are kept inside `_components` to maintain clean code.

#### 3. **Reusable Components**

- Developed a **BrandLogo** component in the UI, designed to be reusable across the entire app.
- Created **Navbar Links** to display products and navigate through the site.

#### 4. **User Authentication with Clerk**

- Implemented **Clerk** for user authentication to secure the application.
- Steps to install and set up Clerk for validation and security:
  1.  Install Clerk package.
  2.  Wrap all necessary components to enable authentication.

#### 5. **Homepage UI Design**

- Built the **Homepage** UI:
  - Added a section showcasing **trusted by companies** logos.
  - Integrated **Pricing** information on the same page.
- Added a **Footer** and **Navbar** for navigation and additional information.

#### 6. **Next Steps**

- Proceed with implementing **authentication** via Clerk across other pages.
- Move on to designing and building the next set of pages.

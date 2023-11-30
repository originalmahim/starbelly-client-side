# Live Link

<a href="https://starbellymeals-deb98.web.app">Live Link - 1</a>


# Website Features: Starbelly

#### HomePage:
1. **Navbar:**
   - Logo + Website Name
   - Home, Meals, Upcoming Meals
   - Notification Icon
   - Join Us (when not logged in)
   - Profile Picture (when logged in)
   - Dropdown (Profile Picture):
      - User Name (not clickable)
      - Dashboard
      - Logout

2. **Banner Section:**
   - Slider/Banner
   - Heading Title
   - Short Description
   - Search Input Field with Button

3. **Meals by Category:**
   - Tab system (Breakfast, Lunch, Dinner, All Meals)
   - Minimum of 3 Meal Cards per Tab
   - Active Tab Feature
   - Meal Card:
      - Title
      - Image
      - Rating
      - Price
      - Details Button (Redirect to `.../meal/${_id}`)
      - View All Button (Redirect to Meals Page)

4. **Extra Sections:**
   - Additional relevant sections

5. **Membership Section:**
   - Silver, Gold, Platinum Packages
   - Different Prices for Each Package
   - Redirect to (`.../checkout/${package_name}`) on Package Card Click

6. **Footer Section:**
   - Relevant footer content

#### Meal Detail Page:
7. **Meal Details:**
   - Meal Image
   - Admin/Meal Distributor Name
   - Meal Description
   - Ingredients
   - Post Time
   - Rating
   - Like Button (requires login)
   - Meal Request Button (requires login)
   - Reviews

8. **Like Button:**
   - Increase Reaction Count
   - Change Appearance for Liked State

9. **Meal Request Button:**
   - Requires Login
   - Post Request to Save Meal and User Information
   - Default Status: Pending
   - Dashboard to Display Requested Meals

10. **Meals Page:**
    - Show All Meals
    - Search Functionality
    - Filter by Category and Price Range
    - Infinite Scrolling

#### Upcoming Meals:
11. - Show All Upcoming Meals as Cards
    - User Can Like Each Meal

#### Checkout Page (Private Route):
12. - Dynamic and Private Route
    - Show Package Details
    - Implement Stripe Payment
    - Confirmation Modal
    - Badge Reward After Purchase

#### Join Us Page (Login/Register):
13. - Authentication Pages
    - Login Form
    - Redirect to Register Page
    - Social Login
    - React Hook Form
    - Bronze Badge on First-time User Registration

#### User Dashboard (Private Route):
14. **Dashboard Layout:**
   - Routes: My Profile, Requested Meals, My Reviews

15. **My Profile:**
   - User Name, Image, Email, Badges
   - Bronze Badge (First-time Registration)
   - Gold Badge (After Premium Package Purchase)

16. **Requested Meals:**
   - Tabular Display
   - Meal Title, Likes Count, Reviews Count, Status
   - Cancel Button

17. **My Reviews:**
   - Tabular Display
   - Meal Title, Likes Count, Reviews Count
   - Edit, Delete, View Meal Buttons

#### Admin Dashboard (Private Route):
18. **Admin Dashboard Layout:**
   - Routes: Admin Profile, Manage Users, Add Meal, All Meals, All Reviews, Serve Meals, Upcoming Meals

19. **Manage Users:**
   - Tabular Display
   - User Name, User Email, Make Admin, Subscription Status
   - Make User Admin Functionality
   - Server-side Search

20. **Add Meal:**
    - Form with Various Fields
    - React Hook Form
    - Add Meal and Add to Upcoming Functionality
    - Toast/Alert on Success

21. **All Meals:**
    - Tabular Display
    - Meal Title, Likes Count, Reviews Count, Distributor Name, Distributor Email
    - Update, Delete, View Meal Buttons

22. **All Reviews:**
    - Tabular Display
    - Meal Title, Likes Count, Reviews Count
    - Delete, View Meal Buttons
    - Sort by Likes and Reviews Count

23. **Serve Meals:**
    - Tabular Display of Requested Meals
    - Serve Button to Change Status from Pending to Delivered
    - Server-side Search

24. **Upcoming Meals:**
    - Tabular Display
    - Sort by Likes Count
    - Publish/Production Button (Adds Meal to All Meals Collection)
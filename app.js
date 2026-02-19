// It just the side bar fields
const MENU = [
  { label: "Dashboard", href: "index.html", badge: null },

  { label: "Registration Requests", href: "#", badge: null },
  { label: "Users Management", href: "#", badge: null },

  { label: "Affiliates Commissions", href: "my-commissions-log.html", badge: null },
  { label: "Reseller Commissions", href: "my-commissions.html", badge: null },

  { label: "Category Management", href: "#", badge: null },
  { label: "Product Management", href: "#", badge: null },

  { label: "Advanced Search Filters", href: "#", badge: null },
  { label: "Play Audio", href: "#", badge: null },
  { label: "Job Bookings", href: "#", badge: null },
  { label: "Vehicle Manager", href: "my-vehicle.html", badge: null },
  { label: "Advanced Searches", href: "#", badge: null },
  { label: "Supply", href: "#", badge: null },
  { label: "Shop in Marketplace", href: "#", badge: null },
  { label: "Membership", href: "#", badge: null },

  { label: "Order Management", href: "#", badge: null },
  { label: "Order Refunds", href: "#", badge: null },
  { label: "Payment List", href: "#", badge: null },

  { label: "Logistics", href: "#", badge: null },
  { label: "Geo Locations", href: "#", badge: null },
  { label: "Audio Management", href: "#", badge: null },

  { label: "Bank Account Settings", href: "#", badge: null },
  { label: "Account Calculation Settings", href: "#", badge: null },
  { label: "Account Credit Bonuses", href: "#", badge: null },

  { label: "How To Library", href: "#", badge: null },
  { label: "Support Center", href: "my-support-tickets.html", badge: null },
];

const ROLE_TABS = ["Super Admin", "Sub Admin", "Workshop", "Delivery Agent", "Customer"];


const ICONS = {
  registration: "assets/icon/Registration-request.png",
  users: "assets/icon/User-management.png",
  affiliates: "assets/icon/Affilates-commissions.png", 
  reseller: "assets/icon/Affilates-commissions.png",
  category: "assets/icon/Category-management.png",
  product: "assets/icon/Product-management.png",
  inbound: "assets/icon/order-management.png",
  processing: "assets/icon/Order-processing.png",
  outbound: "assets/icon/Outdoor-management.png",
  cancel: "assets/icon/Cancellations.png",
  marketplace: "assets/icon/marketplace.png",
  logistics: "assets/icon/Logistics.png",
  internalDelivery: "assets/icon/delivery-management.png",
  library: "assets/icon/Library.png",
  support: "assets/icon/Support-center.png",
  settings: "assets/icon/Settings.png",
  credit: "assets/icon/credit-bonuses.png",
  fallback: "assets/icon/Settings.png",
};

const TILES = [
  {
    title: "Registration Request",
    icon: ICONS.registration,
    sub: "View and approve new user registrations.",
    links: [{ label: "View Requests", href: "#" }],
    roles: ["Super Admin", "Sub Admin"],
  },
  {
    title: "Users Management",
    icon: ICONS.users,
    sub: "Manage customer / workshop / delivery users and verification.",
    links: [
      { label: "Customers", href: "#" },
      { label: "Delivery Agents", href: "#" },
      { label: "Verify Commercial Users", href: "#" },
    ],
    roles: ["Super Admin", "Sub Admin"],
  },
  {
    title: "Affiliates Commissions",
    icon: ICONS.affiliates,
    sub: "View and manage affiliate commission records and reports.",
    links: [{ label: "View Commissions", href: "my-commissions-log.html" }],
    roles: ["Super Admin", "Sub Admin"],
  },
  {
    title: "Category Management",
    icon: ICONS.category,
    sub: "Create, list and manage product categories.",
    links: [
      { label: "New Category", href: "#" },
      { label: "List Categories", href: "#" },
      { label: "Archived Categories", href: "#" },
    ],
    roles: ["Super Admin", "Sub Admin"],
  },
  {
    title: "Product Management",
    icon: ICONS.product,
    sub: "Add products, update listings and manage archived items.",
    links: [
      { label: "New Product", href: "#" },
      { label: "List Products", href: "#" },
      { label: "Archived Products", href: "#" },
    ],
    roles: ["Super Admin", "Sub Admin", "Workshop"],
  },
  {
    title: "Inbound Order Management",
    icon: ICONS.inbound,
    sub: "Customer orders: quotes, approvals and payment pending.",
    links: [
      { label: "Place Customer Quote", href: "#" },
      { label: "Pending Approval", href: "#" },
      { label: "Pending Payment", href: "#" },
    ],
    roles: ["Super Admin", "Sub Admin", "Workshop"],
  },
  {
    title: "Order Processing",
    icon: ICONS.processing,
    sub: "Verify payments and move orders through picking stages.",
    links: [
      { label: "Awaiting Payment Verification", href: "#" },
      { label: "Orders Partially Paid", href: "#" },
      { label: "Orders Pick & Pack", href: "#" },
    ],
    roles: ["Super Admin", "Sub Admin", "Workshop"],
  },
  {
    title: "Outbound Order Management",
    icon: ICONS.outbound,
    sub: "Dispatch, pickup, transit and delivery tracking.",
    links: [
      { label: "Orders Awaiting Dispatch", href: "#" },
      { label: "Orders In Transit", href: "#" },
      { label: "Orders Delivered", href: "#" },
    ],
    roles: ["Super Admin", "Sub Admin", "Delivery Agent", "Workshop"],
  },
  {
    title: "Cancellations, Refunds & Credits",
    icon: ICONS.cancel,
    sub: "Handle cancellations, refunds and customer approval flows.",
    links: [
      { label: "Cancelled Orders", href: "#" },
      { label: "Refunds Pending", href: "#" },
      { label: "Refunds Finalised", href: "#" },
    ],
    roles: ["Super Admin", "Sub Admin"],
  },
  {
    title: "Marketplace",
    icon: ICONS.marketplace,
    sub: "Manage marketplace categories, items and listings.",
    links: [
      { label: "Categories", href: "#" },
      { label: "Items", href: "#" },
    ],
    roles: ["Super Admin", "Sub Admin"],
  },
  {
    title: "Logistics",
    icon: ICONS.logistics,
    sub: "Delivery jobs, pickup points and internal delivery management.",
    links: [
      { label: "View Delivery Jobs", href: "#" },
      { label: "Pickup Points", href: "#" },
      { label: "Order Tracking", href: "#" },
    ],
    roles: ["Super Admin", "Sub Admin", "Delivery Agent"],
  },
  {
    title: "Internal Delivery Management",
    icon: ICONS.internalDelivery,
    sub: "Set up internal delivery jobs and track deliveries handled in-house.",
    links: [
      { label: "Setup Internal Delivery", href: "#" },
      { label: "View Internal Delivery Jobs", href: "#" },
    ],
    roles: ["Super Admin", "Sub Admin", "Workshop"],
  },
  {
    title: "How To Library",
    icon: ICONS.library,
    sub: "Knowledge base: category videos, articles and guides.",
    links: [
      { label: "Articles", href: "#" },
      { label: "How-To Videos", href: "#" },
      { label: "How-To Articles", href: "#" },
    ],
    roles: ["Super Admin", "Sub Admin", "Workshop", "Delivery Agent", "Customer"],
  },
  {
    title: "Support Center",
    icon: ICONS.support,
    sub: "View support cases and create customer support tickets.",
    links: [
      { label: "View Support Cases", href: "my-support-tickets.html" },
      { label: "Create Support Case", href: "my-support-tickets.html#new" },
    ],
    roles: ["Super Admin", "Sub Admin", "Workshop", "Delivery Agent"],
  },
  {
    title: "Settings",
    icon: ICONS.settings,
    sub: "Manage profile settings, security, roles and system preferences.",
    links: [
      { label: "Profile Settings", href: "profile.html" },
      { label: "Password & Security", href: "profile.html#password" },
      { label: "User Role Settings", href: "#" },
    ],
    roles: ["Super Admin", "Sub Admin"],
  },
  {
    title: "Account Credit Bonuses",
    icon: ICONS.credit,
    sub: "Signup bonuses and customer shipping credits.",
    links: [
      { label: "New Sign Up Bonuses", href: "#" },
      { label: "Customer Shipping Docs", href: "#" },
    ],
    roles: ["Super Admin", "Sub Admin"],
  },

  // Customer / Workshop / Delivery samples
  {
    title: "My Orders",
    icon: ICONS.inbound,
    sub: "Track your orders and view invoices.",
    links: [{ label: "Order History", href: "#" }, { label: "Invoices", href: "#" }],
    roles: ["Customer"],
  },
  {
    title: "My Delivery Jobs",
    icon: ICONS.internalDelivery,
    sub: "See assigned delivery jobs and update delivery status.",
    links: [{ label: "Assigned Jobs", href: "#" }, { label: "Update Status", href: "#" }],
    roles: ["Delivery Agent"],
  },
  {
    title: "Workshop Queue",
    icon: ICONS.product,
    sub: "Manage workshop order queue and job updates.",
    links: [{ label: "Pending Jobs", href: "#" }, { label: "Completed Jobs", href: "#" }],
    roles: ["Workshop"],
  },
];

// Cache important DOM elements
// These are the main containers used to render the sidebar, dashboard grid, and role selection tabs.
const menuEl = document.getElementById("menu");
const gridEl = document.getElementById("grid");
const tabsEl = document.getElementById("roleTabs");

let currentRole = "Sub Admin";

// Render Sidebar Menu
// Dynamically builds the left navigationusing the MENU configuration above.
// This keeps the sidebar scalable and easy to maintain.
function renderMenu() {
  if (!menuEl) return;
  menuEl.innerHTML = "";

  MENU.forEach((item) => {
    const a = document.createElement("a");
    a.href = item.href || "#";
    a.className = "menu-item";

    a.innerHTML = `
      <div class="menu-left">
        <span>▸</span>
        <span>${item.label}</span>
      </div>
      ${item.badge !== null ? `<span class="badge">${item.badge}</span>` : ``}
    `;

    menuEl.appendChild(a);
  });
}

// Render role tabs
// Displays available user roles at the top and allows switching dashbooard content based on selected role.
function renderTabs() {
  if (!tabsEl) return;
  tabsEl.innerHTML = "";

  ROLE_TABS.forEach((role) => {
    const btn = document.createElement("button");
    btn.className = "tab" + (role === currentRole ? " active" : "");
    btn.textContent = role;
    btn.onclick = () => {
      currentRole = role;
      renderTabs();
      renderGrid();
    };
    tabsEl.appendChild(btn);
  });
}

// Render Dashboard Tiles
// Filters and displays tiles based on the currently selected user role.
// Each tile contains title, description,icon, and quick action links.
function renderGrid() {
  if (!gridEl) return;
  gridEl.innerHTML = "";

  const filtered = TILES.filter((t) => t.roles.includes(currentRole));

  filtered.forEach((tile) => {
    const card = document.createElement("div");
    card.className = "card";

    const safeIcon = tile.icon || ICONS.fallback;

    card.innerHTML = `
      <div class="card-top">
        <div>
          <div class="card-title">${tile.title}</div>
          <div class="card-sub">${tile.sub}</div>
        </div>

        <div class="icon-ring">
          <img
            class="card-icon-img"
            src="${safeIcon}"
            alt="${tile.title} icon"
            onerror="this.src='${ICONS.fallback}'"
          />
        </div>
      </div>

      <div class="card-links">
        ${tile.links
          .map((l) => `<a href="${l.href || "#"}">${l.label}</a>`)
          .join("")}
      </div>
    `;

    gridEl.appendChild(card);
  });

  if (filtered.length === 0) {
    const empty = document.createElement("div");
    empty.className = "card";
    empty.innerHTML = `
      <div class="card-title">No tiles for ${currentRole}</div>
      <div class="card-sub">Add role permissions for this user type in app.js</div>
    `;
    gridEl.appendChild(empty);
  }
}

// Sidebar toggle (mobile)
// Handles sidebar collapse on desktop and drawer-style overlay on mobile/split view.
document.getElementById("toggleSidebar")?.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation(); 

  const isNarrow = window.matchMedia("(max-width: 1100px)").matches;

  if (isNarrow) {
    //  split-screen/mobile: use drawer mode
    document.body.classList.toggle("sidebar-open");
  } else {
    //  desktop: your old hide/show behaviour (optional)
    document.body.classList.toggle("sidebar-hidden");
  }
});



//  Close sidebar drawer when clicking outside (mobile/split view)
document.addEventListener("click", (e) => {
  const isNarrow = window.matchMedia("(max-width: 1100px)").matches;
  if (!isNarrow) return;

  // if drawer not open, nothing to do
  if (!document.body.classList.contains("sidebar-open")) return;

  const sidebar = document.querySelector(".sidebar");
  const toggleBtn = document.getElementById("toggleSidebar");

  // if click is inside sidebar OR on the toggle button, ignore
  if ((sidebar && sidebar.contains(e.target)) || (toggleBtn && toggleBtn.contains(e.target))) {
    return;
  }

  // otherwise close drawer
  document.body.classList.remove("sidebar-open");
});

// If user resizes window (split screen), make sure overlay doesn't remain stuck
window.addEventListener("resize", () => {
  const isNarrow = window.matchMedia("(max-width: 1100px)").matches;

  // if we move to desktop width, remove mobile drawer state
  if (!isNarrow) {
    document.body.classList.remove("sidebar-open");
  }
});


// User dropdown behaviour
// Controls opening and closing of the profile dropdown menu (Edit, Logout, etc).
// Includes click outside & Escape key handling.

const userBtn = document.getElementById("userBtn");
const userMenu = document.getElementById("userMenu");
const userDropdown = document.getElementById("userDropdown");

function openUserMenu() {
  userMenu?.classList.add("open");
  userBtn?.setAttribute("aria-expanded", "true");
}
function closeUserMenu() {
  userMenu?.classList.remove("open");
  userBtn?.setAttribute("aria-expanded", "false");
}
function toggleUserMenu() {
  const isOpen = userMenu?.classList.contains("open");
  if (isOpen) closeUserMenu();
  else openUserMenu();
}

userBtn?.addEventListener("click", (e) => {
  e.stopPropagation();
  toggleUserMenu();
});

document.addEventListener("click", (e) => {
  if (!userDropdown) return;
  if (!userDropdown.contains(e.target)) closeUserMenu();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeUserMenu();
});
// User Action Handlers
// Handles Edit Profile, Retail Mode toggle,and Logout functionality

document.getElementById("editProfileBtn")?.addEventListener("click", () => {
  closeUserMenu();
  window.location.href = "./profile.html";
});

document.getElementById("retailModeBtn")?.addEventListener("click", () => {
  closeUserMenu();
  const current = localStorage.getItem("retailMode") === "true";
  localStorage.setItem("retailMode", (!current).toString());
  alert(`Retail Mode: ${!current ? "Activated" : "Deactivated"}`);
});

document.getElementById("logoutBtn")?.addEventListener("click", () => {
  closeUserMenu();
  localStorage.removeItem("authToken");
  sessionStorage.clear();
  window.location.href = "./login.html";
});

// Initial render- Executes required render functions when the application loads

renderMenu();
renderTabs();
renderGrid();


// Enhanced Search Logic
// Provides live suggestions, loading spinner,and filter chips for better UX.


const searchInput = document.getElementById("topSearchInput");
const suggestionsBox = document.getElementById("searchSuggestions");
const chipsContainer = document.getElementById("searchChips");
const spinner = document.getElementById("searchSpinner");

// Collect searchable items (from tiles)
const searchableItems = TILES.map(t => t.title);

searchInput?.addEventListener("input", (e) => {

  const value = e.target.value.toLowerCase();

  if (!value) {
    suggestionsBox.style.display = "none";
    return;
  }

  // Show loading spinner
  spinner.style.display = "block";

  setTimeout(() => {
    spinner.style.display = "none";

    const filtered = searchableItems.filter(item =>
      item.toLowerCase().includes(value)
    );

    suggestionsBox.innerHTML = filtered
      .map(item => `<div>${item}</div>`)
      .join("");

    suggestionsBox.style.display = filtered.length ? "block" : "none";
  }, 400); 
});

// Click suggestion
suggestionsBox?.addEventListener("click", (e) => {
  if (e.target.tagName === "DIV") {

    const text = e.target.innerText;

    addSearchChip(text);

    searchInput.value = "";
    suggestionsBox.style.display = "none";
  }
});

function addSearchChip(text){

  const chip = document.createElement("div");
  chip.className = "search-chip";
  chip.innerHTML = `
    ${text}
    <span>×</span>
  `;

  chip.querySelector("span").addEventListener("click", () => {
    chip.remove();
  });

  chipsContainer.appendChild(chip);
}

// Notification System
// Manages notification dropdown,dynamic count badge

const notificationBtn = document.getElementById("notificationBtn");
const notificationDropdown = document.getElementById("notificationDropdown");
const notificationList = document.getElementById("notificationList");
const notificationCount = document.getElementById("notificationCount");

// Sample notifications (I jused used to test this feature how it works and the data's I've mentioned is fake)
const notifications = [
  "New support case created",
  "Order #5562 shipped",
  "Payment received from customer",
  "New user registration pending"
];

// Render notifications
function renderNotifications(){
  notificationList.innerHTML = notifications
    .map(note => `<div class="notification-item">${note}</div>`)
    .join("");

  notificationCount.innerText = notifications.length;
}

// Toggle dropdown
notificationBtn?.addEventListener("click", (e) => {
  e.stopPropagation();
  notificationDropdown.classList.toggle("open");
});

// Close when clicking outside
document.addEventListener("click", (e) => {
  if(!document.getElementById("notificationWrapper")?.contains(e.target)){
    notificationDropdown.classList.remove("open");
  }
});

renderNotifications();

// Dark Mode Toggle-allows user to toggle between light and dark themes

const darkToggle = document.getElementById("darkModeToggle");

// Load saved theme on page load
if (localStorage.getItem("darkMode") === "true") {
  document.body.classList.add("dark-mode");
}

// Toggle dark mode
darkToggle?.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  const isDark = document.body.classList.contains("dark-mode");
  localStorage.setItem("darkMode", isDark);
});

// Active sidebar it just helps to improve the navigation claruty and only one items remains active at a time
document.querySelectorAll('.sidebar a').forEach(link => {
  link.addEventListener('click', function () {
    document.querySelectorAll('.sidebar a').forEach(l => l.classList.remove('active'));
    this.classList.add('active');
  });
});


//  Live Clock feature comes with a active clock to provide real-time system feedbacks

function updateClock() {
  const now = new Date();
  const clock = document.getElementById("liveClock");

  if (clock) {
    clock.textContent = now.toLocaleTimeString();
  }
}

setInterval(updateClock, 1000);
updateClock();

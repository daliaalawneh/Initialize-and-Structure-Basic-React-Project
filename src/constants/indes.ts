export type MenuLink = {
  label: string;
  path: string;
} 

export const studentList:MenuLink[] = [
  { label: "Dashboard", path: "" },
  { label: "My Orders", path: "orders" },
  { label: "Assignments", path: "assignments" },
  { label: "Grades", path: "grades" },
  { label: "Schedule", path: "schedule" },
  { label: "Messages", path: "messages" },
  { label: "Profile", path: "profile" },
  { label: "Settings", path: "settings" },
  { label: "Logout", path: "logout" }
];

export const rootList:MenuLink[] = [
  { label: "Dashboard", path: "" },
  { label: "User Management", path: "users" },
  { label: "Role Management", path: "roles" },
  { label: "System Settings", path: "settings" },
  { label: "Reports", path: "reports" },
  { label: "Logs", path: "logs" },
  { label: "Audit Trail", path: "audit" },
  { label: "Notifications", path: "notifications" },
  { label: "Profile", path: "profile" },
  { label: "Logout", path: "logout" }
];

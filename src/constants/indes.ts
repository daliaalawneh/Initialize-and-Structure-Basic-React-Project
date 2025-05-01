export type MenuLink = {
  label: string;
  path: string;
} 

export const studentList:MenuLink[] = [
  { label: "Dashboard", path: "" },
  { label: "My Orders", path: "orders" },
];

export const rootList:MenuLink[] = [
  { label: "Dashboard", path: "" },
];

import {
  adminProductBacklog,
  adminProductFilters,
  adminProductRows,
  adminProductStats,
  getAdminProductStatusTone,
} from '../data/admin-products.mock';

export const useAdminProducts = () => ({
  backlog: adminProductBacklog,
  filters: adminProductFilters,
  getStatusTone: getAdminProductStatusTone,
  products: adminProductRows,
  stats: adminProductStats,
});


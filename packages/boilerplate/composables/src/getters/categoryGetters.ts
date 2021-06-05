import { CategoryGetters, AgnosticCategoryTree } from '@kali604/core';
import { Category } from '@vue-storefront/boilerplate-api/src/types';

const itemToTree = (category: Category): AgnosticCategoryTree => {
  return {
    label: category.name,
    slug: category.slug,
    items: category.items.map(itemToTree),
    isCurrent: false
  };
};
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getCategoryTree = (category: Category): AgnosticCategoryTree => {
  if (category) {
    return itemToTree(category);
  }
  return {} as AgnosticCategoryTree;
};

const categoryGetters: CategoryGetters<Category> = {
  getTree: getCategoryTree
};

export default categoryGetters;

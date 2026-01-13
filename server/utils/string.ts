

export const slugify = (name: string) => {
    return name
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, '')   // Remove all non-word characters except spaces and hyphens
        .replace(/[\s_-]+/g, '-')   // Replace spaces and underscores with hyphens
        .replace(/^-+|-+$/g, '');   // Remove leading and trailing hyphens
}
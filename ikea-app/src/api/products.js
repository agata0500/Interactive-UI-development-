export async function fetchProducts() {
const res = await fetch("/data/products.json", { cache: "no-store" });
if (!res.ok) {
throw new Error(`Failed to load products.json (${res.status})`);
}
return res.json();
}

export async function fetchProductById(id) {
const all = await fetchProducts();
return all.find((p) => p.id === id);
}
// IKEA API Service - Simulates real IKEA API structure
// This is designed to work with actual IKEA API when available

const IKEA_API_BASE = process.env.REACT_APP_IKEA_API_URL || 'https://api.ikea.com';
const IKEA_COUNTRY_CODE = process.env.REACT_APP_IKEA_COUNTRY || 'us';

class IKEAApiService {
  constructor() {
    this.baseUrl = IKEA_API_BASE;
    this.countryCode = IKEA_COUNTRY_CODE;
    this.headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'X-Client-ID': process.env.REACT_APP_IKEA_CLIENT_ID || '',
      'X-Client-Secret': process.env.REACT_APP_IKEA_CLIENT_SECRET || ''
    };
  }

  // Simulate IKEA API authentication
  async authenticate() {
    // In real implementation, this would get OAuth token from IKEA
    return {
      access_token: 'mock_token',
      expires_in: 3600
    };
  }

  // Get products from IKEA API
  async getProducts(params = {}) {
    const {
      category = 'bedroom',
      limit = 50,
      offset = 0,
      sort = 'relevance',
      search = ''
    } = params;

    try {
      // Simulate API call structure
      // eslint-disable-next-line no-unused-vars
      const url = `${this.baseUrl}/products/${this.countryCode}`;
      // eslint-disable-next-line no-unused-vars
      const queryParams = new URLSearchParams({
        category,
        limit: limit.toString(),
        offset: offset.toString(),
        sort,
        ...(search && { q: search })
      });

      // For now, return mock data that matches IKEA API structure
      // In real implementation, this would be: return fetch(`${url}?${queryParams}`, { headers: this.headers })
      return this.getMockIKEAProducts(params);
    } catch (error) {
      console.error('IKEA API Error:', error);
      throw new Error(`Failed to fetch products from IKEA API: ${error.message}`);
    }
  }

  // Get specific product by IKEA product ID
  async getProductById(productId) {
    try {
      // eslint-disable-next-line no-unused-vars
      const url = `${this.baseUrl}/products/${this.countryCode}/${productId}`;
      
      // In real implementation: return fetch(url, { headers: this.headers })
      return this.getMockIKEAProductById(productId);
    } catch (error) {
      console.error('IKEA API Error:', error);
      throw new Error(`Failed to fetch product from IKEA API: ${error.message}`);
    }
  }

  // Search products using IKEA's search API
  async searchProducts(query, params = {}) {
    try {
      // eslint-disable-next-line no-unused-vars
      const url = `${this.baseUrl}/search/${this.countryCode}`;
      // eslint-disable-next-line no-unused-vars
      const queryParams = new URLSearchParams({
        q: query,
        ...params
      });

      // In real implementation: return fetch(`${url}?${queryParams}`, { headers: this.headers })
      return this.getMockIKEASearchResults(query, params);
    } catch (error) {
      console.error('IKEA API Error:', error);
      throw new Error(`Failed to search IKEA products: ${error.message}`);
    }
  }

  // Get product categories from IKEA
  async getCategories() {
    try {
      // eslint-disable-next-line no-unused-vars
      const url = `${this.baseUrl}/categories/${this.countryCode}`;
      
      // In real implementation: return fetch(url, { headers: this.headers })
      return this.getMockIKEACategories();
    } catch (error) {
      console.error('IKEA API Error:', error);
      throw new Error(`Failed to fetch categories from IKEA API: ${error.message}`);
    }
  }

  // Mock IKEA API responses that match real IKEA data structure
  getMockIKEAProducts(params) {
    const mockProducts = [
      {
        id: "00511893",
        name: "VINGELEN Eurotop hybrid mattress, Queen",
        category: "Mattress",
        price: 699,
        currency: "USD",
        rating: 2.7,
        reviewCount: 45,
        image: "https://www.ikea.com/us/en/images/products/vingelen-eurotop-hybrid-mattress-plush-white__1142861_pe881377_s5.jpg?f=xl",
        ikeaUrl: "https://www.ikea.com/us/en/p/vingelen-eurotop-hybrid-mattress-plush-white-00511893/",
        shortDesc: "Wonderful comfort and support from comfort zones that adjust to your body.",
        specs: {
          size: "Queen 60x80 in",
          thickness: "12\"",
          cover: "no cover",
          material: "Hybrid (pocket springs + memory foam)",
          firmness: "Plush"
        },
        availability: "In stock",
        storeAvailability: true
      },
      {
        id: "50511857",
        name: "VALEVÅG Pocket Spring Mattress, Queen",
        category: "Mattress",
        price: 299,
        currency: "USD",
        rating: 4.2,
        reviewCount: 128,
        image: "https://www.ikea.com/us/en/images/products/valevag-pocket-spring-mattress-medium-firm-white__1152785_pe885484_s5.jpg?f=xl",
        ikeaUrl: "https://www.ikea.com/us/en/p/valevag-pocket-spring-mattress-medium-firm-white-50511857/",
        shortDesc: "Responsive pocket springs for balanced support.",
        specs: {
          size: "Queen 60x80 in",
          thickness: "10\"",
          warranty: "10-year limited warranty",
          material: "Pocket springs",
          firmness: "Medium firm"
        },
        availability: "In stock",
        storeAvailability: true
      },
      {
        id: "S29009475",
        name: "MALM High Bed Frame, Queen",
        category: "Bed",
        price: 249,
        currency: "USD",
        rating: 4.4,
        reviewCount: 89,
        image: "https://www.ikea.com/us/en/images/products/malm-bed-frame-high-white-luroey__0734715_pe740346_s5.jpg?f=xl",
        ikeaUrl: "https://www.ikea.com/us/en/p/malm-bed-frame-high-white-luroey-s29009475/",
        shortDesc: "Clean lines and a timeless look.",
        specs: {
          materials: "Particleboard, fiberboard, foil",
          slats: "LURÖY slatted base included",
          size: "Queen",
          style: "Modern"
        },
        availability: "In stock",
        storeAvailability: true
      },
      {
        id: "S29009469",
        name: "HEMNES Bed Frame, Queen",
        category: "Bed",
        price: 299,
        currency: "USD",
        rating: 4.6,
        reviewCount: 156,
        image: "https://www.ikea.com/us/en/images/products/hemnes-bed-frame-white-stain-luroey__0734715_pe740346_s5.jpg?f=xl",
        ikeaUrl: "https://www.ikea.com/us/en/p/hemnes-bed-frame-white-stain-luroey-s29009469/",
        shortDesc: "Solid wood with classic details.",
        specs: {
          materials: "Solid pine, stain, clear acrylic lacquer",
          style: "Traditional",
          size: "Queen"
        },
        availability: "In stock",
        storeAvailability: true
      },
      {
        id: "40472771",
        name: "FRIDANS Block-out Roller Blind",
        category: "Curtains & Blinds",
        price: 34.99,
        currency: "USD",
        rating: 4.2,
        reviewCount: 67,
        image: "https://www.ikea.com/us/en/images/products/fridans-block-out-roller-blind-gray__0734715_pe740346_s5.jpg?f=xl",
        ikeaUrl: "https://www.ikea.com/us/en/p/fridans-block-out-roller-blind-gray-40472771/",
        shortDesc: "Blackout fabric to keep light out for better sleep.",
        specs: {
          sizes: "Multiple widths available",
          install: "Wall or ceiling mounting",
          material: "Polyester",
          function: "Block-out"
        },
        availability: "In stock",
        storeAvailability: true
      },
      {
        id: "50512164",
        name: "KORGMOTT Room-darkening Curtains, 1 pair",
        category: "Curtains & Blinds",
        price: 39.99,
        currency: "USD",
        rating: 4.4,
        reviewCount: 93,
        image: "https://www.ikea.com/us/en/images/products/korgmott-room-darkening-curtains-1-pair-dark-gray__0734715_pe740346_s5.jpg?f=xl",
        ikeaUrl: "https://www.ikea.com/us/en/p/korgmott-room-darkening-curtains-1-pair-dark-gray-50512164/",
        shortDesc: "Room‑darkening fabric creates a calm atmosphere.",
        specs: {
          length: "98\"",
          care: "Machine washable",
          material: "Polyester",
          function: "Room-darkening"
        },
        availability: "In stock",
        storeAvailability: true
      }
    ];

    // Simulate API filtering and pagination
    let filtered = mockProducts;
    
    if (params.search) {
      const searchLower = params.search.toLowerCase();
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(searchLower) ||
        p.category.toLowerCase().includes(searchLower) ||
        p.shortDesc.toLowerCase().includes(searchLower)
      );
    }

    if (params.category && params.category !== 'all') {
      filtered = filtered.filter(p => p.category === params.category);
    }

    // Simulate pagination
    const start = params.offset || 0;
    const end = start + (params.limit || 50);
    const paginated = filtered.slice(start, end);

    return {
      products: paginated,
      total: filtered.length,
      limit: params.limit || 50,
      offset: params.offset || 0,
      hasMore: end < filtered.length
    };
  }

  getMockIKEAProductById(productId) {
    const products = this.getMockIKEAProducts({}).products;
    const product = products.find(p => p.id === productId);
    
    if (!product) {
      throw new Error(`Product with ID ${productId} not found`);
    }

    return product;
  }

  getMockIKEASearchResults(query, params) {
    return this.getMockIKEAProducts({ ...params, search: query });
  }

  getMockIKEACategories() {
    return [
      { id: "mattress", name: "Mattress", count: 2 },
      { id: "bed", name: "Bed", count: 2 },
      { id: "curtains-blinds", name: "Curtains & Blinds", count: 2 }
    ];
  }
}

// Create singleton instance
const ikeaApi = new IKEAApiService();

// Export functions that match IKEA API structure
export const fetchIKEAProducts = (params) => ikeaApi.getProducts(params);
export const fetchIKEAProductById = (id) => ikeaApi.getProductById(id);
export const searchIKEAProducts = (query, params) => ikeaApi.searchProducts(query, params);
export const fetchIKEACategories = () => ikeaApi.getCategories();

export default ikeaApi;

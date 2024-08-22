export type Product = {
    productName: string,
    description: string,
    quantity: number
}

export function getProducts(): Product[] {
    return [
        {
            productName: "Wireless Headphones",
            description: "High-quality noise-cancelling wireless headphones with a long-lasting battery.",
            quantity: 150
        },
        {
            productName: "Smartphone",
            description: "Latest model with cutting-edge technology, fast processor, and high-resolution display.",
            quantity: 300
        },
        {
            productName: "Laptop Stand",
            description: "Ergonomic laptop stand designed to improve posture and reduce neck strain.",
            quantity: 75
        },
        {
            productName: "Portable Charger",
            description: "Compact and high-capacity portable charger compatible with various devices.",
            quantity: 200
        },
        {
            productName: "Bluetooth Speaker",
            description: "Durable, water-resistant Bluetooth speaker with excellent sound quality.",
            quantity: 125
        }
    ];

}